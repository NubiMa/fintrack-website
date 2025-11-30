# Setup Guide

## Prerequisites

1. Install Node.js (v18 or higher)
2. Install MongoDB
3. Git (optional, for version control)

## Environment Setup

### Frontend (.env file in client directory)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env file in server directory)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fintrack
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

## Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd fintrack
```

2. Frontend Setup:
```bash
cd client
npm install
```

3. Backend Setup:
```bash
cd server
npm install
```

4. Database Setup:
- Start MongoDB service
- The application will create the necessary collections automatically

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

## Development Tools

- VS Code Extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

## Testing

### Frontend Tests:
```bash
cd client
npm test
```

### Backend Tests:
```bash
cd server
npm test
```

## Building for Production

### Frontend Build:
```bash
cd client
npm run build
```

### Backend Build:
```bash
cd server
npm run build
```

## Deployment

1. Set up production environment variables
2. Build both frontend and backend
3. Deploy backend to your server
4. Deploy frontend build to static hosting service