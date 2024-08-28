// Google Apps Script code
function getDataFromSheet() {
  var spreadsheetId = 'SPREADSHEET_ID'; // Replace with your Google Sheets ID
  var sheetName = 'Sheet1'; // Replace with the sheet name

  var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '?key=YOUR_API_KEY';
  // Replace 'YOUR_API_KEY' with your Google Sheets API key

  fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.values))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
  var dashboard = document.getElementById('dashboard');
  for (var i = 1; i < data.length; i++) { // Start from 1 to skip the header row
    var card = document.createElement('div');
    card.className = 'card';

    var date = data[i][0];
    var sales = data[i][1];
    var expenses = data[i][2];
    var profit = data[i][3];
// this should be refactored into dynamic code lines

    card.innerHTML = `
      <h2>${date}</h2>
      <p>Sales: $${sales}</p>
      <p>Expenses: $${expenses}</p>
      <p>Profit: $${profit}</p>
    `;

    dashboard.appendChild(card);
  }
}

// Load data when the page loads
window.onload = function () {
  getDataFromSheet();
};
