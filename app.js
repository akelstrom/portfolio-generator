const inquirer = require('inquirer')

inquirer
.prompt([
{
    type:'input',
    name: 'name',
    message: 'what is your name?'
}
])
.then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage


// fs.writeFile('./index.html', pageHTML , err => {
//     if (err) throw (err);

//     console.log('Portfolio complete! Checkout index.html to see the output!');
// });