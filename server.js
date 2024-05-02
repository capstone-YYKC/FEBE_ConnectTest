const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// body-parser를 사용하여 POST 데이터를 파싱합니다.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  return res.send("hello")
})

app.post('/submit', (req, res) => {
  const {data} = req.body;
  console.log('Received data:', data);
  res.send(`data = ${data} : Data received successfully!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
