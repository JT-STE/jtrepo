
const express = require('express');
const app = express();
const port = 80;

//Loads the handlebars module
const handlebars = require('express-handlebars');


//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Sets handlebars configurations (we will go through them later on)
/*
app.engine('hbs', handlebars.engine({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
}));
*/

app.engine('handlebars', handlebars.engine({
defaultLayout: 'index'
}));


console.log(`Dir= ${__dirname}`)
app.use(express.static('images'))


textlist = [];
textlist.push("Logic will get you from A to B. Imagination will take you everywhere.");
textlist.push("There are 10 kinds of people. Those who know binary and those who don't.");
textlist.push("There are two ways of constructing a software design. One way is to make it");
textlist.push("so simple that there are obviously no deficiencies and the other is to make");
textlist.push("it so complicated that there are no obvious deficiencies.");
textlist.push("It's not that I'm so smart, it's just that I stay with problems longer.");
textlist.push("It is pitch dark. You are likely to be eaten by a grue.");

giturl = "https://github.com/JT-STE/jtrepo.git";

const quotelist = () => textlist[
Math.floor( ( Math.random() * textlist.length ) + 0 )
]
console.log(quotelist())

/*
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('worksheet', {layout : 'index', quotelist });
});
*/
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('worksheet', { quotelist });
});


app.listen(port, () => console.log(`App listening to port ${port}`));



