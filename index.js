import { Express } from "express";
import {MongoClient} from "mongodb";
import {dotenv} from "dotenv";
import {bcrypt} from "bcrypt";
import { response } from "express";
import {cors} from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const MONGO_URL= process.env.MONGO_URL;
async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB is connected");
    return client;
}
