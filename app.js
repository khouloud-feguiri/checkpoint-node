

const fs = require("fs");

console.log("starting ...");



fs.writeFile('Welcome.txt', 'Hello node', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  fs.readFile("welcome.txt", function (err, data) {
	if (err) throw err;
	console.log(data); //buffer line
	console.log(data.toString());
	console.log("file is read successfully");
  });
  

console.log("finishing");
