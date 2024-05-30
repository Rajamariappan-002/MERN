const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.sendFile("C:\\Users\\raji7\\OneDrive\\Desktop\\StudentGrading\\index.html");
});

app.post("/getgrades", (req, res) => {
    var mark1 = req.body.mark1;
    var mark2 = req.body.mark2;
    var mark3 = req.body.mark3;
    var mark4 = req.body.mark4;
    var mark5 = req.body.mark5;
    var rollno = req.body.rollno;

    var gpa = (mark1 * 0.02) + (mark2 * 0.02) + (mark3 * 0.02) + (mark4 * 0.02) + (mark5 * 0.02);

    res.send(`<center><h2>Roll NO: ${rollno}</h2></center><br><center><h3>GPA: ${gpa}</h3></center>`);
});

app.listen(3005, () => {
    console.log("Server is listening on port 3005");
});
