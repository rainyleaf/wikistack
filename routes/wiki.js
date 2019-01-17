const express = require('express');
const wikiRouter = express.Router();
const {addPage} = require('../views');

wikiRouter.get('/add', (req, res) => {
    res.send(addPage());
});

// wikiRouter.get('/', async(req, res, next) =>{
//     try{
//         const allWiki = await wiki.findAll();
//     }catch(error){
//         {next(error)}
//     }   
// });
// wikiRouter.post('/', async(req, res) =>{
//    const newTitle = req.body.title;
//    const newContent = req.body.content;   
// });
// wikiRouter.get('/add', async())

wikiRouter.get('/', (req, res, next) =>{
    res.redirect('/wiki/placeholder');
});
// wikiRouter.get('/', (req, res, next) =>{
//     res.send('got to Post /wiki/');
// });
// wikiRouter.get('/add', (req, res, next) =>{
//     res.send('got to Get /add/wiki');
// });
module.exports = wikiRouter;
