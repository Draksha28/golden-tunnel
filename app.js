const express = require('express')
const app = express()
const port = 8008
const path = require('path')
app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname+'/public')));
/*app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))*/

/*
* Route to render HTML Page
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'index.html'));
})


app.listen(port, () => console.log(`App listening on port ${port}!`))


