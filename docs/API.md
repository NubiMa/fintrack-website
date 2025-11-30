# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Endpoints

### Register User
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

## Transaction Endpoints

### Get All Transactions
- **GET** `/transactions`
- **Headers:** `Authorization: Bearer {token}`

### Create Transaction
- **POST** `/transactions`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "amount": "number",
    "type": "income|expense",
    "category": "string",
    "description": "string",
    "date": "date"
  }
  ```

## Budget Endpoints

### Get All Budgets
- **GET** `/budgets`
- **Headers:** `Authorization: Bearer {token}`

### Create Budget
- **POST** `/budgets`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "category": "string",
    "amount": "number",
    "period": "monthly|yearly"
  }
  ```

## Reports Endpoints

### Get Monthly Report
- **GET** `/reports/monthly`
- **Headers:** `Authorization: Bearer {token}`
- **Query Parameters:**
  - `month`: number (1-12)
  - `year`: number