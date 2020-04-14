const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateManager = require("./templates/generateManager");
const generateEngineer = require('./templates/generateEngineer');
const generateIntern = require('./templates/generateIntern');
const generateStart = require('./templates/generateStart');
const generateEnd = require('./templates/generateEnd');
let teamMembers=[];

const teamSize = [
    {
        type:"input",
        message: "How many engineers in team? ",
        name:"numEngie"
    },
    {
        type:"input",
        message: "how many interns in team? ",
        name:"numIntern"
    },
];
const managerQuestion = [
    {
        type:"input",
        message: "Please provide project manager's name: ",
        name:"managerName"
    },
    {
        type:"input",
        message: "Please provide project manager's ID numer: ",
        name:"idNumber"
    },
    {
        type:"input",
        message: "Please provide project manager's office number: ",
        name:"officeNumber"
    },
    {
        type:"input",
        message: "Please provide project manager's email: ",
        name:"emailAddress"
    },
];
const engineerQuestion = [
    {
        type:"input",
        message: "Please provide engineer's name: ",
        name:"engineerName"
    },
    {
        type:"input",
        message: "Please provide engineer's ID numer: ",
        name:"idNumber"
    },
    {
        type:"input",
        message: "Please provide engineer's GitHub username: ",
        name:"githubName"
    },
    {
        type:"input",
        message: "Please provide engineer's email: ",
        name:"emailAddress"
    },
];
const internQuestion = [
    {
        type:"input",
        message: "Please provide intern's name: ",
        name:"internName"
    },
    {
        type:"input",
        message: "Please provide intern's ID numer: ",
        name:"idNumber"
    },
    {
        type:"input",
        message: "Please provide intern's school: ",
        name:"schoolName"
    },
    {
        type:"input",
        message: "Please provide intern's email: ",
        name:"emailAddress"
    },
];

//now we simply write a function that takes an array as parameter and generate all the html text and set it in a variable, then we simply return such variable
function generateHTML(array){
    var s =generateStart();;
    array.forEach((obj)=>{
        if (obj instanceof Manager){
            s = s + generateManager(obj);
        }else if (obj instanceof Engineer){
            s = s + generateEngineer(obj);
        }else {
            s = s + generateIntern(obj);
        }
    })
    console.log(s);
    s = s + generateEnd();
    return s;
}



async function initi(){
    //get # of engineers and # of interns.
    let teamInfo = await inquirer.prompt(teamSize);
    var engies = parseInt(teamInfo.numEngie);
    var interns = parseInt(teamInfo.numIntern);
    
    //get manager information
    let managerInfo = await inquirer.prompt(managerQuestion);
    // constructor(name, id, email)
    teamMembers.push(new Manager(managerInfo.managerName, managerInfo.idNumber, managerInfo.emailAddress, managerInfo.officeNumber));
    //console.log(teamMembers);

    for (var i = 1; i <= engies; i++){
        console.log("Info for engineer " + i + ": ");
        //constructor(name, id, email, userType)
        let engieInfo = await inquirer.prompt(engineerQuestion);
        teamMembers.push(new Engineer(engieInfo.engineerName, engieInfo.idNumber, engieInfo.emailAddress, engieInfo.githubName));
    }

    for (var i = 1; i <= interns; i++){
        console.log("Info for intern " + i + ": ");
        //constructor(name, id, email, school)
        let internInfo = await inquirer.prompt(internQuestion);
        teamMembers.push(new Intern(internInfo.internName, internInfo.idNumber, internInfo.emailAddress, internInfo.schoolName))
    }
    console.log(teamMembers);
    let html = generateHTML(teamMembers);
    fs.writeFile('index.html', html, (err)=>{
        if(err){
            console.log(err);
        }else {
            console.log('success');
        }
    })
    
}

initi();

/*Note inquirer returns a promose, not after the then!!
function getTotalTeamMembers(){
    inquirer.prompt(teamSize)
    .then((response)=>{
        return response;
    });
}*/
