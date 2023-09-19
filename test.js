const lambdaFunction = require("./index");

const event = {
  version: "2.0",
  routeKey: "$default",
  rawPath: "/my-resource",
  rawQueryString: "param1=value1&param2=value2",
  header: {
    accept: "application/json",
    "accept-language": "en-US",
    "content-type": "application/json",
    "user-agent": "User-Agent-String",
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJhcGk6Ly9kYmYzYmYxNC1iNjAwLTQ3YWUtYjEwZC1kZDJjMWRjMTkyNzMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mODI0N2M3Ni0yNGYwLTQ0ZDMtYjYzZi1iYzU4YmRlMTY2NzcvIiwiaWF0IjoxNjk1MTMyMjQ4LCJuYmYiOjE2OTUxMzIyNDgsImV4cCI6MTY5NTEzNjE0OCwiYWlvIjoiRTJGZ1lCQStGU3JDSHQ4N1o3OWxkNnpsaXBwWUFBPT0iLCJhcHBpZCI6IjIwY2Y5MmE5LWI0OTEtNDg2ZS05YzgwLTEwNGJmMWRhMDk2MiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2Y4MjQ3Yzc2LTI0ZjAtNDRkMy1iNjNmLWJjNThiZGUxNjY3Ny8iLCJvaWQiOiJkNTY5ZjlkMS0yY2JlLTQ5MzYtOWNlOC1mNTI2YTBkMzAwNDkiLCJyaCI6IjAuQVdRQWRud2stUEFrMDBTMlA3eFl2ZUZtZHhTXzg5c0F0cTVIc1EzZExCM0Jrbk5sQUFBLiIsInJvbGVzIjpbIndlbGNvbWUiXSwic3ViIjoiZDU2OWY5ZDEtMmNiZS00OTM2LTljZTgtZjUyNmEwZDMwMDQ5IiwidGlkIjoiZjgyNDdjNzYtMjRmMC00NGQzLWI2M2YtYmM1OGJkZTE2Njc3IiwidXRpIjoidURUWUxUbnZtazZMMkRCV01xWXBBQSIsInZlciI6IjEuMCJ9.eUA4cgDVrGGhdKs058Fopc9NrhackhRNzmOo5sndL7stzNH7ADkYK-WG2-Z3zCfjN02PwGn4wxCGeAKLujFkiWtiiWGpHAJXx72HG4Wnl3JU9p6CvEF2cTbQcgI7AueUa4OV1FuUR-G-06SNPzy8eB0SQ8GjudVCbDcbkOXsq73X_83YgvGRnyZbjL8cZsViX2XWrABm8VZP-QPjbM0DVY0ut7WFFD9UnmuDvgaWHlqnI8k0Zg-wJfQGdXwVeLjSJKZIUYHffLayNgcFMVvTUcNzgjh6nRiXKk9eNi-vQvw5DftLQFmQQdnjPnAOdlyTl_qwQ2SFqTeH-P4PRNH6HA",
  },
  requestContext: {
    accountId: "123456789012",
    apiId: "api-id",
    domainName: "example.com",
    domainPrefix: "abc123",
    http: {
      method: "GET",
      path: "/my-resource",
      protocol: "HTTP/1.1",
      sourceIp: "1.2.3.4",
      userAgent: "User-Agent-String",
    },
    requestId: "request-id",
    routeKey: "$default",
    stage: "$default",
    time: "2023-01-01T00:00:00Z",
    timeEpoch: 1672521600000,
  },
  body: '{"key1":"value1","key2":"value2"}',
  pathParameters: {
    param1: "value1",
    param2: "value2",
  },
  isBase64Encoded: false,
};
const context = {};

lambdaFunction
  .handler(event, context)
  .then((result) => {
    console.log("Lambda Function Result:", result);
  })
  .catch((error) => {
    console.error("Lambda Function Error:", error);
  });
