# GAS-dashboard

Creating a single-page web app with Google Apps Script (GAS) for a dashboard-style application involves combining HTML, CSS, and JavaScript within a single HTML file. Here's an example of how you can structure the HTML file and use Google Apps Script to retrieve data from Google Sheets and display it in a dashboard-like format.

Assuming you have a Google Sheets spreadsheet with data in the following format:

Date | Sales |	Expenses |	Profit
--- | --- | --- | --- 
2023-07-01 |	1000	| 200	| 800
2023-07-02 | 1200 |	300 |	900
...	| ...	| ...	| ...

Make sure to replace 'SPREADSHEET_ID' with the actual ID of your Google Sheets document and 'YOUR_API_KEY' with your Google Sheets API key. To obtain an API key, you'll need to enable the Google Sheets API in the Google Cloud Console and create credentials.

With this setup, when you open the HTML file in a web browser or deploy the Google Apps Script web app, it will fetch data from the Google Sheets spreadsheet and display it in a dashboard-style layout.

 **Note:** a .gs file is used to include your Google Apps Script code directly in the web app. You can create an HTML file with inline JavaScript (Google Apps Script) using a <script> tag with the type="text/google-script" attribute.

