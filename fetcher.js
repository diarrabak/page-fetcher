//file and request packages from npm
const fs = require("fs");
const request = require("request");

//Get the all the arguments
const args = process.argv;

//console.log(args);
//keep only the two parameters (position 2 and 3) from the args array
const parameters = args.slice(2);

const url = parameters[0]; //URL
const fileName = parameters[1]; //Local file path and name

request(url, (error, response, body) => {
  //If all fine
  if (response && response.statusCode === 200) {
    //console.log(response.statusCode);
    fs.writeFile(fileName, body, (err) => {
      //Write the body to the local file
      if (err) console.log(err);
      else {
        console.log(
          `Downloaded and saved ${fs.statSync(fileName).size} bytes to ${fileName}`
        );
      }
    });
  } else {
    console.log("error:", error);
  }
});
