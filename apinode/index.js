const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let user = [];
let bookroom = [];

app.post('/create_a_room', (req, res) => {
    user.push(req.body);
    console.log("Admin LOGIN for room availablity")
    res.json({
        message: "Admin LOGIN for room availablity"
    })
});

app.post('/Book_Room', (req, res) => {
    bookroom.push(req.body);
    console.log("Admin LOGIN for rooms booked")
    res.json({
        message: "Admin LOGIN for rooms booked"
    })
});

app.get('/List_all_rooms_with_Booked_Data', (req, res) => {
    let roomdetails = bookroom.map((data) => {
        return {
            CustomerName: data.CustomerName,
            Date: data.Date,
            StartTime: data.StartTime,
            EndTime: data.EndTime,
            RoomID: data.RoomID
        }
    })
    res.json(roomdetails);
});

app.get('/List_all_customers_with_Booked_Data', (req, res) => {
    let allusers = bookroom.map((data) => {
        return {
            CustomerName: data.CustomerName,
            RoomID: data.RoomID
        };
    });
    res.json(allusers);
});

app.listen(process.env.PORT || port, () => {
    console.log('Server listening')
})