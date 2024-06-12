// upload multiple file 

const exp=require('express')
const app=exp()
const path=require('path')
const multer=require('multer')
var sp=path.join(__dirname,'../public')
var store=multer.diskStorage({
    destination:'multiple',// this folder create in src
    filename:function(req,file,cb){
        cb(null,file.filename+"_"+Date.now()+".doc")
       
    }
    
})
var upload=multer({storage:store}).array('mypic',5)
app.use(exp.static(sp,{index:'mul_multer.html'}))
app.post('/uploadfile',upload,(req,res)=>{
    if(req.files){
        for(i of req.files){
        res.write('<h1> your file is send in  with name as:'+JSON.stringify(i.originalname)+'</h1>')
    }
res.send()}

})
app.listen(9889)