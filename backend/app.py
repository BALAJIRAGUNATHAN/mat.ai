from flask import Flask, request, jsonify
from flask_socketio import SocketIO
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
socketio = SocketIO(app)

# Hugging Face API token
hf_token = os.getenv("HUGGINGFACE_API_TOKEN")
headers = {"Authorization": f"Bearer {hf_token}"}

@socketio.on('sendMessage')
def handle_message(data):
    user_message = data['message']
    bot_response = get_huggingface_response(user_message)
    socketio.emit('receiveMessage', {'message': bot_response})

def get_huggingface_response(message):
    url = "https://api-inference.huggingface.co/models/gpt-3.5-turbo"
    payload = {"inputs": message}
    response = requests.post(url, json=payload, headers=headers)
    return response.json()[0]['generated_text']

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
