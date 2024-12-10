const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();

// MIDDLEWARE

app.use(cors({
    origin: ["https://kitchenstories-ten.vercel.app"],
    methods: ["POST", "GET", "PUT" ,"DELETE"],    
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// MONGODB CONNECTION     

const dbUrl = process.env.MONGODB_URL 

mongoose.connect(dbUrl)
.then(() => console.log("Connected to the database!"))

// IMPORT ROUTES

const UserRoute = require("./Routes/UserRoute.js");
const RecipeRoute = require("./Routes/RecipeRoute.js"); 
const FavouriteRoute = require("./Routes/FavouritesRoute.js"); 

app.use("/Users", UserRoute);
app.use("/Recipe", RecipeRoute);
app.use("/Favourites", FavouriteRoute);   

app.listen(4000)