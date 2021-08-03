const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectname",
    },
    {
      type: "input",
      message: "Your project description?",
      name: "description",
    },
    {
        type: "input",
        message: "What files did you use in this project?",
        name: "files",
      },
      {
        type: "input",
        message: "What is the Link to the project?",
        name: "project",
      },
      {
        type: "input",
        message: "What is your account information for Github",
        name: "account",
      },
  ])
  .then((response) =>
    response.confirm === response.account
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );