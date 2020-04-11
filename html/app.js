const path = require('path');
const express = require('express');


const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
    console.log(`Server running at ${port}!`);
    console.log(`http://localhost:${port}`);
});
