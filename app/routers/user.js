const express = require('express');
const router = express.Router();
const models = require('../../models')

router.get("/users", (req,res)=> {
  models.Users.findAll().then(users => {
    return res.json({users: users})
  })
})

router.post("/users/create", (req,res) => {
  models.Users.create(req.body).then(user => {
    return res.json({user: user})
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router;