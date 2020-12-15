const express = require("express");
const router = express.Router();

router.get("/sign-in", (req, res) => {
  const response = {
    status: "OK",
    name: "Tim"
  };
  res.setHeader("Access-Control-Allow-Origin", "*"); // for testing purposes, should point to https://pvdthings.netlify.app prefereably
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(response);
});

router.post("/auth", (req, res) => {
  const { phone } = req.body;
  
  console.log(`Authenticating ${phone}`);
  
  let name = "Tim";
  let status = "OK";
  
  if (phone.includes("401"))
    name = "Siobhán";
  else
    status = "ERROR";
  
  const response = {
    status: status,
    name: name
  }
  
  res.send(response);
});

module.exports = router;
