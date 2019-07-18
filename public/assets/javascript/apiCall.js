var unirest = require("unirest");
let finalData = require(".../data/formData.js")
console.log("Form Data Working", finalData)

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://devservices.palomarspecialty.com/v1/rater/Flood",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYX1pBS0ZXR3l3QkVkYUFtT1NwV0pFSnN4N1J3eG96VzhRNmJURTJXVFFuVmtHY2h1N3RvTkVTT2Z0a2lvdXV5X19tdk5ETXVBVFZPM3NoYmZYNG92YmlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIiwia2lkIjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNWY2MTk5Yi0wODgwLTQwYWUtYTFhOC1lZWQyNDdhNDhjZWUvIiwiaWF0IjoxNTYxODcxNTY2LCJuYmYiOjE1NjE4NzE1NjYsImV4cCI6MTU2MTg3NTQ2NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyWmdZREJsa1pENklIRjM2Ukhlby9zY0REajlEcHpiM01weVZLZlM3V095UlVyb0tTa0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IlBlZ2EiLCJhcHBpZCI6ImQ0OTRlOTFjLTcwM2UtNGUyMS04OTY5LTIzM2U5YmE4NzFlMiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiU3VsdGFuIiwiZ2l2ZW5fbmFtZSI6IkFiYmUiLCJpcGFkZHIiOiIzNC44My40Ljc5IiwibmFtZSI6IkFiYmUgU3VsdGFuIiwib2lkIjoiODBjNWFhNDMtMjU5My00NzE5LTgyNDktZGVkZDNjYmRjMGI4IiwicGxhdGYiOiI1IiwicHVpZCI6IjEwMDMyMDAwMzdCMEEzNzAiLCJzY3AiOiJEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBVc2VyLlJlYWQiLCJzdWIiOiJLQ2UzODBuU1ZiQWpXZjh6LVFETXIwdHU2cnZrS21PMWRpNEN2SmlwMldnIiwidGlkIjoiZDVmNjE5OWItMDg4MC00MGFlLWExYTgtZWVkMjQ3YTQ4Y2VlIiwidW5pcXVlX25hbWUiOiJBYmJlU0BwYWxhZHMub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWJiZVNAcGFsYWRzLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Imw3LWVmSy1IRUV5Zng1UEdXTGdLQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfdGNkdCI6MTUzNTM4NTAzM30.Lqf9XEaHbJ23KxAi8ZkKn-4Wav4ZxE4VdUR5-Kv440td9rqoLCYmvxZjWijKz1VvnZHB6-6t1SjN3Wr0QKlS0Oqvf6Udn135e7z6sS0Qp2MUtHDbLFtohDVxa5DtmCYyDfnmZJwTkI6J2dKeollI-RQDOJtXIERDlf_W7qnXlQzZNnSO9yogthBux99smxL6J9LsdtUyZcO3dyZaBKBXbj1vumL_JpRW1A1BDKIzZ8ivyG08wP0q8-ZyHfbqT3aaE7_Aen_-sjGFyqxthimHotCwOp_vCYgUeQrKhFvSCbr9I1o9VY8E4apk7SXjsPfm7aU8DgMmty7d8t_pNUv-1w",
    //   "User-Agent": "PostmanRuntime/7.15.0",
    //   "Accept": "*/*",
    //   "Cache-Control": "no-cache",
    //   "Postman-Token": "17dbb4e9-e0ab-44cd-9126-ebb76b13a24b,6d15e9d3-7df8-4ed7-a27a-977348da4cc4",
    //   "Host": "devservices.palomarspecialty.com",
    //   "accept-encoding": "gzip, deflate",
    //   "content-length": "419",
    //   "Connection": "keep-alive",
    //   "cache-control": "no-cache"
    },
    // "processData": false,
    "data": "{\n  \"YearBuilt\": 1950,\n  \"Address\": {\n    \"AddressLine1\": \"1140 Wall St\",\n    \"AddressLine2\": \"\",\n    \"city\": \"La Jolla\",\n    \"StateCode\": \"CA\",\n    \"Zip\": 92037\n  },\n  \"ConstructionType\": \"Wood Frame\",\n  \"CoverageA\": 250000,\n  \"CoverageB\": 10000,\n  \"CoverageE\": 5000,\n  \"ContentsCostValue\": \"ACV\",\n  \"DwellingReplacementValue\": 500000,\n  \"FoundationType\": \"Basement\",\n  \"NumberofLevels\": 1,\n  \"PolicyType\": \"Primary\"\n}"
  }

  $("#form-submit").on("click", function() {
    console.log("submit working!!")
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});