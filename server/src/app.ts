import express from "express"
import { Express } from "express"
import cors from 'cors'
import "reflect-metadata"
import {AppDataSource} from "./data"
import authenticationMiddleware from "./middlewares"


export default function createApp(){
    const app:Express = express()
    /**creation instance serveur node express */
    configureDataBase()
    configurationApp(app)
    configureRoute(app)

    return app
}


function configurationApp(app:Express){
    app.use(cors({
        origin:"*"
    }))
    app.use(express.json())
    /**Mise en place de middlewares de securité */
    app.use(authenticationMiddleware)
}



function configureDataBase(){
    /**Configuration base de donne */
    AppDataSource.initialize()
    .then(()=>{
        console.log("database Ok ....");
        
    })
    .catch((error)=>{
        console.log(`*** ${error}`);
        
    })
}

import {ExamRoute} from "./routes"


function configureRoute(app:Express){
    /**Configuration route */
    const examRoute = new ExamRoute()

    app.use("/api",examRoute.getRouter())
}
