const policy = {
  principalId: "user-name",
  policyDocument: {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: "Deny",
        Resource: "arn:<>",
      },
    ],
  },
};
const azureAdTenantId = "f8247c76-24f0-44d3-b63f-bc58bde16677";

const azureConfig = {
  azureAdTenantId: "f8247c76-24f0-44d3-b63f-bc58bde16677",
  jwksUri: `https://login.microsoftonline.com/${azureAdTenantId}/discovery/v2.0/keys`,
};

module.exports = { policy, azureConfig };
