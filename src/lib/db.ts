import mongoose from "mongoose";


let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn:null,promise:null}
}

const connectDb = async ()=>{
    if(cached.conn){
        return cached.conn
    }
    const mongoDbUrl = process.env.MONGODB_URL
    if(!mongoDbUrl){
        throw new Error("DB Error: MONGODB_URL environment variable is not defined.") 
    }
    if(!cached.promise){
        cached.promise = mongoose.connect(mongoDbUrl).then((conn)=>conn.connection)
    }
    try {
        const conn = await cached.promise
        cached.conn = conn
        return conn
    } catch (error) {
        cached.promise = null
        console.log(error)
        throw error
    }
}

export default connectDb