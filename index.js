const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const properties = require("./constants");

const client = jwksClient({
  jwksUri: properties.azureConfig.jwksUri,
});

exports.handler = async (event, context) => {
  try {
    let header = jwt.decode(event.header.Authorization, {
      complete: true,
    }).header;
    let cert = await getKey(header);
    console.log(jwt.verify(event.header.Authorization, cert));
    return generatePolicy("Allow");
  } catch (error) {
    console.log("Error occcured", error);
  }
  return generatePolicy();
};

async function getKey(header) {
  let key = await client.getSigningKey(header.kid);
  return key.publicKey || key.rsaPublicKey;
}

function generatePolicy(effect = "Deny") {
  return JSON.stringify(
    (properties.policy.policyDocument.Statement[0].Effect = effect) &&
      properties.policy
  );
}
