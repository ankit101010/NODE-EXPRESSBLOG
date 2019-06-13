 const express = require('express')
 const app = new express()
 const path = require('path')



app.use(express.static('public'))

app.get('/',(req ,res)=>{

	 res.sendFile(path.resolve(__dirname,'pages/index.html'))
})


 app.listen(2211,()=>{

 	console.log("app is runing on port number 2211")
 })
