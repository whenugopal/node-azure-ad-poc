const express = require("express");
const auth = require("./auth");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/namaste", authenticateToken, (req, res) => {
  res.json({
    message: "Namaste! Thank you everyone!",
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("here is the auth" + token);
  return auth.verifyAzureAdToken(token, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.sendStatus(401);
    } else {
      console.log("Token verified successfully:", decoded);
      next();
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
