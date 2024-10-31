function doPost(e) {
  let sheetName = "Sheet1";
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: "Sheet not found" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  let action = e.parameter.action;
  let response = {};

  switch (action) {
    case "create":
      let newRow = sheet.getLastRow() + 1;
      sheet
        .getRange(newRow, 1, 1, 2)
        .setValues([[new Date(), e.parameter.email]]);
      response = { success: true, message: "Subscriber added successfully" };
      break;

    case "update":
      let rowToUpdate = parseInt(e.parameter.row);
      let newEmail = e.parameter.email;
      sheet.getRange(rowToUpdate, 2).setValue(newEmail);
      response = { success: true, message: "Subscriber updated successfully" };
      break;

    case "delete":
      let rowToDelete = parseInt(e.parameter.row);
      sheet.deleteRow(rowToDelete);
      response = { success: true, message: "Subscriber deleted successfully" };
      break;

    default:
      response = { error: "Invalid action" };
  }

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet() {
  let sheetName = "Sheet1";
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: "Sheet not found" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  let data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      data: data,
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
