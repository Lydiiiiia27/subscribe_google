# Google Sheets CRUD Web Application

A lightweight solution for handling form submissions and managing subscriber data using Google Sheets as a backend database. Perfect for static websites (like those deployed on Vercel) that need simple data storage without a traditional backend server.

## 🎯 Purpose

This project was created to solve a common problem with static website hosting platforms (like Vercel) where you can't directly edit the GitHub repository or set up a traditional backend. It uses Google Sheets as a simple, free, and accessible database alternative.

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) operations
- Real-time data management
- Bootstrap-based responsive design
- Loading indicators for better UX
- Form validation
- Mobile-friendly interface

## 📋 Prerequisites

1. A Google account
2. Basic understanding of HTML/JavaScript
3. A Google Sheet to store the data

## 🛠️ Setup Instructions

1. **Create a Google Sheet:**
   - Create a new Google Sheet
   - Name the first sheet "Sheet1"
   - Add headers in row 1 (Date, Email)

2. **Set up Google Apps Script:**
   - Open your Google Sheet
   - Go to Extensions > Apps Script
   - Copy the contents of `Code.gs` into the script editor
   - Save the project

3. **Deploy the Web App:**
   - Click "Deploy" > "New deployment"
   - Choose "Web app"
   - Set "Execute as" to your account
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the deployment URL

4. **Configure the HTML:**
   - Replace `SCRIPT_URL` in the HTML file with your deployment URL
   - Host the HTML file on your static hosting platform

## 🔄 How It Works

1. **Backend (Google Apps Script):**
   - `doGet()`: Handles data retrieval
   - `doPost()`: Manages Create, Update, and Delete operations
   - Data is stored in Google Sheets

2. **Frontend (HTML/JavaScript):**
   - Bootstrap for styling
   - Async functions for API calls
   - Modal forms for editing
   - Real-time updates

## 🔧 Customization

To adapt this template for your needs:

1. **Modify the Form Fields:**
   - Add/remove input fields in the HTML
   - Update the `Code.gs` to handle new fields
   - Adjust the Google Sheet columns accordingly

2. **Change the Styling:**
   - Customize Bootstrap classes
   - Modify the included CSS

3. **Add New Features:**
   - Implement sorting/filtering
   - Add data validation
   - Include additional fields

## ⚠️ Important Notes

- The free Google Apps Script quota is limited to 20,000 requests per day
- Keep your deployment URL private if handling sensitive data
- Consider implementing rate limiting for production use
- Backup your Google Sheet regularly

## 🔄 Alternatives

If you need a more robust solution, consider:
- Firebase
- MongoDB Atlas
- Supabase
- Airtable

## 📝 License

MIT License - feel free to use this in your own projects!

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!