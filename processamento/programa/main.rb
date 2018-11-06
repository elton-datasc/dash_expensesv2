require 'Nokogiri'
require 'csv'
require_relative 'Utils'

TRANSACAO = './/BANKTRANLIST/STMTTRN'
DATA = './DTPOSTED/text()'
DESCRICAO = './MEMO/text()'
VALOR = './TRNAMT/text()'
TAXA = './CURRENCY/CURRATE/text()'

DADOS = '../dados/'
#PATH_CARTAO = '../dados/cartao/*.ofx'
PATH_CARTAO = '../dados/cartao/*Out_18.ofx'
PATH_CONTA = '../dados/conta/*.csv'


def letter?(lookAhead)
  lookAhead =~ /[[:alpha:]]/
end

def converteXMLemCSV file
  puts file
  file = File.open(file, 'r')
  string = file.read
  comeco = string.index('<OFX>')
  string = string[comeco..string.length]
  doc = Nokogiri::XML(string)
  doc.xpath(TRANSACAO).each do |transacao|
    taxa = transacao.xpath(TAXA).to_s.to_f
    data = transacao.xpath(DATA).to_s
    data = "#{data[4..5]}/#{data[6..7]}/#{data[0..3]}"
    descricao = transacao.xpath(DESCRICAO).to_s
    parcela = ";"
    if (descricao.include? 'PARC')
      inicio = descricao.index('PARC')
      parcela = "PARC;#{descricao[inicio+5..inicio+9]}"
      descricao = "#{descricao[0..inicio-1]}  #{descricao[inicio+10..descricao.length]}"
    end
    localizacao = ""
    if (descricao.include? '  ')
      localizacao = descricao.gsub(%r{.*\s\s+}, "")
      comeco = descricao.gsub(%r{\s\s+.*}, "")
      if letter?localizacao[0]
        descricao = comeco
        localizacao = localizacao.upcase
      else
        localizacao = ""
      end
    end
    valor = transacao.xpath(VALOR).to_s.to_f
    if taxa != 0
      #puts "\nValor original: #{valor}, Taxa: #{taxa}"
      valor *= taxa
    end
    #valor = valor.to_s.gsub(%r{\.}, ",")
    transacao = "#{data};#{descricao};#{parcela};#{localizacao};cartao;#{valor}"
    #puts transacao
    Utils.save_csv_transacoes transacao
  end
end

def converteCSV file
  count = -1
  CSV.foreach(file, encoding: "iso-8859-1") do |linha|
    count += 1
    next if count == 0
    data = linha[0]
    data = "#{data[3..4]}/#{data[0..1]}/#{data[6..9]}"
    descricao = linha[2].encode("utf-8")
    valor = linha[5].to_s.gsub(%r{\.}, ",")
    transacao = "#{data};#{descricao};;;;conta;#{valor}"
    Utils.save_csv_transacoes transacao
  end
end

Utils.initialize
Dir[PATH_CARTAO].each do |file|
  converteXMLemCSV file
end

#Dir[PATH_CONTA].each do |file|
#  converteCSV file
#end
