import express from "express";
import  dotenv from "dotenv";
dotenv.config();

import value from "./config/serverConfig.js"

console.log(value.PORT)

const PORT = value.PORT;


const setupAndStartServer = async() =>{

    const app = express();
    

    app.listen(PORT,()=>{
        console.log(`Server started ar port ${PORT}`)
        
    })
}
setupAndStartServer();


