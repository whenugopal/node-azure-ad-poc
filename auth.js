const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const azureAdTenantId = "f8247c76-24f0-44d3-b63f-bc58bde16677";
const azureAdAudience = "20cf92a9-b491-486e-9c80-104bf1da0962"; // Typically, the Client ID of your application
const jwksUri = `https://login.microsoftonline.com/${azureAdTenantId}/discovery/v2.0/keys`;

const client = jwksClient({
  jwksUri: jwksUri,
});

// Verify the Azure AD token
function verifyAzureAdToken(token, callback) {
  jwt.verify(token, getKey, (err, decoded) => {
    if (err) {
      callback(err);
    } else {
      callback(null, decoded);
    }
  });
}

function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err);
    } else {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    }
  });
}

module.exports = { verifyAzureAdToken };
