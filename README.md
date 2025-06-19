# Mat.ai - Real-time Chatbot

A real-time chatbot built using Flask (Backend) and React (Frontend).

## Setup

### 1. Backend

1. Clone the repository.
2. Navigate to the backend directory and create a virtual environment:
    ```bash
    cd backend
    python3 -m venv .venv
    source .venv/bin/activate
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Create a `.env` file and add your Hugging Face API token:
    ```plaintext
    HUGGINGFACE_API_TOKEN=your_token_here
    ```
5. Run the Flask server:
    ```bash
    python app.py
    ```

### 2. Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend/mat-ai-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the React development server:
    ```bash
    npm start
    ```

### Deployment

You can deploy the backend on services like Heroku, AWS EC2, or DigitalOcean and the frontend on platforms like Vercel or Netlify.

## License

MIT License.
