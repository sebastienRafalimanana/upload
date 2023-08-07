import dotenv from 'dotenv'

dotenv.config();
const Config = {
    /**Tous les configuration de l'application */
    'PORT':process.env.SERVER_PORT,

    /**Securite */
    'SECURE_KEY': process.env.SERVER_SECURE_KEY,

    /**Base de données */
    "DB":{
        "U_toliara":{
            "host":process.env.DB_HOST,
            "port":parseInt(process.env.DB_PORT || "3036"),
            "user":process.env.DB_USER,
            "password":process.env.DB_PASSWORD,
            "name":process.env.DB_NAME
        }

    }

}

export default Config