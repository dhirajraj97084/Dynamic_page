const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express();

const menu={
    name:'dhiraj kumar tiwati',
    age:20,
    skills: ['Data Mining', 'BlockChain Dev', 'node.js']
}

const partialpath=path.join(__dirname, '../views/partial');

app.set('view engine','hbs');
hbs.registerPartials(partialpath);

app.get('/' ,(req,res)=>{
    res.render('index' , {menu:menu});
})
app.get("/about",(req,res)=>{
    res.render( 'abot');
})

app.get('*',(req,res)=>{
    res.render('404' ,{
        errorpage:"opps page sould'n be fount"
    })
})

app.listen(8082,()=>{
    console.log('your application to good');
})