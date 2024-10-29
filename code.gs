function doPost(e) {
  let sheetName = "Sheet1";
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput("Error: Sheet not found");
  }

  let newRow = sheet.getLastRow() + 1;
  let rowData = [];

  rowData.push(new Date()); // Timestamp
  rowData.push(e.parameter.email); // Email address

  sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);

  return ContentService.createTextOutput("Thank you for subscribing!");
}
function doGet() {
  let sheetName = "Sheet1";
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput("Error: Sheet not found");
  }

  let data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
