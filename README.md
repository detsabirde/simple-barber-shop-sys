# Barbershop Management System

A real-time barbershop management system built with Node.js, Express, MongoDB, and Socket.IO.

## Features

### 1. Homepage (TV Display)
- Displays haircut prices
- Shows the number of waiting clients for each employee
- Real-time updates using Socket.IO
- No interaction required - designed for display on a TV

### 2. Admin Page
- Add new clients with employee assignment and price
- View, edit, and delete client records
- Filter clients by employee
- Real-time updates when changes are made

### 3. Daily Income Summary
- View total income per employee for the selected date
- Filter by date
- Shows clients served and total income

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (Atlas)
- **Real-time updates**: Socket.IO
- **Frontend**: Plain HTML + Tailwind CSS

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/barbershop-management.git
cd barbershop-management
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
Create a `.env` file in the root directory with the following:
\`\`\`
MONGODB_URI=your_mongodb_connection_string
PORT=3000
\`\`\`

4. Start the server:
\`\`\`bash
npm start
\`\`\`

5. Access the application:
- Homepage (TV Display): http://localhost:3000
- Admin Page: http://localhost:3000/admin
- Daily Income Summary: http://localhost:3000/income

