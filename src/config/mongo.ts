import "dotenv/config"
import { connect } from "mongoose";


async function dbConnection(): Promise<void> {

    const BD_URI = <string>process.env.BD_URI;
    await connect(BD_URI);
}

export default dbConnection;