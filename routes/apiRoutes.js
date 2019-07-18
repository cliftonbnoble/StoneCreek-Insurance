// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var unirest = require("unirest");
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");
var finalData = require("../data/formData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/get-quote", function(req, res) {
    //Palomar API Call
var req = unirest("POST", "https://devservices.palomarspecialty.com/v1/rater/Flood");

req.headers({
  "Host": "devservices.palomarspecialty.com",
  "Postman-Token": "90293b4e-5fd5-4ab4-ae51-d83a2213e1fe,28726e3c-7759-40dd-8f87-4ce7fa3732f3",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.15.0",
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFBUDB3TGxxZExWVG9PcEE0a3d6U254NDlLY0JZQnIyMld0a0NMRVlrcHFhdUhFZnZiaTZJek9UYmdWdHk0UHc3V0piajdnbzdScTc2SkVpQ09RQ1FRWV9CN2JnZDNyVEdLRjNnZlpEdjh6aFNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoidTRPZk5GUEh3RUJvc0hqdHJhdU9iVjg0TG5ZIiwia2lkIjoidTRPZk5GUEh3RUJvc0hqdHJhdU9iVjg0TG5ZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNWY2MTk5Yi0wODgwLTQwYWUtYTFhOC1lZWQyNDdhNDhjZWUvIiwiaWF0IjoxNTYzMDQ4NTkyLCJuYmYiOjE1NjMwNDg1OTIsImV4cCI6MTU2MzA1MjQ5MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhNQUFBQVl1SEZuRUhyS081Q2VQMGhXNUZjdlB0Zm9JbzN6eXNMdVBWNEN2NFU1R3c9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJQZWdhIiwiYXBwaWQiOiJkNDk0ZTkxYy03MDNlLTRlMjEtODk2OS0yMzNlOWJhODcxZTIiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6IlN1bHRhbiIsImdpdmVuX25hbWUiOiJBYmJlIiwiaXBhZGRyIjoiMzQuODMuNC43OSIsIm5hbWUiOiJBYmJlIFN1bHRhbiIsIm9pZCI6IjgwYzVhYTQzLTI1OTMtNDcxOS04MjQ5LWRlZGQzY2JkYzBiOCIsInBsYXRmIjoiNSIsInB1aWQiOiIxMDAzMjAwMDM3QjBBMzcwIiwic2NwIjoiRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgVXNlci5SZWFkIiwic3ViIjoiS0NlMzgwblNWYkFqV2Y4ei1RRE1yMHR1NnJ2a0ttTzFkaTRDdkppcDJXZyIsInRpZCI6ImQ1ZjYxOTliLTA4ODAtNDBhZS1hMWE4LWVlZDI0N2E0OGNlZSIsInVuaXF1ZV9uYW1lIjoiQWJiZVNAcGFsYWRzLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFiYmVTQHBhbGFkcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJ4MUlEcjM5MElVbWhpbWl6UEc0bUFBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE1MzUzODUwMzN9.Z3k96TSbzg2HxCpQTEMq54FIP_3W3ypLPaXYWrkdjjF_d6OLg9Rx4S9bXaxhANyjLEo2si4f-RO4dfU7NovwI-gWfXpbKG3uOrfcz96JYe8MnLf5o65h3V1Re4H6_H_Ou2yEvsHk7gUdbjVgl2s1rHjJhos1DA68u0AClu7JpxVLNVoTft02e7JkMDdITBeDzYWrnkUV6ZQA3SfLBuVU3NYKC9srH_iMm2IY9NKqlrtEcba8rbWl0JPdLSHrW71q-GUyx2iqviF04Ysy3iRXk7IqOxRQJDOJbnyYl3wXfhXIDEBmphdaihOH0JjiJivuUpvDMqUsuoJav_ePjdPWUg",
  "Content-Type": "application/json"
});

req.type("json");
req.send(finalData);

req.end(function (res) {
    console.log("WORKING!!")
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
  })

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
