const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('someone is visiting server3')
    next()
})

// ����fetch����
app.get('/fetch',(req,res) => {
    const data = {
	name: 'zs',
	age: 20
    }
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(JSON.stringify(data))
})

// ����jsonp
app.get('/jsonp',(req,res) => {
    // ��ȡǰ�˷������Ļص�����������
    const callback = req.query.callback
    const data = {
	name: 'zs',
	age: 20
    }
    res.send(`${callback}(${JSON.stringify(data)})`)
})


app.listen(2000,()=>{
    console.log('express server running at http://127.0.0.1:2000')
})