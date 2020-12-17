const express = require("express");
const router = express.Router();

let humans = [
  {
    name: "Siobhán",
    phone: "4018888888"
  }
];

router.post("/auth", (req, res) => {
  const { phone } = req.body;
  
  console.log(`Authenticating ${phone} ...`);
  
  const member = humans.find(human => human.phone === phone);
  const status = "OK";
  
  const response = {
    status: status,
    member: member
  }
  
  res.send(response);
});

router.post("/auth/code", (req, res) => {
  const { phone, code } = req.body;
  
  console.log(`Authenticating ${phone} with code ${code} ...`);
  
  const member = humans.find(human => human.phone === phone);
  const status = "OK";
  
  const response = {
    status: status,
    member: member
  }
  
  res.send(response);
});

module.exports = router;
