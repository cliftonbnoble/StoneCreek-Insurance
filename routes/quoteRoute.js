var unirest = require("unirest");
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var finalData = require(".../data/formData");

app.get('/get-quote', function(req, res) {
//API Call to Palomar
var req = unirest("POST", "https://devservices.palomarspecialty.com/v1/rater/Flood");
req.headers({
//   "cache-control": "no-cache",
//   "Connection": "keep-alive",
//   "content-length": "419",
//   "accept-encoding": "gzip, deflate",
  "Host": "devservices.palomarspecialty.com",
  "Postman-Token": "90293b4e-5fd5-4ab4-ae51-d83a2213e1fe,28726e3c-7759-40dd-8f87-4ce7fa3732f3",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.15.0",
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYX1pBS0ZXR3l3QkVkYUFtT1NwV0pFSnN4N1J3eG96VzhRNmJURTJXVFFuVmtHY2h1N3RvTkVTT2Z0a2lvdXV5X19tdk5ETXVBVFZPM3NoYmZYNG92YmlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIiwia2lkIjoiQ3RmUUM4TGUtOE5zQzdvQzJ6UWtacGNyZk9jIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNWY2MTk5Yi0wODgwLTQwYWUtYTFhOC1lZWQyNDdhNDhjZWUvIiwiaWF0IjoxNTYxODcxNTY2LCJuYmYiOjE1NjE4NzE1NjYsImV4cCI6MTU2MTg3NTQ2NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IjQyWmdZREJsa1pENklIRjM2Ukhlby9zY0REajlEcHpiM01weVZLZlM3V095UlVyb0tTa0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IlBlZ2EiLCJhcHBpZCI6ImQ0OTRlOTFjLTcwM2UtNGUyMS04OTY5LTIzM2U5YmE4NzFlMiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiU3VsdGFuIiwiZ2l2ZW5fbmFtZSI6IkFiYmUiLCJpcGFkZHIiOiIzNC44My40Ljc5IiwibmFtZSI6IkFiYmUgU3VsdGFuIiwib2lkIjoiODBjNWFhNDMtMjU5My00NzE5LTgyNDktZGVkZDNjYmRjMGI4IiwicGxhdGYiOiI1IiwicHVpZCI6IjEwMDMyMDAwMzdCMEEzNzAiLCJzY3AiOiJEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBVc2VyLlJlYWQiLCJzdWIiOiJLQ2UzODBuU1ZiQWpXZjh6LVFETXIwdHU2cnZrS21PMWRpNEN2SmlwMldnIiwidGlkIjoiZDVmNjE5OWItMDg4MC00MGFlLWExYTgtZWVkMjQ3YTQ4Y2VlIiwidW5pcXVlX25hbWUiOiJBYmJlU0BwYWxhZHMub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWJiZVNAcGFsYWRzLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Imw3LWVmSy1IRUV5Zng1UEdXTGdLQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfdGNkdCI6MTUzNTM4NTAzM30.Lqf9XEaHbJ23KxAi8ZkKn-4Wav4ZxE4VdUR5-Kv440td9rqoLCYmvxZjWijKz1VvnZHB6-6t1SjN3Wr0QKlS0Oqvf6Udn135e7z6sS0Qp2MUtHDbLFtohDVxa5DtmCYyDfnmZJwTkI6J2dKeollI-RQDOJtXIERDlf_W7qnXlQzZNnSO9yogthBux99smxL6J9LsdtUyZcO3dyZaBKBXbj1vumL_JpRW1A1BDKIzZ8ivyG08wP0q8-ZyHfbqT3aaE7_Aen_-sjGFyqxthimHotCwOp_vCYgUeQrKhFvSCbr9I1o9VY8E4apk7SXjsPfm7aU8DgMmty7d8t_pNUv-1w",
  "Content-Type": "application/json"
});
req.type("json");
req.send(finalData);

req.end(function (res) {
    console.log("WORKING!!")
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
});
