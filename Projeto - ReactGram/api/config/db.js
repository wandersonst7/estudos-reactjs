const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// connection
const conn = async () => {
    try{

        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.hyunb21.mongodb.net/?retryWrites=true&w=majority`)

        console.log("Conectou ao banco")

        return dbConn;

    }catch(err){
        console.log(err)
    }
}

conn();

module.exports = conn;