// Import required modules
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const properties = require("./constants");

// Create a client for retrieving JSON Web Keys (JWKs) from the provided JWKs URI
const client = jwksClient({
  jwksUri: properties.azureConfig.jwksUri,
});

// Export the AWS Lambda function handler
exports.handler = async (event, context) => {
  try {
    // Decode the JWT token to extract its header
    let header = jwt.decode(event.header.Authorization, {
      complete: true,
    }).header;

    // Retrieve the corresponding public key for JWT verification
    let cert = await getKey(header);

    // Verify the JWT token with the extracted certificate
    console.log(jwt.verify(event.header.Authorization, cert));

    // Return an AWS Lambda response policy with "Allow" effect
    return generatePolicy("Allow");
  } catch (error) {
    // Handle errors and log them
    console.log("Error occurred", error);
  }

  // Return a default AWS Lambda response policy
  return generatePolicy();
};

// Function to retrieve the public key for JWT verification
async function getKey(header) {
  let key = await client.getSigningKey(header.kid);
  return key.publicKey || key.rsaPublicKey;
}

// Function to generate an AWS Lambda response policy
function generatePolicy(effect = "Deny") {
  return JSON.stringify(
    // Set the policy effect (Allow or Deny) in the policy document
    (properties.policy.policyDocument.Statement[0].Effect = effect) &&
      properties.policy
  );
}
