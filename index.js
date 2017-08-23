const express = require('express');
let app = express();
app.use(express.static('public'));

app.listen(80, function() {
    console.log('server listening to port 80');
});