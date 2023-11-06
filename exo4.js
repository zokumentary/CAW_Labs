const fs = require('fs');


//1 - Write an exo4.js program that creates a file (.txt) and adds to it the text passed as a parameter.

// const textToAdd = process.argv[2];
// fs.writeFile('f.txt', textToAdd, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

//2 - Modify the previous question to use the first parameter passed as the
// name of the destination file.

// const fileName = process.argv[2];
// const textToAdd = process.argv[3];

// fs.writeFile(fileName, textToAdd, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });
    
//3-Add to question 2 the display on the console of the contents of the file created.


const fileName = process.argv[2];
const textToAdd = process.argv[3];

fs.writeFile(fileName, textToAdd, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
