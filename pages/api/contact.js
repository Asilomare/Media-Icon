import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// --- Configuration ---
// Ensure these environment variables are set in your deployment environment (e.g., .env.local, Vercel settings)
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID; // The ID of your Google Sheet
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;       // The name of the specific sheet (tab) within the spreadsheet
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL; // Service account email
// IMPORTANT: Replace escaped newlines \n with actual newlines in your environment variable value
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY.split(String.raw`\n`).join('\n');
// --- End Configuration ---

// Define the scope for Google Sheets API
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Validate environment variables
  if (!SPREADSHEET_ID || !SHEET_NAME || !GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY) {
    console.error('Missing Google Sheets API configuration in environment variables.');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const formData = req.body;

    // --- Google Sheets API Interaction ---
    const auth = new GoogleAuth({
      credentials: {
        client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: GOOGLE_SHEETS_PRIVATE_KEY,
      },
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Assuming the order of columns in your sheet is: Timestamp, Name, Email, Company, Message
    // Adjust the order here if your sheet is different.
    const newRow = [
      new Date().toISOString(), // Add a timestamp
      formData.name || '',       // Use empty string if field is missing/undefined
      formData.email || '',
      formData.company || '',
      formData.message || '',
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`, // Append after the last row in the sheet
      valueInputOption: 'USER_ENTERED', // Treat input data as if a user typed it
      insertDataOption: 'INSERT_ROWS', // Insert new rows for the data
      requestBody: {
        values: [newRow],
      },
    });
    // --- End Google Sheets API Interaction ---

    if (response.status === 200) {
      console.log('Data successfully appended to Google Sheet');
      return res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      console.error('Google Sheets API error:', response.status, response.statusText, response.data);
      return res.status(response.status || 500).json({ error: 'Failed to submit form data to Google Sheet' });
    }

  } catch (error) {
    console.error('Error processing form submission:', error);
    // Check if it's an authentication error
    if (error.message?.includes('invalid_grant')) {
        return res.status(401).json({ error: 'Google Sheets authentication failed. Check service account credentials and sheet permissions.' });
    }
    return res.status(500).json({ error: 'Internal Server Error processing form submission' });
  }
} 