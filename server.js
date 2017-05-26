var express = require("express");
const app = express();
app.get('/', function (req, res) {
    console.log(req.headers);
    var clientip = req.get('x-forwarded-for');
    var clientlan = req.get('accept-language');
    var clientsoft = req.get('user-agent');
    var resobj = {ipaddress: clientip,
                  language: clientlan,
                  software: clientsoft};
    res.end(JSON.stringify(resobj));
    
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
  
})
