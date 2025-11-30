# FinTrack 💰

<div align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MySQL-8.0+-4479A1?logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Express-4.18+-000000?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Tailwind-3.3+-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/License-MIT-cyan.svg" alt="License">
  
  <h3>🚀 The Future of Your Finances, Visualized</h3>
  
  <p><em>A modern, full-stack finance tracking web application with a futuristic neon-dark aesthetic. Track income, manage expenses, set budgets, and visualize your financial health with beautiful interactive charts.</em></p>
  
  <img src="./docs/screenshots/hero-banner.png" alt="FinTrack Hero" width="100%">
</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Configuration](#environment-configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
  - [Authentication](#authentication-endpoints)
  - [Transactions](#transaction-endpoints)
  - [Budgets](#budget-endpoints)
  - [Reports](#report-endpoints)
- [Database Schema](#-database-schema)
- [Development Guide](#-development-guide)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

**FinTrack** is a comprehensive personal finance management platform designed to help users take complete control of their financial life. Built with modern web technologies and featuring a stunning futuristic UI with neon-glow effects, FinTrack makes financial tracking not just functional, but visually engaging.

### What Makes FinTrack Special?

- 🎨 **Stunning UI/UX** - Futuristic dark theme with cyan neon accents and glassmorphism effects
- 📊 **Visual Analytics** - Interactive charts powered by Recharts for clear financial insights
- 🔒 **Secure & Private** - JWT authentication with bcrypt password hashing
- ⚡ **Fast & Responsive** - Built with Vite for lightning-fast development and production builds
- 💾 **Reliable Data** - MySQL database with Sequelize ORM for data integrity
- 📱 **Mobile Friendly** - Fully responsive design that works on all devices
- 🔄 **Real-time Updates** - Instant feedback on all financial operations

### Project Goals

1. Simplify personal finance management with an intuitive interface
2. Provide clear visual representations of financial data
3. Help users stay on top of their budgets with progress tracking
4. Offer comprehensive transaction history with advanced filtering
5. Generate insightful reports for better financial decision-making

---

## ✨ Features

### 🔐 Authentication & Security
- **User Registration** - Create account with email validation
- **Secure Login** - JWT-based authentication with 7-day expiry
- **Password Security** - Bcrypt hashing with salt rounds
- **Protected Routes** - Client and server-side route protection
- **Token Refresh** - Automatic token renewal mechanism
- **Session Management** - Persistent login with localStorage

### 💵 Income Tracking
- **Multiple Income Sources** - Track salary, freelance, business, investments
- **Category Management** - Organize income by predefined or custom categories
- **Date Tracking** - Record exact dates for each income entry
- **Notes & Details** - Add additional context to each transaction
- **Bulk Import** - Import transactions from CSV files
- **Income Analytics** - View income trends over time

### 💳 Expense Monitoring
- **Comprehensive Categories** - Food & Dining, Transportation, Shopping, Entertainment, Bills & Utilities, Healthcare, Education, Travel, and more
- **Real-time Tracking** - Instantly record expenses as they happen
- **Receipt Attachments** - Upload images of receipts (future feature)
- **Recurring Expenses** - Set up automatic monthly expenses
- **Expense Alerts** - Get notified when spending exceeds thresholds
- **Smart Categorization** - Auto-suggest categories based on description

### 📊 Visual Analytics
- **Interactive Charts** - Bar charts, line graphs, and pie charts
- **Income vs Expense** - Compare monthly income and expenses
- **Category Breakdown** - See exactly where your money goes
- **Trend Analysis** - Identify spending patterns over time
- **Custom Date Ranges** - Filter data by week, month, quarter, or year
- **Export Reports** - Download charts as PNG or PDF

### 🎯 Budget Management
- **Flexible Budgets** - Create daily, weekly, monthly, or yearly budgets
- **Category-based** - Set limits for each spending category
- **Progress Tracking** - Visual progress bars showing budget usage
- **Color-coded Status** - Green (good), Orange (warning), Red (exceeded)
- **Automated Calculations** - Auto-update spent amounts from transactions
- **Budget Alerts** - Notifications when approaching or exceeding limits

### 📈 Financial Reports
- **Summary Dashboard** - Overview of total income, expenses, and balance
- **Monthly Reports** - Detailed breakdown by month
- **Category Reports** - Spending analysis by category
- **Comparison Reports** - Compare different time periods
- **Export Options** - Download reports as CSV or Excel
- **Custom Reports** - Build your own reports with filters

### 🎨 User Interface Features
- **Dark Theme** - Eye-friendly dark mode with cyan/blue accents
- **Glassmorphism** - Semi-transparent cards with backdrop blur
- **Neon Glow Effects** - Animated glowing buttons and borders
- **Smooth Animations** - Subtle transitions and hover effects
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Search & Filter** - Quickly find transactions with advanced search
- **Sorting Options** - Sort by date, amount, category, or type

---

## 📸 Screenshots

### Landing Page
<div align="center">
  <img src="./docs/screenshots/landing-page.png" alt="Landing Page" width="800">
  <p><em>Futuristic landing page with hero section and feature highlights</em></p>
</div>

### Authentication
<div align="center">
  <img src="./docs/screenshots/login.png" alt="Login" width="400">
  <img src="./docs/screenshots/register.png" alt="Register" width="400">
  <p><em>Sleek login and registration forms with validation</em></p>
</div>

### Dashboard Overview
<div align="center">
  <img src="./docs/screenshots/dashboard.png" alt="Dashboard" width="800">
  <p><em>Main dashboard with summary cards and charts</em></p>
</div>

### Transactions
<div align="center">
  <img src="./docs/screenshots/transactions.png" alt="Transactions" width="800">
  <p><em>Transaction history with filtering and search</em></p>
</div>

### Budgets
<div align="center">
  <img src="./docs/screenshots/budgets.png" alt="Budgets" width="800">
  <p><em>Budget tracking with visual progress indicators</em></p>
</div>

### Reports
<div align="center">
  <img src="./docs/screenshots/reports.png" alt="Reports" width="800">
  <p><em>Comprehensive financial reports with charts</em></p>
</div>

---

## 🛠 Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2+ | UI framework for building interactive interfaces |
| **Vite** | 5.0+ | Next-generation frontend build tool |
| **React Router** | 6.20+ | Client-side routing and navigation |
| **Tailwind CSS** | 3.3+ | Utility-first CSS framework |
| **Axios** | 1.6+ | HTTP client for API requests |
| **Recharts** | 2.10+ | Composable charting library |
| **React Hook Form** | 7.48+ | Performant form validation |
| **React Hot Toast** | 2.4+ | Beautiful toast notifications |
| **Lucide React** | 0.263+ | Beautiful & consistent icons |
| **date-fns** | 3.0+ | Modern JavaScript date utility |

### Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime environment |
| **Express** | 4.18+ | Fast, minimalist web framework |
| **MySQL** | 8.0+ | Relational database management system |
| **Sequelize** | 6.35+ | Promise-based Node.js ORM |
| **bcryptjs** | 2.4+ | Password hashing library |
| **jsonwebtoken** | 9.0+ | JWT authentication implementation |
| **dotenv** | 16.3+ | Environment variable management |
| **Helmet** | 7.1+ | Security middleware for Express |
| **CORS** | 2.8+ | Cross-origin resource sharing |
| **Morgan** | 1.10+ | HTTP request logger middleware |
| **Express Validator** | 7.0+ | Server-side validation |
| **Express Rate Limit** | 7.1+ | Rate limiting middleware |

### Development Tools

| Tool | Purpose |
|------|---------|
| **Nodemon** | Auto-restart server on file changes |
| **ESLint** | JavaScript linting and code quality |
| **Prettier** | Code formatting |
| **PostCSS** | CSS transformation tool |
| **Autoprefixer** | Add vendor prefixes to CSS |

---

## 🏗 Architecture

FinTrack follows a modern **3-tier architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Frontend)                     │
│  React + Vite + Tailwind CSS + React Router             │
│  - Components (Reusable UI)                             │
│  - Pages (Route views)                                  │
│  - Services (API communication)                         │
│  - Context (Global state)                               │
└─────────────────────────────────────────────────────────┘
                           │
                           │ HTTP/HTTPS (REST API)
                           │
┌─────────────────────────────────────────────────────────┐
│                    SERVER (Backend)                      │
│  Node.js + Express + Sequelize ORM                      │
│  - Routes (API endpoints)                               │
│  - Controllers (Business logic)                         │
│  - Models (Data schemas)                                │
│  - Middleware (Auth, validation, errors)                │
└─────────────────────────────────────────────────────────┘
                           │
                           │ SQL Queries
                           │
┌─────────────────────────────────────────────────────────┐
│                   DATABASE (MySQL)                       │
│  - users (Authentication)                               │
│  - transactions (Income & Expenses)                     │
│  - budgets (Budget tracking)                            │
│  - categories (Category management)                     │
└─────────────────────────────────────────────────────────┘
```

### Request Flow

1. **User Action** → User interacts with React components
2. **API Call** → Service layer makes HTTP request via Axios
3. **Authentication** → JWT token verified by middleware
4. **Routing** → Express routes request to appropriate controller
5. **Business Logic** → Controller processes request
6. **Database Query** → Sequelize ORM interacts with MySQL
7. **Response** → Data sent back through layers to frontend
8. **UI Update** → React components re-render with new data

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

#### Required Software

1. **Node.js** (v18.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`
   - Should output: `v18.x.x` or higher

2. **npm** (v9.0.0 or higher) - Comes with Node.js
   - Verify installation: `npm --version`
   - Should output: `9.x.x` or higher

3. **MySQL** (v8.0 or higher)
   - **Windows**: Download MySQL Installer from https://dev.mysql.com/downloads/installer/
   - **macOS**: `brew install mysql`
   - **Linux**: `sudo apt-get install mysql-server`
   - Verify installation: `mysql --version`

4. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

#### Recommended Software

- **HeidiSQL** (Windows) or **MySQL Workbench** (All platforms) - GUI for MySQL
- **VS Code** - Code editor with extensions
- **Postman** or **Thunder Client** - API testing

---

### Installation

#### Step 1: Clone or Download the Repository

```bash
# If using Git
git clone https://github.com/yourusername/fintrack.git
cd fintrack

# Or download and extract the ZIP file
```

#### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

This will install all required packages including:
- express, sequelize, mysql2
- bcryptjs, jsonwebtoken
- cors, helmet, morgan
- And all other dependencies

**Expected output:**
```
added 150 packages, and audited 151 packages in 15s
```

#### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

This will install all frontend packages including:
- react, react-dom, react-router-dom
- vite, tailwindcss
- axios, recharts
- And all other dependencies

**Expected output:**
```
added 200 packages, and audited 201 packages in 20s
```

---

### Database Setup

#### Option 1: Using HeidiSQL (Windows - Recommended)

1. **Open HeidiSQL** and connect to your MySQL server
   - Host: `127.0.0.1`
   - User: `root`
   - Password: (leave empty if no password)
   - Port: `3306`

2. **Create Database**
   - Click "New" → "Database"
   - Name: `fintrack`
   - Collation: `utf8mb4_unicode_ci`
   - Click "OK"

3. **Run SQL Schema**
   - Select the `fintrack` database
   - Click "Query" tab
   - Copy and paste the entire SQL schema (from the SQL artifact I provided)
   - Click "Execute" (F9)

4. **Verify Tables Created**
   ```sql
   SHOW TABLES;
   ```
   You should see:
   - users
   - transactions
   - budgets
   - categories

#### Option 2: Using MySQL Command Line

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE fintrack CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Use the database
USE fintrack;

# Copy and paste the entire SQL schema here
# Then verify
SHOW TABLES;

# Exit
exit;
```

#### Option 3: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your local MySQL instance
3. Create new schema: `fintrack`
4. Open SQL tab and paste the schema
5. Execute the script

---

### Environment Configuration

#### Backend Environment Variables

Create `server/.env` file:

```env
# ============================================
# Server Configuration
# ============================================
PORT=5000
NODE_ENV=development

# ============================================
# MySQL Database Configuration
# ============================================
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=fintrack
DB_USER=root
DB_PASSWORD=
# Leave password empty if your MySQL root has no password
# Otherwise, enter your MySQL password

DB_DIALECT=mysql

# ============================================
# JWT Configuration
# ============================================
JWT_SECRET=fintrack_super_secret_key_2024_change_in_production_123456789
# IMPORTANT: Change this to a random string in production!
# You can generate one using: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

JWT_EXPIRE=7d
JWT_REFRESH_SECRET=fintrack_refresh_secret_change_in_production
JWT_REFRESH_EXPIRE=30d

# ============================================
# Frontend URL (for CORS)
# ============================================
CLIENT_URL=http://localhost:5173

# ============================================
# Rate Limiting (Optional)
# ============================================
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# ============================================
# Email Configuration (Optional - for password reset)
# ============================================
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
```

#### Frontend Environment Variables

Create `client/.env` file:

```env
# ============================================
# API Configuration
# ============================================
VITE_API_URL=http://localhost:5000/api
# Change to your production API URL when deploying

VITE_API_TIMEOUT=10000

# ============================================
# Application Configuration
# ============================================
VITE_APP_NAME=FinTrack
VITE_APP_VERSION=1.0.0

# ============================================
# Feature Flags (Optional)
# ============================================
# VITE_ENABLE_ANALYTICS=false
# VITE_ENABLE_NOTIFICATIONS=true
```

**⚠️ Important Notes:**
- Never commit `.env` files to version control
- Always use `.env.example` as template
- Keep sensitive credentials secure
- Change default secrets in production

---

### Running the Application

#### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```

Expected output:
```
[nodemon] starting `node src/server.js`
✅ MySQL Connected successfully
✅ Database synced
🚀 Server running on port 5000
📊 Environment: development
💾 Database: MySQL
```

**Terminal 2 - Frontend Development Server:**
```bash
cd client
npm run dev
```

Expected output:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

#### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

#### Production Build

**Build Frontend:**
```bash
cd client
npm run build
```

This creates an optimized production build in `client/dist/`

**Run Production Server:**
```bash
cd server
NODE_ENV=production npm start
```

---

## 📁 Project Structure

### Complete Directory Tree

```
fintrack/
│
├── client/                          # Frontend React Application
│   ├── public/                      # Static assets
│   │   ├── favicon.ico
│   │   └── logo.png
│   │
│   ├── src/                         # Source code
│   │   ├── assets/                  # Images, fonts, icons
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── fonts/
│   │   │
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/              # Generic components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   └── Badge.jsx
│   │   │   │
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Topbar.jsx
│   │   │   │
│   │   │   ├── dashboard/           # Dashboard-specific
│   │   │   │   ├── SummaryCard.jsx
│   │   │   │   ├── TransactionTable.jsx
│   │   │   │   ├── ChartCard.jsx
│   │   │   │   ├── BudgetProgress.jsx
│   │   │   │   └── RecentActivity.jsx
│   │   │   │
│   │   │   └── forms/               # Form components
│   │   │       ├── TransactionForm.jsx
│   │   │       ├── BudgetForm.jsx
│   │   │       └── CategorySelect.jsx
│   │   │
│   │   ├── layouts/                 # Page layouts
│   │   │   ├── PublicLayout.jsx     # For landing, login, register
│   │   │   ├── DashboardLayout.jsx  # For authenticated pages
│   │   │   └── AuthLayout.jsx       # For authentication pages
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── landing/             # Landing page
│   │   │   │   ├── LandingPage.jsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── FeaturesSection.jsx
│   │   │   │   └── CTASection.jsx
│   │   │   │
│   │   │   ├── auth/                # Authentication pages
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   │
│   │   │   ├── dashboard/           # Dashboard pages
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Transactions.jsx
│   │   │   │   ├── Budgets.jsx
│   │   │   │   ├── Reports.jsx
│   │   │   │   └── Settings.jsx
│   │   │   │
│   │   │   └── NotFound.jsx         # 404 page
│   │   │
│   │   ├── routes/                  # Routing configuration
│   │   │   ├── index.jsx            # Main router
│   │   │   ├── PublicRoute.jsx      # Public route wrapper
│   │   │   └── PrivateRoute.jsx     # Protected route wrapper
│   │   │
│   │   ├── context/                 # React Context providers
│   │   │   ├── AuthContext.jsx      # Authentication state
│   │   │   ├── ThemeContext.jsx     # Theme management
│   │   │   └── TransactionContext.jsx # Transaction state
│   │   │
│   │   ├── services/                # API service layer
│   │   │   ├── api.js               # Axios instance & interceptors
│   │   │   ├── authService.js       # Auth API calls
│   │   │   ├── transactionService.js # Transaction API calls
│   │   │   ├── budgetService.js     # Budget API calls
│   │   │   └── reportService.js     # Report API calls
│   │   │
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js           # Authentication hook
│   │   │   ├── useTransactions.js   # Transaction hook
│   │   │   ├── useBudgets.js        # Budget hook
│   │   │   └── useDebounce.js       # Debounce hook
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── formatters.js        # Format dates, currency
│   │   │   ├── validators.js        # Form validation helpers
│   │   │   ├── constants.js         # App constants
│   │   │   └── helpers.js           # General helper functions
│   │   │
│   │   ├── styles/                  # Global styles
│   │   │   ├── index.css            # Main CSS (Tailwind imports)
│   │   │   └── globals.css          # Custom global styles
│   │   │
│   │   ├── App.jsx                  # Root component
│   │   └── main.jsx                 # Entry point
│   │
│   ├── index.html                   # HTML template
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── package.json                # Frontend dependencies
│   ├── .env                        # Environment variables (local)
│   ├── .env.example                # Environment template
│   └── .gitignore                  # Git ignore rules
│
├── server/                          # Backend Node.js Application
│   ├── src/                         # Source code
│   │   ├── config/                  # Configuration files
│   │   │   ├── database.js          # MySQL/Sequelize connection
│   │   │   ├── jwt.js               # JWT configuration
│   │   │   └── constants.js         # Server constants
│   │   │
│   │   ├── controllers/             # Request handlers (business logic)
│   │   │   ├── authController.js    # Auth: register, login, getMe
│   │   │   ├── userController.js    # User: update profile, settings
│   │   │   ├── transactionController.js # Transaction CRUD
│   │   │   ├── budgetController.js  # Budget CRUD
│   │   │   └── reportController.js  # Financial reports
│   │   │
│   │   ├── models/                  # Sequelize models (database schemas)
│   │   │   ├── index.js             # Model associations
│   │   │   ├── User.js              # User model
│   │   │   ├── Transaction.js       # Transaction model
│   │   │   ├── Budget.js            # Budget model
│   │   │   └── Category.js          # Category model
│   │   │
│   │   ├── routes/                  # API routes
│   │   │   ├── index.js             # Main router (mounts all routes)
│   │   │   ├── authRoutes.js        # /api/auth/*
│   │   │   ├── userRoutes.js        # /api/users/*
│   │   │   ├── transactionRoutes.js # /api/transactions/*
│   │   │   ├── budgetRoutes.js      # /api/budgets/*
│   │   │   └── reportRoutes.js      # /api/reports/*
│   │   │
│   │   ├── middleware/              # Custom middleware
│   │   │   ├── authMiddleware.js    # JWT verification
│   │   │   ├── errorHandler.js      # Global error handling
│   │   │   ├── validator.js         # Request validation
│   │   │   └── rateLimiter.js       # Rate limiting
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── generateToken.js     # JWT token generation
│   │   │   ├── hashPassword.js      # Password hashing
│   │   │   ├── sendEmail.js         # Email sender
│   │   │   ├── logger.js            # Logging utility
│   │   │   └── seed.js              # Database seeding
│   │   │
│   │   └── server.js                # Express app setup & entry point
│   │
│   ├── package.json                 # Backend dependencies
│   ├── .env                         # Environment variables (local)
│   ├── .env.example                 # Environment template
│   └── .gitignore                   # Git ignore rules
│
├── docs/                            # Documentation
│   ├── screenshots/                 # Application screenshots
│   ├── API.md                       # Detailed API documentation
│   ├── SETUP.md                     # Setup instructions
│   ├── DEPLOYMENT.md                # Deployment guide
│   └── CONTRIBUTING.md              # Contribution guidelines
│
├── .gitignore                       # Root gitignore
├── README.md                        # This file
└── LICENSE                          # MIT License
```

### Key Directories Explained

#### Frontend (`client/src/`)

- **`components/`** - Reusable UI components organized by type
  - `common/` - Generic components used throughout the app
  - `layout/` - Navigation, headers, footers
  - `dashboard/` - Dashboard-specific components
  - `forms/` - Form components with validation

- **`pages/`** - Full page components mapped to routes
  - Each page represents a distinct URL/route
  - Pages compose multiple components together

- **`services/`** - API communication layer
  - Centralized HTTP requests using Axios
  - Handles authentication headers automatically
  - Response/error interceptors

- **`context/`** - Global state management
  - React Context API for shared state
  - Avoids prop drilling
  - Authentication, theme, notifications

- **`hooks/`** - Custom React hooks
  - Reusable stateful logic
  - Encapsulates complex component logic

#### Backend (`server/src/`)

- **`models/`** - Database models using Sequelize
  - Defines table schemas and relationships
  - Validation rules
  - Instance and class methods

- **`controllers/`** - Business logic
  - Handles requests from routes
  - Processes data, calls models
  - Sends responses

- **`routes/`** - API endpoints
  - Maps URLs to controllers
  - Groups related endpoints
  - Applies middleware (auth, validation)

- **`middleware/`** - Request pipeline
  - Authentication checks
  - Request validation
  - Error handling
  - Rate limiting

---

## 📡 API Documentation

### Base URL

```
Development: http://localhost:5000/api
Production:  https://your-domain.com/api
```

### Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

### Authentication Endpoints

#### Register User

**POST** `/api/auth/register`

Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe",
    "currency": "USD"
  }
}
```

**Validation Rules:**
- Name: Required, 1-50 characters
- Email: Required, valid email format, unique
- Password: Required, minimum 6 characters

**Error Response:** `400 Bad Request`
```json
{
  "success": false,
  "error": "User already exists with this email"
}
```

---

#### Login User

**POST** `/api/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe",
    "currency": "USD"
  }
}
```

**Error Response:** `401 Unauthorized`
```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

---

#### Get Current User

**GET** `/api/auth/me`

Get authenticated user's profile information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe",
    "currency": "USD",
    "createdAt": "2024-11-02T10:30:00.000Z"
  }
}
```

---

### Transaction Endpoints

#### Get All Transactions

**GET** `/api/transactions`

Retrieve all transactions for authenticated user with optional filtering.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `type` | string | Filter by type (income/expense) | `?type=expense` |
| `category` | string | Filter by category | `?category=Food & Dining` |
| `startDate` | date | Start date (YYYY-MM-DD) | `?startDate=2024-01-01` |
| `endDate` | date | End date (YYYY-MM-DD) | `?endDate=2024-12-31` |
| `limit` | number | Results per page (default: 50) | `?limit=20` |
| `page` | number | Page number (default: 1) | `?page=2` |

**Example Request:**
```
GET /api/transactions?type=expense&category=Food & Dining&limit=10&page=1
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 10,
  "total": 45,
  "page": 1,
  "pages": 5,
  "transactions": [
    {
      "id": 1,
      "userId": 1,
      "description": "Grocery Shopping",
      "amount": "124.30",
      "type": "expense",
      "category": "Food & Dining",
      "date": "2024-11-02",
      "notes": "Whole Foods weekly shopping",
      "created_at": "2024-11-02T14:30:00.000Z",
      "updated_at": "2024-11-02T14:30:00.000Z"
    },
    {
      "id": 2,
      "description": "Restaurant Dinner",
      "amount": "65.00",
      "type": "expense",
      "category": "Food & Dining",
      "date": "2024-11-03",
      "notes": "Dinner with friends",
      "created_at": "2024-11-03T19:45:00.000Z",
      "updated_at": "2024-11-03T19:45:00.000Z"
    }
  ]
}
```

---

#### Get Single Transaction

**GET** `/api/transactions/:id`

Retrieve a specific transaction by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "transaction": {
    "id": 1,
    "userId": 1,
    "description": "Monthly Salary",
    "amount": "5000.00",
    "type": "income",
    "category": "Salary",
    "date": "2024-11-01",
    "notes": "Regular monthly income",
    "created_at": "2024-11-01T09:00:00.000Z",
    "updated_at": "2024-11-01T09:00:00.000Z"
  }
}
```

