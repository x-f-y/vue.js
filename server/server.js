const express = require("express")
// 这个包是用来解决history模式下页面刷新404的问题
const history = require("connect-history-api-fallback")
const app = express()

app.use(history()) // 该行代码必须在对外提供静态资源之前
app.use(express.static(__dirname + "/static"))

app.get("/person", (request, response) => {
    response.send(
        JSON.stringify({
            name: "tom",
            age: 18,
        })
    )
})

app.listen(5006, (err) => {
    if (!err) console.log("express server is running at http://127.0.0.1:5006")
})
