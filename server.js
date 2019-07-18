
var express = require("express");
var unirest = require("unirest");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});

//API Call to Palomar
// var req = unirest("POST", "https://devservices.palomarspecialty.com/v1/rater/Flood");

// req.headers({
// //   "cache-control": "no-cache",
// //   "Connection": "keep-alive",
// //   "content-length": "419",
// //   "accept-encoding": "gzip, deflate",
//   "Host": "devservices.palomarspecialty.com",
//   "Postman-Token": "90293b4e-5fd5-4ab4-ae51-d83a2213e1fe,28726e3c-7759-40dd-8f87-4ce7fa3732f3",
//   "Cache-Control": "no-cache",
//   "Accept": "*/*",
//   "User-Agent": "PostmanRuntime/7.15.0",
//   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYS2FmLTV2cVdLeERyT3pzY1huTkVITzdLQWVrMGNOb0YxVHYxMG4ydjk5SDhIeVQwemhLa19KT2ZSQlUwWjR1Q2JYSkFQSURFX19CMnd4ZS1COUpPVFNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIiwia2lkIjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNWY2MTk5Yi0wODgwLTQwYWUtYTFhOC1lZWQyNDdhNDhjZWUvIiwiaWF0IjoxNTYyNjI2MTgzLCJuYmYiOjE1NjI2MjYxODMsImV4cCI6MTU2MjYzMDA4MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhMQUFBQWxKM1JpeTg5cUFkWUcxZ3p5NzlXSEYzTjN3MjdnYlhhbmU3OUZQaTBZQkk9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJQZWdhIiwiYXBwaWQiOiJkNDk0ZTkxYy03MDNlLTRlMjEtODk2OS0yMzNlOWJhODcxZTIiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6IlN1bHRhbiIsImdpdmVuX25hbWUiOiJBYmJlIiwiaXBhZGRyIjoiMzQuODMuNC43OSIsIm5hbWUiOiJBYmJlIFN1bHRhbiIsIm9pZCI6IjgwYzVhYTQzLTI1OTMtNDcxOS04MjQ5LWRlZGQzY2JkYzBiOCIsInBsYXRmIjoiNSIsInB1aWQiOiIxMDAzMjAwMDM3QjBBMzcwIiwic2NwIjoiRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgVXNlci5SZWFkIiwic3ViIjoiS0NlMzgwblNWYkFqV2Y4ei1RRE1yMHR1NnJ2a0ttTzFkaTRDdkppcDJXZyIsInRpZCI6ImQ1ZjYxOTliLTA4ODAtNDBhZS1hMWE4LWVlZDI0N2E0OGNlZSIsInVuaXF1ZV9uYW1lIjoiQWJiZVNAcGFsYWRzLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFiYmVTQHBhbGFkcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiI0WjFRNHp3UWgwNlFBNEQ5WkdzTkFBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE1MzUzODUwMzN9.e_sY_xtimxNB-8Vy18XjEsSxgf8ebG8ooQeLU_pnTupXr5Af4xmkzo8D3OHzVAoGdhwUGXPWiPYWclGifYfT7b99FMLZ-xFoUg6HN-fGdz1zhzHXCU4tB4tw24k4ilxyCFQtYNRoOLjyi5oKWXA_skjc0N_KOsCpoUC8we1jfaHL35uRGejYChAsSNbDhtWg-r4X6uwL1SN1FtmikjdUutjtj-C7u-E6T0HfOS5I7RX-D24dvEUmgTgiCW_VGAe3EhLraB3aixN0Gkr_H--qHuTHbKBUl06stXE_UGhSt-K3GrwLN0VNfpxdIkHvLngGSofAhTn5dvQ0m1dvJFx2Xg",
//   "Content-Type": "application/json"
// });

// req.type("json");
// req.send({
//   "YearBuilt": 1939,
//   "Address": {
//     "AddressLine1": "1440 California St",
//     "AddressLine2": "",
//     "city": "Berkeley",
//     "StateCode": "CA",
//     "Zip": 94703
//   },
//   "ConstructionType": "Wood Frame",
//   "CoverageA": 250000,
//   "CoverageB": 10000,
//   "CoverageE": 5000,
//   "ContentsCostValue": "ACV",
//   "DwellingReplacementValue": 500000,
//   "FoundationType": "Basement",
//   "NumberofLevels": 1,
//   "PolicyType": "Primary"
// });

// req.end(function (res) {
//     console.log("WORKING!!")
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });