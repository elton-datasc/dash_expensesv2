require 'mechanize'
#require_relative 'main_options'
require 'openssl'
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
I_KNOW_THAT_OPENSSL_VERIFY_PEER_EQUALS_VERIFY_NONE_IS_WRONG = 1

class Utils
  @@data_path = '../dados/'
  @@job_error_logs_path = @@data_path + 'error_logs/'
  @@sepador_colunas = ';'
  @@logs_path = 'logs/'
  @@agent
  @@test_result_page
  #@@options = Optparse.parse(ARGV)
  #@@server = @@options.server
  @@test_result_page = File.open("test_page.html", "w")
  @@appUrl = 'https://www2.bancobrasil.com.br/aapf/login.jsp'

  def self.sepador_colunas
    @@sepador_colunas
  end

  def self.agent
    @@agent
  end

  def self.data_path
    @@data_path
  end

  def self.logs_path
    @@logs_path
  end

  def self.appUrl
    @@appUrl
  end

  def self.save_result_page(page)
    @@test_result_page.write(page.to_s)
  end

  def self.test_result_page
    @@test_result_page
  end

  def self.csv_transacoes_file
    @@csv_transacoes_file
  end

  def self.save_csv_transacoes(transacao)
    @@csv_transacoes_file.puts(transacao)
  end

  def self.csv_funcionarios_file
    @@csv_funcionarios_file
  end

  def self.initialize

    @@agent = Mechanize.new { |a|
      a.user_agent_alias = 'Mac Safari'
      a.idle_timeout = 1
      a.read_timeout = 300
    }

    @@test_result_page = File.open("test_page.html", "w")

    file_name = 'transacoes.csv'
    file_path = @@data_path + file_name
    file_mode = 'w'
    #file_mode = 'a' if File.exist?(file_path)
    @@csv_transacoes_file = File.open(file_path, file_mode)
    @@csv_transacoes_file.write("Data;Descricao;Parcelado;Parcela;Localizacao;Fonte;Valor;\n") if file_mode == 'w'

    #file_name = 'funcionarios_novo.csv'
    #file_path = file_name
    #@@csv_funcionarios_file = File.open(file_path, file_mode)
    #@@csv_funcionarios_file.write("Centro;Funcionario;Matricula;\n") if file_mode == 'w'

    #login
  end

  def self.login
    file = File.open("../dados/dados", "r")
    agencia = file.gets.gsub(%r{\r\n}, "").gsub(%r{\n}, "")
    conta = file.gets.gsub(%r{\r\n}, "").gsub(%r{\n}, "")
    senha = file.gets.gsub(%r{\r\n}, "").gsub(%r{\n}, "")

    #pass = `read -s -p "Senha: " password; echo $password`.chomp

    #login = 'acessar.xhtml'
    request = @@appUrl# + login
    login_page = @@agent.get(request)
    save_result_page login_page.content
    form = login_page.form_with(:id => 'aapf')
    form['dependenciaOrigem'] = agencia
    form['numeroContratoOrigem'] = conta
    form['senhaConta'] = pass
    result = form.submit(form.button_with(:id => "botaoEntrar"))
    logout = Nokogiri::HTML(result.content.to_s).xpath('.//a[text()="Sair"]')
    save_result_page result
    if logout.to_s == ''
      puts "Falha no Login"
      exit
    else
      puts "Login efetuado com sucesso"
    end
    puts @string
  end

  def self.tratarPonto
    ponto = 'ponto/tratar/tratarPonto.xhtml'
    request = @@appUrl + ponto
    ponto_page = @@agent.get(request)
    ponto_page
  end

  def self.duration_from_seconds(seconds)
      secs = "0"
      min = "0"
      hours = "0"
      seconds = seconds.to_i
      minInt = (seconds / 60).to_i
      secsInt = seconds % 60
      secs = secsInt.to_s
      hoursInt = (minInt / 60).to_i
      minInt = minInt % 60
      min = minInt.to_s
      dias = (hoursInt / 24).to_i.to_s
      hoursInt = hoursInt % 24
      hours = hoursInt.to_s
      return dias + ":" + hours + ":" + min + ":" + secs
  end

end
