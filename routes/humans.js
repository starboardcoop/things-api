const express = require("express");
const router = express.Router();

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

let auth = new Map();

let humans = [
  {
    name: "Siobhán",
    phone: "4018888888"
  }
];

router.post("/auth", (req, res) => {
  const { phone } = req.body;
  const status = 200;
  const member = humans.find(human => human.phone === phone);

  let response = {
    status: status,
    member: member,
    error: null
  }

  console.log(`Authenticating ${phone} ...`);
  
  nexmo.verify.request({
    number: phone,
    brand: 'pvd things',
    code_length: '6'
  }, (err, result) => {
    auth.set(phone, result.request_id)
    if (result.status === '10') {
      response.error = "Please enter the last code you got.";
    }
    console.log(err ? err : result)
    res.send(response);
  });
});

router.post("/auth/code", (req, res) => {
  const { phone, code } = req.body;

  let response = {
    status: 200,
    member: humans.find(human => human.phone === phone)
  }

  console.log(`Authenticating ${phone} with code ${code} ...`);

  nexmo.verify.check({
    request_id: auth.get(phone),
    code: code
  }, (err, result) => {
    response.status = result.status === '0' ? 200 : 401;
    console.log(err ? err : result)

    auth.delete(phone);

    res.send(response);
  });
});

router.post("/auth/enroll", (req, res) => {
  const { phone, name } = req.body;
  
  humans.push({
    name: name,
    phone: phone
  })
  
  console.log(`Enrolling new member ${name} with ${phone} ...`);
  
  const member = humans.find(human => human.phone === phone);
  const status = "OK";
  
  const response = {
    status: status,
    member: member
  }
  
  res.send(response);
});

module.exports = router;