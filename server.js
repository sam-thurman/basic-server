'use strict'
const express = require('express')
const app = express();
require('dotenv').config();

app.use(express.static('./public'));

// const PORT = 3000
const PORT = process.env.PORT;
// this^ grabs the PORT value from .env, this only matters if you don't want anyone to be able to see the
// PORT you are using

app.get('/', (request, response) => {
  response.send('Hello from the back site')
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})



const clickListener = () => {
  const header = document.getElementById("header")
  if (header.style.display === 'hidden') {
    header.style.visibility = 'visible';
    console.log('clicked')
  } else {
    header.style.visibility = 'hidden';
    console.log('clicked')
  }
}
$('.toggle').click(clickListener());