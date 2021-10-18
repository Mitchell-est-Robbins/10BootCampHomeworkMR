//use miniproject 9/inquirer fs and classes 10/21 and 10/24
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./profiles/Employee');
const Manager = require('./profiles/Manager');
const Engineer = require('./profiles/Engineer');
const Intern = require('./profiles/Intern');

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
                choice: [
                    "Add a Manager",
                    "Add an Engineer",
                    "Add an Intern",                
                    "I have what I need, thanks!",  //ends it
                ]
            }
            //now a function or .then to  actually make the stuff... if statement === need to research that
        ])  .then (( response ) => {
        if (selection.teamBuilder9k === "Add a Manager"){
            addManager();
        } if (selection.teamBuilder9k === "Add an Engineer" ){
            addEngineer();
        } if (selection.teamBuilder9k ===  "Add an Intern"){
            addIntern();
        }else {
            teamBuilt();
        }
    })
}


function addManager () {
    inquirer
        .prompt([
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
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
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
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
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
            {
                type: 'input',
                name:'nameIntern',
                message: "What is the name of the intern"
            },
        ]).then ((response) =>{
            console.log(response); 
        })
}  
// I need to get the input into the template. 
//ends the question process and works the data... this will lead into the HTML bit
function teamBuilt ()

//figure out how to discern class, maybe add a question for which to add next?
//would you like to add an employee... manager/engineer/intern

//figure out how to capture the info perhaps in an array of team members

// make a function to loop through people to add them to the template literal

// make a function to call template literal to actually generate the HTML

// the template literal needs to be a card setup bootstrap style

//create a function to start the whole process. 
teamBuilder9k ();


//then create tests that prove this. Seek jest
// then pretty it up and maybe make it something cooler than manager/employee
//something D&D themed? 
