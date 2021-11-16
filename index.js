//use miniproject 9/inquirer fs and classes 10/21 and 10/24
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./profiles/Employee');
const Manager = require('./profiles/Manager');
const Engineer = require('./profiles/Engineer');
const Intern = require('./profiles/Intern');

const theTeam = []

// =============================================================================

const teamBuilder9k = () => {
   return inquirer.prompt([
            {
                type: 'list',
                name: 'teambuilder9ksetup',
                message: 'What human please?',
                choices: [                          //choices...
                    "Add a Manager",
                    "Add an Engineer",
                    "Add an Intern",                
                    "I have what I need, thanks!",  //ends it
                ]
            }
        
        ])  .then (( selection ) => {
            // console.log(selection)
          if(selection.teambuilder9ksetup === "Add a Manager"){ //small b builder.... that is 2 hours I'm never getting back
            addManager();
        } if (selection.teambuilder9ksetup === "Add an Engineer"){
            addEngineer();
        } if (selection.teambuilder9ksetup ===  "Add an Intern"){
            addIntern();
        } if (selection.teambuilder9ksetup === "I have what I need, thanks!"){
            teamBuilt(theTeam);
            // console.log (theTeam);
        }
    })
}

// ======================================================================

function addManager () {
    inquirer.prompt([
            {
                type: 'input',
                name:'nameMan',
                message: "What is the name of the Manager?"
            },
            {
                type: 'input',
                name:'idMan',
                message: "Input their ID"
            },
            {
                type: 'input',
                name:'emailMan',
                message: "Input their Email"
            },
            {
                type: 'input',
                name:'officeMan',
                message: "Input their Office Number"
            },
        ]).then ((response) =>{
            // console.log(response);
            const {nameMan, idMan, emailMan, officeMan } = response; 
            const manager = new Manager( nameMan, idMan, emailMan, officeMan);
            // console.log(manager)
            theTeam.push(manager);
            teamBuilder9k();
        })
} 

// ======================================================================

function addEngineer (){
    inquirer.prompt([
            {
                type: 'input',
                name:'nameEng',
                message: "What is the name of the Engineer?"
            },
            {
                type: 'input',
                name:'idEng',
                message: "Input their ID"
            },
            {
                type: 'input',
                name:'emailEng',
                message: "Input their Email"
            },
            {
                type: 'input',
                name:'githubEng',
                message: "Input their Github Name"
            },
        ]).then ((response) =>{
            // console.log(response);
            const {nameEng, idEng, emailEng, githubEng} = response;
            const engineer = new Engineer( nameEng, idEng, emailEng, githubEng);
            // console.log(engineer)
            theTeam.push(engineer);
            teamBuilder9k(); 
        })
}  

// ======================================================================

function addIntern (){
    inquirer.prompt([
            {
                type: 'input',
                name:'nameInt',
                message: "What is the name of the Intern?"
            },
            {
                type: 'input',
                name:'idInt',
                message: "Input their ID"
            },
            {
                type: 'input',
                name:'emailInt',
                message: "Input their Email"
            },
            {
                type: 'input',
                name:'schoolInt',
                message: "Input the school they are from"
            },
        ]).then ((response) =>{
            // console.log(response);
            const {nameInt, idInt, emailInt, schoolInt} = response;
            const intern = new Intern( nameInt, idInt, emailInt, schoolInt);
            // console.log(intern)
            theTeam.push(intern); 
            // console.log (theTeam) //it is going into the team, now to pull it out
            teamBuilder9k()
        })
    }  


//========= HTML ===================================================================================================================
    //got some help in this section from Ethan Cho, and William Renfroe 10-20-21
const teamBuilt= () => {
    // console.log(theTeam)
    const cardArray= [];
    theTeam.forEach (employee => {
        console.log("employee: " , employee )
         var cardTemp= 
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.id}</li>
                    <li class="list-group-item">${employee.email}</li>
                    <li class="list-group-item">${employee.role}</li>
                    <li class="list-group-item">${employee.special}</li>
                </ul>
        </div>
        </div>
        `;

        cardArray.push(cardTemp)
        
// console.log(cardTemp);
    })
   
   indexCreation (htmlGenerate (cardArray))
}


function htmlGenerate (Array) { 
    
    let temphtml =`<!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="./CSS/reset.css">
    <link rel="stylesheet" href="./CSS/style.css">
    
    <title>TB9K</title>
    
    </head>
    
    <body>
        <header class="jumbotron" id="backpic">
            <h1 class="display-3">TeamBuilder 9000</h1>
            <h2 class="lead">All your Human-Resource are belong to us</h2>
            
        </header>
        <div class="row">
        `
    
        
        Array.forEach((element) =>{
            temphtml += element 
            // return JSON.stringify(element)
            // console.log(element)
        })

        
        let temphtml2 = 
        `
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        
        </body>
        
        </html>
    
    `
    temphtml += temphtml2
    return temphtml
};


//------------------------to make HTML -----------------


function indexCreation (data) {
    fs.writeFile("index.html", `${data}`, (err)=> {
        err ? console.log(err) : console.log("Behold our works")
    })
}






//xxcreate a function to start the whole process.
teamBuilder9k ();
// console.log (theTeam);

// addIntern();
// addEngineer();
// addManager ();


//then create tests that prove this. Seek jest
// then pretty it up and maybe make it something cooler than manager/employee
//something D&D themed? 
