
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const ejs = require('ejs')
const exressSession = require('express-session')
const flash = require('connect-flash') 


app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.set('view engine' , 'ejs')


const db = mysql.createConnection({
  user:"myname",
  host:"localhost",
  password:"",
  database:"projecttemp"
})
app.get('/auth',  (req ,res ) => {
  db.query("SELECT * FROM auth", (err , result) => {
    if (err)
    {
      console.log(err)
    }
    else
    {
      res.send(result)
    }
  })
})

app.post('/register'), (req , res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  db.query("INSERT INTO auth (name, email, password) VALUES(?,?,?)" , 
  [name,email,password],
  (err , result) => {
    if(err){
      console.log(err)
    }
    else{
      res.send("Register Success")
    }
  }
  )
}

app.listen('3001', () => {
  console.log('Server is running on port 3001')
})

