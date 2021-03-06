const express = require('express')
const app = express()
const port = 3003

const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {                       
    res.sendFile(path.join(__dirname, 'dist/index.html'));                               
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
