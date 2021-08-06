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
      message: "What is the application Requirements?",
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
      {
        type: "input",
        message: "What is your link to Screencastify video",
        name: "video",
      },
  ])
  .then((response) => {
       console.log("Success!",response);

  const code = `
# Project Name
* **Title:** ${response.projectname}
    
## Application Requirements
* **The Application Criteria:** ${response.description}
    
## Files
    
* **The Included Files:**  ${response.files}
   
## Contributing
   
* **Repository Link for Live Page:** ${response.project}
    
## Contact Information
    
* **User Link for Github:** ${response.account}

* **User Link for Screencastify video:** ${response.video}
`
fs.writeFile("README.md", code, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });