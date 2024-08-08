# Car API Project

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd car-api-project/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    node server.js
    ```

### Frontend

1. Open `frontend/index.html` in a web browser.

## API Endpoints

### Get Town with Most Blue Cars

- **URL:** `/api/most-blue-cars`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "town": "Town Name",
    "count": Number
  }
