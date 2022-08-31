
//exemple de chaine de connection à mongodb
// "mongodb://username:password@mongo:27017/users"

import mongoose from "mongoose"

const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const USER_DATABASE = process.env.USER_DATABASE

const URI: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}`

const clientOptions = {
    authSource: "admin",
    useNewUrlParser   : true,
    dbName            : USER_DATABASE
};
export const setMongoConnection = (): void => {
    mongoose.connect(URI, clientOptions).then(() => console.log("connecté à la db"))
}