
$("#form-submit").on("click", function() {
    console.log("WORKING!!!!")
    let yearBuilt = $("#year-built").val().trim();
    let address = $("#address").val().trim();
    let city = $("#city").val().trim();
    let state = $("#state").val().trim();
    let zip = $("#zip").val().trim();
    let constructionType = $("#construction-type").val().trim();
    let contentsCostValue = $("#contents-cost-value").val().trim();
    let coverageA = $("#coverage-a").val().trim();
    let coverageB = $("#coverage-b").val().trim();
    let coverageE = $("#coverage-e").val().trim();
    let replacementValue = $("#dwelling-replacement-value").val().trim();
    let foundationType = $("#foundation-type").val().trim();
    let numLevels = $("#number-of-levels").val().trim();
    let policyType = $("#policy-type").val().trim();

    console.log("YEar Built: ", yearBuilt);
    console.log("Addresst: ", address);
    console.log("City: ", city);
    console.log("State: ", state);
    console.log("Zip: ", zip);
    console.log("Construction Type: ", constructionType);
    console.log("Contents Cost Value: ", contentsCostValue);
    console.log("Coverage A: ", coverageA);
    console.log("Coverage B: ", coverageB);
    console.log("Coverage E: ", coverageE);
    console.log("Dwelling Replacement Value: ", replacementValue);
    console.log("Foundation Type: ", foundationType);
    console.log("Number of Levels: ", numLevels);
    console.log("Policy Type: ", policyType);

let finalData = {
"YearBuilt": yearBuilt,
"Address": {
  "AddressLine1": address,
  "AddressLine2": "",
  "city": city,
  "StateCode": state,
  "Zip": zip
},
"ConstructionType": constructionType,
"CoverageA": coverageA,
"CoverageB": coverageB,
"CoverageE": coverageE,
"ContentsCostValue": replacementValue,
"DwellingReplacementValue": 500000,
"FoundationType": foundationType,
"NumberofLevels": numLevels,
"PolicyType": policyType,
};
console.log("Final Data: ", finalData)

$.post("/get-quote", finalData,
      function(data) {
console.log("POST FUNCTION WORKING")
        // If a table is available... tell user they are booked.
        if (data) {
          alert("Yay! You are officially booked!");
        }

        // If a table is available... tell user they on the waiting list.
        else {
          alert("Sorry you are on the wait list");
        }

        // Clear the form when submitting
        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
        $("#reserve-unique-id").val("");

      });

//Palomar API Call
// var req = unirest("POST", "https://devservices.palomarspecialty.com/v1/rater/Flood");

// req.headers({
//   "Host": "devservices.palomarspecialty.com",
//   "Postman-Token": "90293b4e-5fd5-4ab4-ae51-d83a2213e1fe,28726e3c-7759-40dd-8f87-4ce7fa3732f3",
//   "Cache-Control": "no-cache",
//   "Accept": "*/*",
//   "User-Agent": "PostmanRuntime/7.15.0",
//   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFBUDB3TGxxZExWVG9PcEE0a3d6U254NDlLY0JZQnIyMld0a0NMRVlrcHFhdUhFZnZiaTZJek9UYmdWdHk0UHc3V0piajdnbzdScTc2SkVpQ09RQ1FRWV9CN2JnZDNyVEdLRjNnZlpEdjh6aFNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoidTRPZk5GUEh3RUJvc0hqdHJhdU9iVjg0TG5ZIiwia2lkIjoidTRPZk5GUEh3RUJvc0hqdHJhdU9iVjg0TG5ZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNWY2MTk5Yi0wODgwLTQwYWUtYTFhOC1lZWQyNDdhNDhjZWUvIiwiaWF0IjoxNTYzMDQ4NTkyLCJuYmYiOjE1NjMwNDg1OTIsImV4cCI6MTU2MzA1MjQ5MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhNQUFBQVl1SEZuRUhyS081Q2VQMGhXNUZjdlB0Zm9JbzN6eXNMdVBWNEN2NFU1R3c9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJQZWdhIiwiYXBwaWQiOiJkNDk0ZTkxYy03MDNlLTRlMjEtODk2OS0yMzNlOWJhODcxZTIiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6IlN1bHRhbiIsImdpdmVuX25hbWUiOiJBYmJlIiwiaXBhZGRyIjoiMzQuODMuNC43OSIsIm5hbWUiOiJBYmJlIFN1bHRhbiIsIm9pZCI6IjgwYzVhYTQzLTI1OTMtNDcxOS04MjQ5LWRlZGQzY2JkYzBiOCIsInBsYXRmIjoiNSIsInB1aWQiOiIxMDAzMjAwMDM3QjBBMzcwIiwic2NwIjoiRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgVXNlci5SZWFkIiwic3ViIjoiS0NlMzgwblNWYkFqV2Y4ei1RRE1yMHR1NnJ2a0ttTzFkaTRDdkppcDJXZyIsInRpZCI6ImQ1ZjYxOTliLTA4ODAtNDBhZS1hMWE4LWVlZDI0N2E0OGNlZSIsInVuaXF1ZV9uYW1lIjoiQWJiZVNAcGFsYWRzLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFiYmVTQHBhbGFkcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJ4MUlEcjM5MElVbWhpbWl6UEc0bUFBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE1MzUzODUwMzN9.Z3k96TSbzg2HxCpQTEMq54FIP_3W3ypLPaXYWrkdjjF_d6OLg9Rx4S9bXaxhANyjLEo2si4f-RO4dfU7NovwI-gWfXpbKG3uOrfcz96JYe8MnLf5o65h3V1Re4H6_H_Ou2yEvsHk7gUdbjVgl2s1rHjJhos1DA68u0AClu7JpxVLNVoTft02e7JkMDdITBeDzYWrnkUV6ZQA3SfLBuVU3NYKC9srH_iMm2IY9NKqlrtEcba8rbWl0JPdLSHrW71q-GUyx2iqviF04Ysy3iRXk7IqOxRQJDOJbnyYl3wXfhXIDEBmphdaihOH0JjiJivuUpvDMqUsuoJav_ePjdPWUg",
//   "Content-Type": "application/json"
// });

// req.type("json");
// req.send(finalData);

// req.end(function (res) {
//     console.log("WORKING!!")
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });

})

// module.exports = finalData;
