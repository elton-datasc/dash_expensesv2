from flask import Flask, request
from flask_restplus import Api, Resource
from flask_cors import CORS, cross_origin

import pandas as pd
import json

flask_app = Flask(__name__)
app = Api(app = flask_app,
          title="Controle Financeiro",
          description="Retorna Extratos de conta Bancária")
# logging.getLogger('flask_cors').level = logging.DEBUG
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

name_space = app.namespace('/api', description='Gerencia Extratos')

from calendar import monthrange
from datetime import date, datetime

def separa_mes(df, month, year):
    begin = datetime(year, month, 1)
    end = datetime(year, month, monthrange(year, month)[1])
    return df[df.date.ge(begin) & df.date.le(end)].copy()

df = pd.read_json("../processamento/test.json")
dateformat = '%Y/%m/%d'
df['date'] = pd.to_datetime(df['date'], format=dateformat)
df['referencia'] = pd.to_datetime(df['referencia'], format=dateformat)
df = df.sort_values(['date'])

@name_space.route("/<int:ano>/<int:mes>")
@cross_origin()
class MainClass(Resource):
	def get(self, ano, mes):
		month = separa_mes(df, mes, ano)
		month.columns = ['Trans Date', 'Description', 'Amount', 'referencia']
		month['Trans Date'] = month['Trans Date'].astype(str)
		month['referencia'] = month['referencia'].astype(str)
		text = month.to_dict(orient='records')
		return text

@app.after_request
def after_request(response):
	header = response.headers
	header['Access-Control-Allow-Origin'] = '*'
	return response