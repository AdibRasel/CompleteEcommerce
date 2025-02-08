//Basic Lib Import
const express = require("express");
// const Router = require("./Src/Router/Router");
const App = new express();
const BodyParser = require("body-parser");



//Env file config
const DoteEnv = require("dotenv")

DoteEnv.config({ path: "./Config.env" })
const MongoDBDatabaseUser = process.env.MongoDBDatabaseUser
const MongoDBDatabasePassword = process.env.MongoDBDatabasePassword




// Security Middleware Lib Import
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet")
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Configuration
const Mongose = require("mongoose");

// Security Middleware Implement 
App.use(Cors())
App.use(Helmet())
App.use(MongoSanitize())
App.use(Xss())
App.use(Hpp())


App.use(express.json({ limit: '20mb' }));
App.use(express.urlencoded({ limit: '20mb' }))



// Body Parser Implement 
App.use(BodyParser.json())





// Request Rate Limite 
const Limiter = RateLimiter(
    {
        windowMs: 15 * 60 * 1000, // 15 Minute
        max: 3000 // 3000 request
    }
)


App.use(Limiter)



// Mongo DB Database Connection 
// const UriOne = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/AdibRasel";
const UriOne = "mongodb+srv://" + MongoDBDatabaseUser + ":" + MongoDBDatabasePassword + "@portfolio.n4omp.mongodb.net/Portfolio";
const UriTwo = "mongodb://127.0.0.1:27017/ShahaMiniBazar";
// mongodb+srv://Rasal_Hossain:<password>@cluster0.u9f9cje.mongodb.net/


// Mongose connection 
//=====================
Mongose.connect(UriTwo) // Adjust the connection string as needed
    .then(() => {
        console.log("Successfuly Connected to MongoDB...");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });








// API Create, Or Routing Implement
// App.use("/api/v1", Router)


// Undefine Route Or Undefine API 
App.use("*", (req, res) => {
    res.status(404)
    res.json(
        {
            Status: "Not Found",
            Data: "Undefine Route Or Rong API"
        }
    )
})



module.exports = App;