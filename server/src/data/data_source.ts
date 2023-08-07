import { DataSource } from "typeorm"
import Config from '../config';
import { Exam } from "./entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: Config.DB.U_toliara.host,
    port: Config.DB.U_toliara.port,
    username: Config.DB.U_toliara.user,
    password: Config.DB.U_toliara.password,
    database: Config.DB.U_toliara.name,
    synchronize: true,
    //logging: true,
    entities: [Exam],
    subscribers: [],
    migrations: [],
})