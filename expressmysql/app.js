const express =require("express")
const mysql = require("mysql2")
const bodyParser=require("body-parser")


const app=express()
app.use(bodyParser.json())
const conn=mysql.createConnection({"host":"mysqldb",
    port:3306,
    user:"root",
    password:"root",
    database:"aws"
})
conn.connect()
app.get("/api/emps",(req,res)=>{
    conn.query("select * from emp",(err,result)=>{
        console.log(result)
        console.log(err)
        return res.json(result)
    })
})

app.listen(3000)