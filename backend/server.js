// Brad Traversy tutorial series for MERN full-stack goals app
// first video, get the REST API, second video, authentication, then a dashboard for goals, front end he's wanting to use Redux and Redux toolkit, smaller version of React Ticket application full 2022 course
const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware") 
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./routes/goalRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is listening on port ${port}`))


//left off at 33:39 out of 57:33 Brad Traversy APIs tutorial first of four videos in MERN goals setting app project