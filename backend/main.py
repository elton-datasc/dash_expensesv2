from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restplus import Resource, Api, fields

import pandas as pd

from calendar import monthrange
from datetime import date, datetime

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
api = Api(app)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

name_space = api.namespace('/', description='Gerencia Extratos')

def separa_mes(df, month, year):	
    begin = datetime(year, month, 1)
    end = datetime(year, month, monthrange(year, month)[1])
    return df[df.date.ge(begin) & df.date.le(end)].copy()

df = pd.read_json("../processamento/test.json")
dateformat = '%Y/%m/%d'
df['date'] = pd.to_datetime(df['date'], format=dateformat)
df['referencia'] = pd.to_datetime(df['referencia'], format=dateformat)
df = df.sort_values(['date'])

@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
@name_space.route("/<int:ano>/<int:mes>")
class MainClass(Resource):
	def get(self, ano, mes):
		month = separa_mes(df, mes, ano)
		month.columns = ['Trans Date', 'Description', 'Amount', 'referencia']
		month['Trans Date'] = month['Trans Date'].astype(str)
		month['referencia'] = month['referencia'].astype(str)
		text = month.to_dict(orient='records')
		return text

if __name__ == '__main__':
   app.run()