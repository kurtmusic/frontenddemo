var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')
var path = require('path')

var storage = multer.diskStorage({
	destination: function (req, file, cb){
	cb(null, __dirname + '/uploads')
	},
	filename: function (req, file, cb){
	cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage })
var app = express()

app.use(express.static(path.join(__dirname, 'public')))

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:true}) 


app.get('/', (req,res) => {
  	res.sendFile(__dirname + "/index.html")
})

app.get('/addcontent', (req,res) => {
    res.sendFile(__dirname + "/addcontent.html")
})

app.get('/category', (req,res) => {
    res.sendFile(__dirname + "/category.html")
})

app.get('/content', (req,res) => {
    res.sendFile(__dirname + "/content.html")
})

app.get('/empty', (req,res) => {
    res.sendFile(__dirname + "/empty.html")
})

app.get('/homepage', (req,res) => {
    res.sendFile(__dirname + "/homepage.html")
})

app.get('/repository', (req,res) => {
    res.sendFile(__dirname + "/repository.html")
})

app.get('/rules', (req,res) => {
    res.sendFile(__dirname + "/rules.html")
})

app.get('/search', (req,res) => {
    res.sendFile(__dirname + "/search.html")
})



app.listen(3000, () => {
	console.log(`example app listening at localhost ${3000}`)
})

