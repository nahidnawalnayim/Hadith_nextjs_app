const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
const db = new sqlite3.Database('dua_main.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Connected to sql database");
    }
})

app.get('/categories',async (req, res)=>{
    const query = `SELECT * FROM category`;
    
        db.all(query, [], (err, rows)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`Data from table category`);
                return res.status(201).json(rows)              
            }
        })
})
app.get('/duas',async (req, res)=>{
    const query = `SELECT * FROM dua`;
    
        db.all(query, [], (err, rows)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`Data from Dua category`);
                return res.status(201).json(rows)              
            }
        })
})
app.get('/subcategories',async (req, res)=>{
    const query = `SELECT * FROM sub_category`;
    
        db.all(query, [], (err, rows)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`Data from table Sub_category`);
                return res.status(201).json(rows)              
            }
        })
})


app.listen(4000, ()=>{
    console.log("server is running on port 4000");
})