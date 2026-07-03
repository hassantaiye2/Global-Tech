require("dotenv").config()
const port = process.env.PORT
const mongodbPassword = process.env.MONGODB_PASSWORD
module.exports = {
    port,
    mongodbPassword
}