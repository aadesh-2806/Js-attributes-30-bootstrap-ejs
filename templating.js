const express = require('express');
const path = require('path');    //*
const app = express();

app.set("view engine" , "ejs")
app.set('views',path.join(__dirname , '/views'));     //*

/*
app.get('/',(req,res)=>{
    // res.send('hi');
    res.render("home.ejs");
})
*/

//if we move one level outside or out of EJS than we get an error type of 
//Error: Failed to lookup view "home.ejs" in views directory "D:\aadesh imp files\web development\JavaScript\nodejs\views"
//so we need to do is ----->//*    it works

app.get('/',(req,res)=>{
    // res.send('hi');
    res.render("home");
    //----->go to home.ejs
})

app.get('/rand' , (req,res) =>{
    const num = Math.floor(Math.random() * 10) +1;
    const cats = ["Blue" , "Rocket" ,"Monty" , "Winston" , "Stephene" ]
    res.render('random' , {num , cats})        //----->go to random.ejs      and there can use num as a var with value
    // if do {number : num}  than we pass num as number not num itself
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);      //----->takes data from data.json created
    res.render('subreddit' , {...data});          //----->go to subreddit.ejs
})

app.listen(3000, () => {
    console.log("LISTEN ON PORT");
})
/////////////////////process.cwd() ------> current path.

////////////////////////////////////////////////////////////express.static///////////////////////////////////////////////////////

app.use(express.static('public'))//----->is dir containing files like cs ejs

//so it takes values from other data files
//present them by using ejs file
//if anything to pass than pass by {expression}

//if using another dir to run this file itself thn to make the other sub files
//like subreddit,random,home etc  needs to be done by syntax line 6

//can do by bootstrap too