**Error Response:** `404 Not Found`
```json
{
  "success": false,
  "error": "Transaction not found"
}
```

---

#### Create Transaction

**POST** `/api/transactions`

Create a new transaction.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "description": "Grocery Shopping",
  "amount": 124.30,
  "type": "expense",
  "category": "Food & Dining",
  "date": "2024-11-02",
  "notes": "Weekly groceries from Whole Foods"
}
```

**Validation Rules:**
- `description`: Required, 1-200 characters
- `amount`: Required, decimal number, minimum 0
- `type`: Required, must be "income" or "expense"
- `category`: Required, must be valid category
- `date`: Required, valid date format (YYYY-MM-DD)
- `notes`: Optional, max 500 characters

**Valid Categories:**

**Income:**
- Salary
- Freelance
- Business
- Investment
- Other Income

**Expense:**
- Food & Dining
- Transportation
- Shopping
- Entertainment
- Bills & Utilities
- Healthcare
- Education
- Travel
- Other Expense

**Response:** `201 Created`
```json
{
  "success": true,
  "transaction": {
    "id": 25,
    "userId": 1,
    "description": "Grocery Shopping",
    "amount": "124.30",
    "type": "expense",
    "category": "Food & Dining",
    "date": "2024-11-02",
    "notes": "Weekly groceries from Whole Foods",
    "created_at": "2024-11-02T15:30:00.000Z",
    "updated_at": "2024-11-02T15:30:00.000Z"
  }
}
```

---

#### Update Transaction

**PUT** `/api/transactions/:id`

Update an existing transaction.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:** (all fields optional)
```json
{
  "description": "Updated description",
  "amount": 150.00,
  "category": "Shopping"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "transaction": {
    "id": 25,
    "userId": 1,
    "description": "Updated description",
    "amount": "150.00",
    "type": "expense",
    "category": "Shopping",
    "date": "2024-11-02",
    "notes": "Weekly groceries from Whole Foods",
    "created_at": "2024-11-02T15:30:00.000Z",
    "updated_at": "2024-11-02T16:45:00.000Z"
  }
}
```

---

#### Delete Transaction

**DELETE** `/api/transactions/:id`

Delete a transaction.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Transaction deleted"
}
```

