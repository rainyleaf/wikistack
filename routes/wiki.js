const express = require('express');
const wikiRouter = express.Router();
/*
wikiRouter.get('/', async(req, res, next) =>{
    try{
        const allWiki = await wiki.findAll();
    }catch(error){
        {next(error)}
    }   
});
wikiRouter.post('/', async(req, res) =>{
   const newTitle = req.body.title;
   const newContent = req.body.content;   
});
wikiRouter.get('/add', async())
*/
wikiRouter.get('/', (req, res, next) =>{
    res.send('got to Get /wiki/');
});
wikiRouter.get('/', (req, res, next) =>{
    res.send('got to Post /wiki/');
});
wikiRouter.get('/add', (req, res, next) =>{
    res.send('got to Get /add/wiki');
});
module.exports = wikiRouter; 