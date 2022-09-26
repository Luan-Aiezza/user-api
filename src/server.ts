import express from "express"
import mongoose from "mongoose"
import router from "./routes"

const app = express()

app.use(express.json())
app.use(router)

mongoose
  .connect(
    "mongodb+srv://<user>:<password>@cluster0.oqebsxe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("MongoDB Connection Succeeded!")
  })
  .catch((err) => {
    console.log("Error in Db connection", err)
  })

app.listen(3333)