---

### Budget Endpoints

#### Get All Budgets

**GET** `/api/budgets`

Retrieve all budgets for authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 3,
  "budgets": [
    {
      "id": 1,
      "userId": 1,
      "category": "Food & Dining",
      "limitAmount": "400.00",
      "spent": "189.30",
      "period": "monthly",
      "startDate": "2024-11-01",
      "endDate": "2024-11-30",
      "isActive": true,
      "percentageSpent": 47.325,
      "remaining": 210.70,
      "created_at": "2024-11-01T00:00:00.000Z",
      "updated_at": "2024-11-02T15:30:00.000Z"
    }
  ]
}
```

---

#### Get Single Budget

**GET** `/api/budgets/:id`

Retrieve a specific budget by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "budget": {
    "id": 1,
    "userId": 1,
    "category": "Food & Dining",
    "limitAmount": "400.00",
    "spent": "189.30",
    "period": "monthly",
    "startDate": "2024-11-01",
    "endDate": "2024-11-30",
    "isActive": true,
    "percentageSpent": 47.325,
    "remaining": 210.70
  }
}
```

---

#### Create Budget

**POST** `/api/budgets`

Create a new budget.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "category": "Food & Dining",
  "limitAmount": 400.00,
  "period": "monthly",
  "startDate": "2024-11-01"
}
```

**Validation Rules:**
- `category`: Required, valid expense category
- `limitAmount`: Required, decimal number, minimum 0
- `period`: Required, one of: "daily", "weekly", "monthly", "yearly"
- `startDate`: Optional, defaults to today

**Note:** `endDate` is automatically calculated based on period. `spent` is automatically calculated from transactions.

**Response:** `201 Created`
```json
{
  "success": true,
  "budget": {
    "id": 5,
    "userId": 1,
    "category": "Food & Dining",
    "limitAmount": "400.00",
    "spent": "0.00",
    "period": "monthly",
    "startDate": "2024-11-01",
    "endDate": "2024-11-30",
    "isActive": true,
    "percentageSpent": 0,
    "remaining": 400.00,
    "created_at": "2024-11-01T10:00:00.000Z",
    "updated_at": "2024-11-01T10:00:00.000Z"
  }
}
```

---

#### Update Budget

**PUT** `/api/budgets/:id`

Update an existing budget.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:** (all fields optional)
```json
{
  "limitAmount": 450.00,
  "isActive": true
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "budget": {
    "id": 5,
    "userId": 1,
    "category": "Food & Dining",
    "limitAmount": "450.00",
    "spent": "189.30",
    "period": "monthly",
    "startDate": "2024-11-01",
    "endDate": "2024-11-30",
    "isActive": true,
    "percentageSpent": 42.07,
    "remaining": 260.70
  }
}
```

---

#### Delete Budget

**DELETE** `/api/budgets/:id`

Delete a budget.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Budget deleted"
}
```

