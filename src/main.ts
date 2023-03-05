//const express = require('express');
import express from 'express';
import {router as mainRouter} from './routes/mainRouter';

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', mainRouter)
// app.get('/', (req:any, res:any) => {
//     res.render('index')
// });
// app.get('/about', (req:any, res:any) => {
//     res.send("This is about")
// }); 
// app.get('/user/:username', (req, res) => {
//     // res.send(`This is user: ${req.params.username}, id: ${req.params.id}`)
//     res.render('index', {
//         user: req.params.username,
//         hobbies: ['fotball', 'music', 'games']
//     })
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server Started at: http://localhost:'+PORT)
});
