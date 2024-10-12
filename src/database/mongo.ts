import { connect } from "mongoose";
// mongodb://localhost:27017/   
const initDatabase = async (url:string) =>{
    try {
        await connect(url);
        console.log("connected to database with success");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export {initDatabase}