---

#### Get Budget Progress

**GET** `/api/budgets/:id/progress`

Get detailed progress information for a budget.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "progress": {
    "category": "Food & Dining",
    "limit": "400.00",
    "spent": "189.30",
    "remaining": 210.70,
    "percentage": 47.325,
    "status": "good",
    "period": "monthly",
    "startDate": "2024-11-01",
    "endDate": "2024-11-30"
  }
}
```

**Status Values:**
- `"good"` - Less than 80% spent (green)
- `"warning"` - 80-99% spent (orange)
- `"exceeded"` - 100%+ spent (red)

---

### Report Endpoints

#### Get Financial Summary

**GET** `/api/reports/summary`

Get overall financial summary with optional date filtering.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `startDate` | date | Start date (YYYY-MM-DD) | `?startDate=2024-01-01` |
| `endDate` | date | End date (YYYY-MM-DD) | `?endDate=2024-12-31` |

**Response:** `200 OK`
```json
{
  "success": true,
  "summary": {
    "totalIncome": "15000.00",
    "totalExpenses": "8500.00",
    "currentBalance": "6500.00",
    "transactionCount": 125,
    "incomeTransactions": 45,
    "expenseTransactions": 80,
    "averageIncome": "333.33",
    "averageExpense": "106.25",
    "savingsRate": 43.33
  }
}
```

---

#### Get Category Breakdown

**GET** `/api/reports/categories`

Get spending/income breakdown by category.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `month` | number | Month (1-12) | `?month=11` |
| `year` | number | Year (YYYY) | `?year=2024` |

**Response:** `200 OK`
```json
{
  "success": true,
  "categories": [
    {
      "category": "Food & Dining",
      "type": "expense",
      "transactionCount": 25,
      "totalAmount": "1250.50",
      "averageAmount": "50.02",
      "percentage": 35.5
    },
    {
      "category": "Transportation",
      "type": "expense",
      "transactionCount": 18,
      "totalAmount": "890.00",
      "averageAmount": "49.44",
      "percentage": 25.3
    },
    {
      "category": "Salary",
      "type": "income",
      "transactionCount": 1,
      "totalAmount": "5000.00",
      "averageAmount": "5000.00",
      "percentage": 100.0
    }
  ]
}
```

---

### Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Common HTTP Status Codes:**

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Not allowed to access resource |
| 404 | Not Found | Resource not found |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

---

## 🗄 Database Schema

### Entity Relationship Diagram

```
┌─────────────────────┐
│      users          │
├─────────────────────┤
│ id (PK)            │
│ name               │
│ email (UNIQUE)     │
│ password           │
│ avatar             │
│ currency           │
│ created_at         │
│ updated_at         │
└─────────────────────┘
         │
         │ 1:N
         ├──────────────────────────┐
         │                          │
         ▼                          ▼
