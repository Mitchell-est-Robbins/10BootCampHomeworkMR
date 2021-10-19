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
          if(selection.teambuilder9ksetup === "Add a Manager"){ //small b builder.... that is 2 hours I'm never getting back
            addManager();
        } if (selection.teambuilder9ksetup === "Add an Engineer"){
            addEngineer();
        } if (selection.teambuilder9ksetup ===  "Add an Intern"){
            addIntern();
        // } if (selection.teambuilder9ksetup === "I have what I need, thanks!")  {
        //     teamBuilt();
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
            console.log(manager)
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
            console.log(engineer)
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
            console.log(intern)
            theTeam.push(intern); 
            // console.log (theTeam) //it is going into the team, now to pull it out
            teamBuilder9k()
        })
}  
// I need to get the input into the template. 
//ends the question process and works the data... this will lead into the HTML bit
//-----------------------------------------------------------------

// const teamBuilt= () => {
//  for (theTeam) // like miniproject
// }



// //-------------------------------------------------------------------
// //generates the HTML and plugs the stuff in/ 
//===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//maybe appending the cards. like have it generate then have the other stuff add to it? 


// function createCards (){

// }

//xx figure out how to discern class, maybe add a question for which to add next?
//xx would you like to add an employee... manager/engineer/intern

//xx figure out how to capture the info perhaps in an array of team members

//xx make a function to loop through people to add them to the template literal

//xx make a function to call template literal to actually generate the HTML

// the template literal needs to be a card setup bootstrap style

//xxcreate a function to start the whole process. 
teamBuilder9k ();

// addIntern();
// addEngineer();
// addManager ();


//then create tests that prove this. Seek jest
// then pretty it up and maybe make it something cooler than manager/employee
//something D&D themed? 
