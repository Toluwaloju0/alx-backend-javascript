const request = require('request')
const url = {
  url: 'http://localhost:7865/login',
  headers: {
    'Content-Type': 'Application/json'
  },
  body: JSON.stringify({userName: 'Tolu'})
};
request.post(url, (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log(body)
  }
});