┌─────────────────────┐    ┌─────────────────────┐
│   transactions      │    │      budgets        │
├─────────────────────┤    ├─────────────────────┤
│ id (PK)            │    │ id (PK)            │
│ user_id (FK)       │    │ user_id (FK)       │
│ description        │    │ category           │
│ amount             │    │ limit_amount       │
│ type               │    │ spent              │
│ category           │    │ period             │
│ date               │    │ start_date         │
│ notes              │    │ end_date           │
│ created_at         │    │ is_active          │
│ updated_at         │    │ created_at         │
└─────────────────────┘    │ updated_at         │
                           └─────────────────────┘
```

### Table Details

#### `users` Table

Stores user account information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique user ID |
| name | VARCHAR(50) | NOT NULL | User's full name |
| email | VARCHAR(100) | NOT NULL, UNIQUE | User's email address |
| password | VARCHAR(255) | NOT NULL | Bcrypt hashed password |
| avatar | VARCHAR(255) | DEFAULT | Avatar URL |
| currency | VARCHAR(3) | DEFAULT 'USD' | Preferred currency |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Account creation date |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last update date |

**Indexes:**
- PRIMARY KEY on `id`
- UNIQUE INDEX on `email`

---

#### `transactions` Table

Stores all income and expense transactions.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique transaction ID |
| user_id | INT | NOT NULL, FOREIGN KEY | References users(id) |
| description | VARCHAR(200) | NOT NULL | Transaction description |
| amount | DECIMAL(10,2) | NOT NULL | Transaction amount |
| type | ENUM | NOT NULL | 'income' or 'expense' |
| category | VARCHAR(50) | NOT NULL | Transaction category |
| date | DATE | NOT NULL | Transaction date |
| notes | TEXT | NULL | Additional notes |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last update |

**Indexes:**
- PRIMARY KEY on `id`
- INDEX on `user_id, date`
- INDEX on `user_id, category`
- INDEX on `type`

**Foreign Keys:**
- `user_id` REFERENCES `users(id)` ON DELETE CASCADE

**Check Constraints:**
- `amount` >= 0
- `type` IN ('income', 'expense')

---

#### `budgets` Table

Stores user budget limits and tracking.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique budget ID |
| user_id | INT | NOT NULL, FOREIGN KEY | References users(id) |
| category | VARCHAR(50) | NOT NULL | Budget category |
| limit_amount | DECIMAL(10,2) | NOT NULL | Budget limit |
| spent | DECIMAL(10,2) | DEFAULT 0.00 | Amount spent |
| period | ENUM | DEFAULT 'monthly' | Budget period |
| start_date | DATE | NOT NULL | Period start |
| end_date | DATE | NOT NULL | Period end |
| is_active | BOOLEAN | DEFAULT TRUE | Budget status |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last update |

**Indexes:**
- PRIMARY KEY on `id`
- INDEX on `user_id, category`
- INDEX on `is_active`

**Foreign Keys:**
- `user_id` REFERENCES `users(id)` ON DELETE CASCADE

**Check Constraints:**
- `limit_amount` >= 0
- `spent` >= 0
- `period` IN ('daily', 'weekly', 'monthly', 'yearly')

---

#### `categories` Table (Optional/Reference)

Predefined transaction categories.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Category ID |
| name | VARCHAR(50) | NOT NULL, UNIQUE | Category name |
| type | ENUM | NOT NULL | 'income' or 'expense' |
| icon | VARCHAR(50) | NULL | Icon identifier |
| color | VARCHAR(7) | NULL | Hex color code |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation |

---

### Database Relationships

1. **One-to-Many:** `users` → `transactions`
   - One user can have many transactions
   - CASCADE DELETE: Deleting user deletes all their transactions

2. **One-to-Many:** `users` → `budgets`
   - One user can have many budgets
   - CASCADE DELETE: Deleting user deletes all their budgets

---

### Triggers

#### `after_transaction_insert`
Automatically updates budget `spent` amount when new expense is added.

#### `after_transaction_update`
Updates budget `spent` amount when transaction is modified.

#### `after_transaction_delete`
Decrements budget `spent` amount when expense is deleted.

---

### Views

#### `user_transaction_summary`
Provides quick financial overview per user.

```sql
SELECT 
  user_id,
  COUNT(*) as total_transactions,
  SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as total_income,
  SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as total_expenses,
  SUM(CASE WHEN type='income' THEN amount ELSE -amount END) as balance
