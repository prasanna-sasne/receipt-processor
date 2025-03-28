# Project Title

## Project Description

Project Description

This project processes receipts, calculates points based on specific rules, and stores them in memory. It provides an API to process receipts and retrieve points for each receipt.

## Prerequisites

Docker['https://www.docker.com'] (to run the app in a container)

## Steps to Run the Application

### 1. Copy the Docker Image (Optional)
Pull docker image from this URL to local machine
docker pull ghcr.io/prasanna-sasne/receipt-processor:latest

### 2. Build the Docker Image
If you have the source code locally and need to build the Docker image, follow these steps:
a. Navigate to the project directory where the Dockerfile is located.
b. Run the following command to build the Docker image:
docker build -t receipt-processor .

### 3. Run the Docker Container
To run the application in normal mode:

a. docker run -p 3000:3000 receipt-processor

To run the application in debug mode (optional):
a. docker run -p 3000:3000 -e DEBUG=true receipt-processor 

This will expose the application on http://localhost:3000.

### 4. Testing the API

You can test the API endpoints using curl or Postman.

Example - Process Receipt

curl -X POST http://localhost:3000/api/receipts/process \
     -H "Content-Type: application/json" \
     -d '{
           "retailer": "Target",
           "purchaseDate": "2022-01-01",
           "purchaseTime": "13:01",
           "items": [
             {"shortDescription": "Mountain Dew 12PK", "price": "6.49"},
             {"shortDescription": "Emils Cheese Pizza", "price": "12.25"},
             {"shortDescription": "Knorr Creamy Chicken", "price": "1.26"},
             {"shortDescription": "Doritos Nacho Cheese", "price": "3.35"},
             {"shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ", "price": "12.00"}
           ],
           "total": "35.35"
         }'

Example - Get Points for a Receipt

curl -X GET http://localhost:3000/api/receipts/points/{receiptId}

Replace {receiptId} with the actual receipt ID generated when you process a receipt.

## Docker Setup

Since the application runs inside a Docker container, all dependencies are already bundled within the image. You don’t need to install them manually.

Build the Docker Image (if you haven't done so already):
- docker build -t receipt-processor .

Run the Docker Container:
To run the application in normal mode:
- docker run -p 3000:3000 receipt-processor

To run the application in debug mode (optional):
docker run -p 3000:3000 -e DEBUG=true receipt-processor

## Environment Variables
DEBUG: Set to true to enable debug mode for additional logging (optional).

## Project Structure
/src
  /models      - Contains TypeScript models (e.g., Receipt, Item)
  /services    - Contains business logic (e.g., processReceiptService, getPointsService)
  /controllers - Contains API controller functions (e.g., processReceipt, getPoints)
  /routes      - Defines API routes
  /utils       - Utility functions (e.g., logger setup)
  index.ts     - Entry point to start the application

## Contributing
If you'd like to contribute to the project, feel free to fork the repository, make changes, and create a pull request. Please ensure you follow the code style guidelines.