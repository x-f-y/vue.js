const express = require("express")
const app = express()

app.use((request, response, next) => {
    console.log("有人请求服务器2了")
    next()
})

app.get("/cars", (request, response) => {
    const cars = [
        { id: "001", name: "奔驰", price: 199 },
        { id: "002", name: "马自达", price: 109 },
        { id: "003", name: "捷达", price: 120 },
    ]
    response.send(JSON.stringify(cars))
})

app.listen(5001, (err) => {
    if (!err) {
        console.log("express server2 running at http://localhost:5001/cars")
    }
})