FROM transactions
GROUP BY user_id;
```

#### `budget_progress`
Shows current budget status with calculations.

```sql
SELECT 
  *,
  (spent / limit_amount * 100) as percentage_used,
  (limit_amount - spent) as remaining,
  CASE 
    WHEN spent >= limit_amount THEN 'exceeded'
    WHEN spent >= limit_amount * 0.8 THEN 'warning'
    ELSE 'good'
  END as status
FROM budgets
WHERE is_active = TRUE;
```

---

## 👨‍💻 Development Guide

### Setting Up Development Environment

#### 1. Code Editor Setup (VS Code Recommended)

**Required Extensions:**
- ESLint - Code linting
- Prettier - Code formatting
- Tailwind CSS IntelliSense - Tailwind class suggestions
- ES7+ React/Redux snippets - React code snippets
- MySQL - Database management
- Thunder Client - API testing

**VS Code Settings** (`settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*['\"`]([^'\"`]*)['\"`]", "([^'\"`\\s]*)"]
  ]
}
```

#### 2. Git Configuration

**Initialize Git:**
```bash
git init
git add .
git commit -m "Initial commit: FinTrack application"
```

**Create `.gitignore`:**
```
# Dependencies
node_modules/
package-lock.json

# Environment variables
.env
.env.local
.env.production

# Build outputs
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Database
*.sql.backup
```

#### 3. Branch Strategy

```bash
main          # Production-ready code
├── develop   # Development branch
    ├── feature/user-auth
    ├── feature/transaction-crud
    └── bugfix/login-issue
```

**Create feature branch:**
```bash
git checkout -b feature/your-feature-name
```

### Development Workflow

#### Starting Development Session

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
cd client
npm run dev

# Terminal 3 - Database (if needed)
mysql -u root -p
```

#### Making Changes

1. **Create feature branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-feature
   ```

2. **Make your changes**
   - Write code
   - Test locally
   - Follow code style guidelines

3. **Test thoroughly**
   - Manual testing
   - Check console for errors
   - Test on different browsers

4. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/new-feature
   # Create Pull Request on GitHub
   ```

### Code Style Guidelines

#### JavaScript/React

```javascript
// ✅ Good
const UserProfile = ({ user }) => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    loadUserData();
  }, []);
  
  return (
    <div className="card">
      <h2>{user.name}</h2>
    </div>
  );
};

// ❌ Bad
function userProfile(props) {
  var isLoading = false;
  return <div><h2>{props.user.name}</h2></div>
}
```

**Rules:**
- Use functional components with hooks
- Use const/let, never var
- Use arrow functions
- Proper naming: PascalCase for components, camelCase for functions/variables
- Destructure props
- Add PropTypes or TypeScript types
- Keep components small and focused

#### CSS/Tailwind

```jsx
// ✅ Good
<button className="btn-primary hover:scale-105 transition-transform">
  Click Me
</button>

// ❌ Bad
<button style={{ backgroundColor: '#00D9FF', padding: '12px' }}>
  Click Me
</button>
```

**Rules:**
- Use Tailwind utility classes
- Use custom classes from index.css for repeated patterns
- Avoid inline styles
- Use responsive modifiers (md:, lg:)
- Group related classes

#### Backend

```javascript
// ✅ Good
exports.createTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({ success: true, transaction });
  } catch (error) {
    next(error);
  }
};

// ❌ Bad  
exports.createTransaction = (req, res) => {
  Transaction.create(req.body).then(t => {
    res.json(t);
  }).catch(e => console.log(e));
};
```

**Rules:**
- Use async/await over promises
- Always use try-catch
- Pass errors to next()
- Return appropriate HTTP status codes
- Validate input data
- Use meaningful variable names

### Debugging

#### Frontend Debugging

**React DevTools:**
- Install React DevTools browser extension
- Inspect component props and state
- Track component renders

**Console Debugging:**
```javascript
console.log('User data:', user);
console.table(transactions);
console.error('API Error:', error);
```

**Network Tab:**
- Check API requests/responses
- Verify request headers
- Check response status codes

#### Backend Debugging

**Console Logging:**
```javascript
console.log('[Auth] Login attempt:', email);
console.error('[DB] Connection error:', error);
```

**Postman/Thunder Client:**
- Test API endpoints independently
- Check request/response data
- Save requests for reuse

**MySQL Debugging:**
```sql
-- Check recent transactions
SELECT * FROM transactions ORDER BY created_at DESC LIMIT 10;

-- Check user budgets
SELECT * FROM budgets WHERE user_id = 1;

-- View slow query log
SHOW VARIABLES LIKE 'slow_query_log';
```

### Performance Optimization

#### Frontend

1. **Code Splitting**
   ```javascript
   const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
   ```

2. **Memoization**
   ```javascript
   const expensiveCalculation = useMemo(() => {
     return calculateTotal(transactions);
   }, [transactions]);
   ```

3. **Debouncing**
   ```javascript
   const debouncedSearch = useDebounce(searchTerm, 500);
   ```

4. **Image Optimization**
   - Use WebP format
   - Lazy load images
   - Use appropriate sizes

#### Backend

1. **Database Indexing**
   - Index foreign keys
   - Index frequently queried columns
   - Composite indexes for multi-column queries

2. **Query Optimization**
   ```javascript
   // ✅ Good - Use specific fields
   const users = await User.findAll({
     attributes: ['id', 'name', 'email']
   });
   
   // ❌ Bad - Select all fields
   const users = await User.findAll();
   ```

3. **Caching** (Future Enhancement)
   - Redis for session management
   - Cache frequently accessed data
   - Invalidate cache on updates

4. **Rate Limiting**
   - Already implemented in middleware
   - Prevents abuse
   - Configurable limits

---

## 🚢 Deployment

### Production Checklist

Before deploying to production:

- [ ] Change all default secrets in `.env`
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS for production domain
- [ ] Set up database backups
- [ ] Configure logging
- [ ] Set up monitoring
- [ ] Test all API endpoints
- [ ] Run security audit
- [ ] Optimize database queries
- [ ] Enable rate limiting
- [ ] Configure CDN for static assets
- [ ] Set up CI/CD pipeline

---

### Deployment Options

#### Option 1: VPS Deployment (DigitalOcean, Linode, AWS EC2)

**Requirements:**
- Ubuntu 20.04+ server
- At least 2GB RAM
- Node.js 18+
- MySQL 8.0+
- Nginx

**Step-by-Step Guide:**

1. **Prepare Server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL
sudo apt install mysql-server -y
sudo mysql_secure_installation

# Install Nginx
sudo apt install nginx -y

# Install PM2 (Process Manager)
sudo npm install -g pm2
```

2. **Clone Repository**
```bash
cd /var/www
sudo git clone https://github.com/yourusername/fintrack.git
cd fintrack
```

3. **Setup Backend**
```bash
cd server
npm install --production
```

Create production `.env`:
```env
PORT=5000
NODE_ENV=production
DB_HOST=localhost
DB_PORT=3306
DB_NAME=fintrack
DB_USER=fintrack_user
DB_PASSWORD=your_secure_password
JWT_SECRET=your_production_jwt_secret
CLIENT_URL=https://yourdomain.com
```

4. **Setup Database**
```bash
# Create MySQL user and database
sudo mysql -u root -p

