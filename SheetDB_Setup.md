# Setting Up SheetDB for Feedback Collection

This guide will help you set up SheetDB to collect feedback data from your Gundagardi application.

## What is SheetDB?

SheetDB is a service that allows you to use Google Sheets as a database for your application. It provides an API that enables your application to read from and write to a Google Sheet.

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Add the following column headers to the first row:
   - name
   - rating
   - category
   - message
   - email
   - timestamp

Your sheet should look like this:

| name | rating | category | message | email | timestamp |
|------|--------|----------|---------|-------|-----------|
|      |        |          |         |       |           |

### 2. Set up SheetDB API

1. Go to [SheetDB.io](https://sheetdb.io/)
2. Create an account or sign in
3. Click "Create New API" button
4. Enter the URL of your Google Sheet
5. Follow the authentication steps to connect SheetDB to your Google Sheet
6. SheetDB will generate an API URL for your sheet (it will look like `https://sheetdb.io/api/v1/abc123xyz`)

### 3. Update Your Application Configuration

1. Open the `src/config.js` file in your application
2. Replace the placeholder SheetDB API URL with your actual SheetDB API URL:

```javascript
export const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/your_actual_api_id';
```

### 4. Test Your Feedback Form

1. Run your application
2. Go to the feedback form
3. Submit a test feedback entry
4. Check your Google Sheet to verify that the data was successfully added

## Troubleshooting

If your feedback isn't being saved to the Google Sheet:

1. Check the browser console for any error messages
2. Verify that the SheetDB API URL in `config.js` is correct
3. Make sure your Google Sheet column names exactly match the expected names
4. Check if you have permissions issues with your Google Sheet
5. Visit the [SheetDB documentation](https://docs.sheetdb.io/) for more help

## Security Considerations

- SheetDB API URLs grant access to your Google Sheet. Keep your API URL private.
- For production applications, consider implementing server-side proxying of requests to SheetDB to keep your API URL hidden from client-side code.
- Set up proper validation and rate limiting to prevent abuse of your feedback form. 