//use miniproject 9/inquirer fs and classes 10/21 and 10/24
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./profiles/Employee');
const Manager = require('./profiles/Manager');
const Engineer = require('./profiles/Engineer');
const Intern = require('./profiles/Intern');

const TeamBuilt
//create a html base and css for everything like in the miniproject

//xx create class for the employee that will serve as base. Then make classes for others
//xx per the screenshot in live class, we need manager, enginer, intern

//make an array of questions for the info that gets taken

function teamBuilder9k() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'teambuilder9k',
                message: 'What human please?',
                choices: [                          //choices...
                    "Add a Manager",
                    "Add an Engineer",
                    "Add an Intern",                
                    "I have what I need, thanks!",  //ends it
                ]
            }
            //now a function or .then to  actually make the stuff... if statement === need to research that
        ])  .then (( selection ) => {
            console.log(selection)
          if(selection.teamBuilder9k === "Add a Manager"){
            addManager();
        } if (selection.teamBuilder9k === "Add an Engineer"){
            addEngineer();
        } if (selection.teamBuilder9k ===  "Add an Intern"){
            addIntern();
        }if (selection.teamBuilder9k === "I have what I need, thanks!")  {
            teamBuilt();
        }
    })
}


function addManager () {
    inquirer
        .prompt([
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
                name:'githubMan',
                message: "Input their Github Name"
            },
        ]).then ((response) =>{
            console.log(response); 
        })
} 
function addEngineer(){
    inquirer
        .prompt([
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
            console.log(response); 
        })
}  

function addIntern  (){
    inquirer
        .prompt([
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
            console.log(response); 
        })
}  
// I need to get the input into the template. 
//ends the question process and works the data... this will lead into the HTML bit
//-----------------------------------------------------------------
// function teamBuilt ();


//xx figure out how to discern class, maybe add a question for which to add next?
//xx would you like to add an employee... manager/engineer/intern

//figure out how to capture the info perhaps in an array of team members

// make a function to loop through people to add them to the template literal

// make a function to call template literal to actually generate the HTML

// the template literal needs to be a card setup bootstrap style

//create a function to start the whole process. 

// addIntern();
// addEngineer();
// addManager ();
teamBuilder9k ();


//then create tests that prove this. Seek jest
// then pretty it up and maybe make it something cooler than manager/employee
//something D&D themed? 
