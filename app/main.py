from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

agri = [{'name': 'Windsor Essex Agri Hub', 'address': '512 Avenue road, Lemiington road-  Winsor essex ', 'contact': '+1221874129', 'email': 'windsor-essex@ca.com'},
          {'name': 'Coufal Agri Hub', 'address': '712 Coufal road, Lemiington road-  Winsor essex ', 'contact': '+12122674129', 'email': 'coufal-essex@ca.com'},
          {'name': 'Pintop Essex Agri Hub', 'address': '21 Pintop road, Lemiington road-  Winsor essex ', 'contact': '+1821874129', 'email': 'pintop-essex@ca.com'},
          {'name': 'Plouth Essex Agri Hub', 'address': '72 Plymoth road, Lemiington road-  Winsor essex ', 'contact': '+1971874129', 'email': 'plouth-essex@ca.com'}]

@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({'message' : 'Hello, World!'})

@app.route('/agri', methods=['GET'])
def returnAll():
    return jsonify({'agri' : agri})

@app.route('/agri/<string:name>', methods=['GET'])
def returnOne(name):
    theOne = agri[0]
    for i,q in enumerate(agri):
      if q['name'] == name:
        theOne = agri[i]
    return jsonify({'agri' : theOne})

@app.route('/agri', methods=['POST'])
def addOne():
    new_agri = request.get_json()
    agri.append(new_agri)
    return jsonify({'agri' : agri})

@app.route('/agri/<string:name>', methods=['PUT'])
def editOne(name):
    new_agri = request.get_json()
    for i,q in enumerate(agri):
      if q['name'] == name:
        agri[i] = new_agri
    qs = request.get_json()
    return jsonify({'agri' : agri})

@app.route('/agri/<string:name>', methods=['DELETE'])
def deleteOne(name):
    for i,q in enumerate(agri):
      if q['name'] == name:
        del agri[i]
    return jsonify({'agri' : agri})

if __name__ == "__main__":
    app.run(debug=True)
