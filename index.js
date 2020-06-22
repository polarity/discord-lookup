const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Discord = require('discord.js')
const DClient = new Discord.Client()

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    if (req.query.user) {
      DClient.login(process.env.API_DISCORD_TOKEN).then((token) => {
        const DUser = new Discord.User(DClient, { id: req.query.user })
        DUser.fetch()
          .then((data) => {
            console.log('data: ', data)
            res.json(data)
            res.end()
          }).catch((err) => {
            console.log('error1: ', err)
            res.json(err)
            res.end()
          })
      }).catch((err) => {
        console.log('error: ', err)
        res.json(err)
        res.end()
      })
    } else {
      res.end()
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
