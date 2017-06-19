const express = require('express')
const app = express()

app.get('/test-webhook', function (req, res) {
 res.send('Hello this is a test!')
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

app.post('/test-webhook', function(req, res){
	res.send('Hello')
})