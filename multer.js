// npm install multer
// first method of multer : DiskStorage method
const exp=require('express')
const app=exp()
const path=require('path')
const multer=require('multer')
var sp=path.join(__dirname,'../public')
var store=multer.diskStorage({
    destination:'myFolder',// this folder create in src
    filename:function(req,file,cb){
        cb(null,file.originalname)
       console.log(file)
    }
    
})
var upload=multer({storage:store}).single('mypic')
app.use(exp.static(sp,{index:'multer.html'}))
app.post('/uploadfile',upload,(req,res)=>{
    if(req.file){
        res.send('<h1> your file is send in :'+req.file.destination+' with name as:'+req.file.originalname+'</h1>')
    }

})
app.listen(9888)