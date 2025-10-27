from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita solicitudes desde Angular

# 🔹 Ruta de prueba (para getMessage)
@app.route('/api', methods=['GET'])
def api_home():
    return jsonify({'message': 'Hola desde Flask 🐍'}), 200

# 🔹 Ruta de login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Datos recibidos:", data)
    return jsonify({"message": "Login correcto"})


# 🔹 Ruta de registro
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    print("Datos de registro:", data)
    return jsonify({"message": "Usuario registrado correctamente"})


if __name__ == '__main__':
    app.run(debug=True)
