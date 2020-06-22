const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Discord = require('discord.js')
const client = new Discord.Client()

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.send(client.fetchUser('112328864650231808'))
    res.end()
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
