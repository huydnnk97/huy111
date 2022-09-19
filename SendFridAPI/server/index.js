// const path = require('path');
const express = require('express');

require("dotenv").config();
var cors = require('cors')
const sgMail=require("@sendgrid/mail");

sgMail.setApiKey("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");


const app = express();
app.use(express.json());
app.use(cors())



// app.use(express.static(path.join(__dirname, 'htmlandcss')));
let sendMail=async(msg)=>{
    try{
        await sgMail.send(msg);
        console.log("Welcome");
    }catch(error){
        console.error(error);
        if(error.response){
            console.error(error.response.body);
        }
    }
}
app.post('/signup', (req, res) => {
    
    console.log(req.body.email)
    sendMail({
        to:req.body.email,
        from:"quochuyphamnguyen@gmail.com",
        subject:"duoc di ma ",
        text:"kjaida"
    })
    
    // res.redirect('/success.html') 
    
    
})




app.listen(7749, console.log(`Server started on 2805`));