CREATE DATABASE fintrack;
CREATE USER 'fintrack_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON fintrack.* TO 'fintrack_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Import schema
mysql -u fintrack_user -p fintrack < /path/to/schema.sql
```

5. **Build Frontend**
```bash
cd ../client
npm install
npm run build
```

6. **Configure Nginx**

Create `/etc/nginx/sites-available/fintrack`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend
    root /var/www/fintrack/client/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/fintrack /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

7. **SSL Certificate (Let's Encrypt)**
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

8. **Start Backend with PM2**
```bash
cd /var/www/fintrack/server
pm2 start src/server.js --name fintrack-api
pm2 save
pm2 startup
```

9. **Monitor Application**
```bash
pm2 status
pm2 logs fintrack-api
pm2 monit
```

---

#### Option 2: Heroku Deployment

**Backend on Heroku:**

1. **Install Heroku CLI**
```bash
npm install -g heroku
heroku login
```

2. **Create Heroku App**
```bash
cd server
heroku create fintrack-api
```

3. **Add MySQL Database**
```bash
heroku addons:create jawsdb:kitefin
```

4. **Set Environment Variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret
heroku config:set CLIENT_URL=https://your-frontend.netlify.app
```

5. **Deploy**
```bash
git push heroku main
```

**Frontend on Netlify/Vercel:**

1. **Build Settings** (Netlify)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variables: Add `VITE_API_URL`

2. **Deploy**
```bash
# Connect GitHub repo in Netlify dashboard
# Or use CLI
netlify deploy --prod
```

---

#### Option 3: Docker Deployment

**Dockerfile (Backend)**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]
```

**Dockerfile (Frontend)**
```dockerfile
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

**docker-compose.yml**
```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: fintrack
      MYSQL_USER: fintrack_user
      MYSQL_PASSWORD: fintrack_password
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  backend:
    build: ./server
    environment:
      DB_HOST: mysql
      DB_USER: fintrack_user
      DB_PASSWORD: fintrack_password
      DB_NAME: fintrack
      JWT_SECRET: your_jwt_secret
    ports:
      - "5000:5000"
    depends_on:
      - mysql

  frontend:
    build: ./client
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mysql_data:
```

**Deploy:**
```bash
docker-compose up -d
```

---

### Environment-Specific Configurations

#### Development
```env
NODE_ENV=development
DB_HOST=127.0.0.1
CLIENT_URL=http://localhost:5173
```

#### Staging
```env
NODE_ENV=staging
DB_HOST=staging-db.example.com
CLIENT_URL=https://staging.yourdomain.com
```

#### Production
```env
NODE_ENV=production
DB_HOST=prod-db.example.com
CLIENT_URL=https://yourdomain.com
```

---

### Database Migration Strategy

**Backup before migration:**
```bash
mysqldump -u root -p fintrack > backup_$(date +%Y%m%d).sql
```

**Run migrations:**
```javascript
// migrations/001_add_category_icon.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categories', 'icon', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('categories', 'icon');
  }
};
```

---

### Monitoring & Logging

#### Application Monitoring

**PM2 Monitoring:**
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
```

**Error Tracking (Sentry):**
```javascript
// server/src/server.js
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});

app.use(Sentry.Handlers.errorHandler());
```

#### Database Monitoring

**Slow Query Log:**
```sql
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow-query.log';
```

**Performance Schema:**
```sql
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;
```

---

### Backup Strategy

#### Automated Daily Backups

Create backup script: `/usr/local/bin/backup-fintrack.sh`
```bash
#!/bin/bash

# Configuration
BACKUP_DIR="/var/backups/fintrack"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="fintrack"
DB_USER="fintrack_user"
DB_PASS="your_password"

# Create backup directory
mkdir -p $BACKUP_DIR

# Dump database
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/fintrack_$DATE.sql.gz

# Delete backups older than 30 days
find $BACKUP_DIR -name "fintrack_*.sql.gz" -mtime +30 -delete

echo "Backup completed: fintrack_$DATE.sql.gz"
```

**Schedule with cron:**
```bash
chmod +x /usr/local/bin/backup-fintrack.sh

# Add to crontab (runs daily at 2 AM)
crontab -e
0 2 * * * /usr/local/bin/backup-fintrack.sh >> /var/log/fintrack-backup.log 2>&1
```

---

## 🧪 Testing

### Manual Testing

#### API Testing with Postman

**Import Collection:**
Create Postman collection with all endpoints:

1. **Setup Environment Variables:**
```json
{
  "base_url": "http://localhost:5000/api",
  "token": ""
}
```

2. **Test Authentication Flow:**
```
POST {{base_url}}/auth/register
POST {{base_url}}/auth/login
GET  {{base_url}}/auth/me
```

3. **Save token from login response:**
```javascript
// In Postman Tests tab
pm.environment.set("token", pm.response.json().token);
```

#### Frontend Testing Checklist

- [ ] Registration form validation
- [ ] Login/logout functionality
- [ ] Protected routes redirect to login
- [ ] Dashboard loads with correct data
- [ ] Transaction CRUD operations
- [ ] Budget creation and updates
- [ ] Charts render correctly
- [ ] Mobile responsiveness
- [ ] Toast notifications appear
- [ ] Loading states work
- [ ] Error handling displays properly

---

### Automated Testing (Future Enhancement)

#### Unit Tests (Jest)

**Backend:**
```javascript
// server/tests/models/user.test.js
const User = require('../src/models/User');

describe('User Model', () => {
  test('should hash password before saving', async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    
    expect(user.password).not.toBe('password123');
    expect(user.password.length).toBeGreaterThan(20);
  });

  test('should validate email format', async () => {
    await expect(
      User.create({
        name: 'Test',
        email: 'invalid-email',
        password: 'password123'
      })
    ).rejects.toThrow();
  });
});
```

**Frontend:**
```javascript
// client/src/components/__tests__/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../common/Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### Integration Tests

```javascript
// server/tests/integration/auth.test.js
const request = require('supertest');
const app = require('../src/server');

describe('Auth Endpoints', () => {
  test('POST /api/auth/register creates user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'John Doe',
        email: 'john@test.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();
  });
});
```

**Run tests:**
```bash
# Backend
cd server
npm test

# Frontend
cd client
npm test
```

---

## 🤝 Contributing

We welcome contributions to FinTrack! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   - Click "Fork" button on GitHub
   - Clone your fork locally

2. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   **Commit Message Convention:**
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Build process or tooling changes

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Describe your changes
   - Link related issues

### Code Review Process

1. Maintainer reviews your PR
2. Address any feedback
3. Once approved, PR is merged
4. Your contribution is live! 🎉

### Contribution Ideas

**Features:**
- [ ] Export transactions to CSV/Excel
- [ ] Import transactions from bank statements
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Dark/Light theme toggle
- [ ] Budget alerts via email
- [ ] Mobile app (React Native)
- [ ] Bill reminders
- [ ] Investment tracking
- [ ] Shared budgets (family/roommates)

**Bug Fixes:**
- Report bugs via GitHub Issues
- Include steps to reproduce
- Screenshots if applicable

**Documentation:**
- Improve README
- Add code comments
- Write tutorials
- Create video guides

**Design:**
- UI/UX improvements
- New themes
- Accessibility enhancements

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Backend Issues

**Issue 1: "Cannot find module"**
```bash
Error: Cannot find module 'express'
```
**Solution:**
```bash
cd server
rm -rf node_modules package-lock.json
npm install
```

---

**Issue 2: "EADDRINUSE: Port already in use"**
```bash
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:**
```bash
# Find process using port
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change port in .env
PORT=5001
```

---

**Issue 3: "Access denied for user"**
```bash
Error: Access denied for user 'root'@'localhost'
```
**Solution:**
```bash
# Reset MySQL password
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword';
FLUSH PRIVILEGES;

