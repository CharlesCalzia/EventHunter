function getFireStore() {

    var firestore = FirestoreApp.getFirestore("email", "key", "eventhunter-tech");
   
   
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var startRowNumber = 2;
     var endRowNumber = sheet.getLastRow();
   
    for (var currentRowNumber = startRowNumber; currentRowNumber <= endRowNumber; currentRowNumber++) {
         console.log(currentRowNumber);
             var row = sheet.getRange(currentRowNumber + ":" + currentRowNumber).getValues();
             name = row[0][0];
             description = row[0][1];
             location = row[0][2];
             start = row[0][3];
             end = row[0][4];
             link = row[0][5];
             price = row[0][6];
             category = row[0][7];
               data = {
                 "name": name,
                 "description": description,
                 "location": location,
                 "start-date": start,
                 "end-date": end,
                 "link": link,
                 "price": price,
                 "category": category
               }
               firestore.createDocument(category + "/"+name, data);            
         
         } 
   
   }