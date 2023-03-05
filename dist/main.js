"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
const express_1 = __importDefault(require("express"));
const mainRouter_1 = require("./routes/mainRouter");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
app.use('/', mainRouter_1.router);
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
    console.log('Server Started at: http://localhost:' + PORT);
});
//# sourceMappingURL=main.js.map