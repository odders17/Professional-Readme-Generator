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
  .then((response) => {
       console.log("Success!",response);

  const code = `
# Project Name
* **Title:** ${response.projectname}
    
## Installation
* **Instructions for Installation:** ${response.installation}
    
## Files
    
* **The Included Files:**  ${response.files}
   
## Contributing
   
* **Repository Link for Live Page:** ${response.project}
    
## Contact Information
    
* **User Link for Github:** ${response.account}
`
fs.writeFile("README.md", code, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });