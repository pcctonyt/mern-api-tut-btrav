// Brad Traversy tutorial series for MERN full-stack goals app
// first video, get the REST API, second video, authentication, then a dashboard for goals, front end he's wanting to use Redux and Redux toolkit, smaller version of React Ticket application full 2022 course
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware") 
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is listening on port ${port}`))


//finished 1st video 57:33 out of 57:33 (1st video completed) Brad Traversy APIs tutorial first of four videos in MERN goals setting app project
//start second video (JWT Authentication 23:54 out of 52:28) - Learn the MERN Stack - JWT Authentication Brad Traversy second of four total videos