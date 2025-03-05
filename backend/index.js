
import getData from './db.js';
import AuthRoute from './Routes/Auth.js';

getData(function call(err, data, CatData) {

  // console.log(data)
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
  //console.log("This is from index.js")
  //console.log(global.foodData,global.foodCategory)
})

import express, { json } from 'express';
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");   //3000 because it should match the frontend url
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', AuthRoute);

app.listen(port, () => {
  console.log(`The Char Fiesta app listening on http://localhost:${port}`)
})