# Update .env file
DB_PASSWORD=newpassword
```

---

**Issue 4: "Sequelize connection refused"**
```bash
SequelizeConnectionRefusedError: connect ECONNREFUSED
```
**Solution:**
1. Check MySQL is running:
   ```bash
   sudo service mysql status
   sudo service mysql start
   ```
2. Verify database exists:
   ```sql
   SHOW DATABASES;
   ```
3. Check credentials in `.env`

---

**Issue 5: "JWT malformed"**
```bash
JsonWebTokenError: jwt malformed
```
**Solution:**
- Clear localStorage in browser (F12 → Application → Local Storage)
- Login again to get new token
- Check `JWT_SECRET` is set correctly in `.env`

---

#### Frontend Issues

**Issue 1: "Module not found: recharts"**
```bash
Module not found: Can't resolve 'recharts'
```
**Solution:**
```bash
cd client
npm install recharts
```

---

**Issue 2: "Failed to fetch"**
```bash
TypeError: Failed to fetch
```
**Solution:**
1. Check backend is running on port 5000
2. Verify `VITE_API_URL` in client/.env:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. Check CORS settings in server

---

**Issue 3: Tailwind styles not working**
```bash
Classes not applying
```
**Solution:**
1. Check `tailwind.config.js` content paths:
   ```javascript
   content: ["./index.html", "./src/**/*.{js,jsx}"]
   ```
2. Restart dev server:
   ```bash
   npm run dev
   ```

---

**Issue 4: "Uncaught ReferenceError: process is not defined"**
**Solution:**
Add to `vite.config.js`:
```javascript
define: {
  'process.env': {}
}
```

---

#### Database Issues

**Issue 1: Tables not created**
**Solution:**
```sql
-- Run the complete SQL schema
USE fintrack;
SOURCE /path/to/schema.sql;

-- Verify tables
SHOW TABLES;
```

---

**Issue 2: "Foreign key constraint fails"**
**Solution:**
```sql
-- Check if parent record exists
SELECT * FROM users WHERE id = 1;

-- If not, create user first, then add transaction
```

---

**Issue 3: Slow queries**
**Solution:**
```sql
-- Check indexes
SHOW INDEX FROM transactions;

-- Add missing indexes
CREATE INDEX idx_user_date ON transactions(user_id, date);

-- Analyze query performance
EXPLAIN SELECT * FROM transactions WHERE user_id = 1;
```

---

### Getting Help

If you're still stuck:

1. **Check Documentation**
   - Read this README thoroughly
   - Check `docs/` folder for detailed guides

2. **Search Issues**
   - GitHub Issues: https://github.com/yourusername/fintrack/issues
   - Search for similar problems

3. **Ask Questions**
   - Open a new GitHub Issue
   - Use Discussion tab
   - Tag maintainers

4. **Community Support**
   - Discord server (if available)
   - Stack Overflow with tag `fintrack`

---

## ❓ FAQ

### General Questions

**Q: Is FinTrack free to use?**
A: Yes! FinTrack is open-source and free under MIT license.

**Q: Can I use FinTrack for commercial purposes?**
A: Yes, MIT license allows commercial use.

**Q: Is my financial data secure?**
A: Yes. Data is stored locally on your server with encrypted passwords. We recommend HTTPS in production.

**Q: Can I self-host FinTrack?**
A: Absolutely! Follow the deployment guide above.

---

### Technical Questions

**Q: Why MySQL instead of MongoDB?**
A: MySQL provides:
- ACID compliance for financial data
- Strong data integrity with foreign keys
- Better for relational data (users, transactions, budgets)
- Widespread hosting support

**Q: Can I switch to PostgreSQL?**
A: Yes! Sequelize supports PostgreSQL. Just change:
```env
DB_DIALECT=postgres
```

**Q: Does it support multiple users?**
A: Yes! Each user has their own isolated data.

**Q: Can I add custom categories?**
A: Currently uses predefined categories. Custom categories is a planned feature.

**Q: Is there a mobile app?**
A: Not yet. The web app is mobile-responsive. Native app is in roadmap.

**Q: How do I export my data?**
A: Use MySQL export:
```bash
mysqldump -u root -p fintrack > my_data.sql
```

---

### Feature Requests

**Q: Will you add feature X?**
A: Check the roadmap section or open a feature request on GitHub Issues!

**Q: Can I contribute a feature?**
A: Yes! See Contributing section above.

---

## 📜 License

MIT License

Copyright (c) 2025x1 FinTrack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 📞 Support & Contact

### Get Help

- 📧 **Email:** support@fintrack.app
- 💬 **Discord:** [Join our community](https://discord.gg/fintrack)
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/yourusername/fintrack/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/yourusername/fintrack/discussions)

### Stay Updated

- ⭐ **Star on GitHub:** https://github.com/yourusername/fintrack
- 🐦 **Twitter:** [@FinTrackApp](https://twitter.com/fintrackapp)
- 📝 **Blog:** https://blog.fintrack.app
- 📰 **Newsletter:** Subscribe for updates

---

## 🗺 Roadmap

### Version 1.1 (Q1 2025)
- [ ] Dark/Light theme toggle
- [ ] Export transactions to CSV/Excel
- [ ] Recurring transactions
- [ ] Email notifications
- [ ] Budget alerts

### Version 1.2 (Q2 2025)
- [ ] Custom categories
- [ ] Multi-currency support
- [ ] Advanced filtering
- [ ] Data visualization improvements
- [ ] Performance optimizations

### Version 2.0 (Q3 2025)
- [ ] Mobile app (React Native)
- [ ] Bank account integration (Plaid API)
- [ ] Investment portfolio tracking
- [ ] Bill reminders
- [ ] Shared budgets (family/roommates)

### Future
- [ ] AI-powered expense categorization
- [ ] Financial advice and insights
- [ ] Goal tracking
- [ ] Tax report generation
- [ ] Multi-language support

---

## 🙏 Acknowledgments

### Built With
- **React** - The amazing UI library
- **Tailwind CSS** - For beautiful styling
- **Sequelize** - Excellent ORM for Node.js
- **Recharts** - Beautiful charting library
- **Express** - Fast, minimalist web framework

### Inspiration
- Modern fintech applications
- Personal finance management best practices
- Community feedback and suggestions

### Contributors
Thanks to all contributors who have helped improve FinTrack!

<!-- ALL-CONTRIBUTORS-LIST:START -->
- Your Name (@yourusername) - Creator
<!-- ALL-CONTRIBUTORS-LIST:END -->

### Special Thanks
- Everyone who reported bugs and suggested features
- Open-source community for amazing tools
- Beta testers for valuable feedback

---

## 📚 Additional Resources

### Documentation
- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

### Tutorials
- [Getting Started with FinTrack](https://blog.fintrack.app/getting-started)
- [Building Custom Features](https://blog.fintrack.app/custom-features)
- [Deployment to Production](https://blog.fintrack.app/deployment)

### External Links
- [React Documentation](https://react.dev)
- [Sequelize Documentation](https://sequelize.org)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

<div align="center">
  
### ⭐ Star us on GitHub — it motivates us a lot!

**Made with ❤️ by the FinTrack Team**

[Website](https://fintrack.app) • [Documentation](./docs) • [Report Bug](https://github.com/yourusername/fintrack/issues) • [Request Feature](https://github.com/yourusername/fintrack/issues)

© 2024 FinTrack. All rights reserved.

</div>
-