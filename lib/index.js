const fs = require('fs');
const dictInt = () => {

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  console.log("Welcome to the Node Dictionary Reader!");
  console.log("Enter 'q' to quit");

  let path = '../data/';
  let dictArray = [];
  fs.readdir(path, (err, data) => {
    if(err) {
     throw err;
   }
    dictArray = data;
  });

  console.log("Select Dictionary");
for(i = 0; i < dictArray.length; i++){
  console.log(`${i + 1} dictArray[i]`)
}
  var onData = input => {
    input = input.trim();

    if (input === 'q') {
      process.stdin.pause();
      process.stdin.removeListener('data', onData);
      process.exit();
    } else if(parseInt(input).isInteger() && parseInt(input) < dictArray.length - 1){
      fs.readFile(`${path}${dictArray[parseInt(input)].name}`);
      // All other input is invalid
    }
      else{
      showMessage(`Invalid: ${data}`);
    }
}








};

dictInt();
/*
process.stdin.resume();
  process.stdin.setEncoding('utf8');

  // Inline function to handle
  // message output
  var showMessage = err => {
    console.log('State one');
    console.log('Type "next" to continue');
    if (err) {
      console.error(err);
    }
  };

  // Display message
  showMessage();

  // Handler for STDIN data
  // event
  var onData = data => {
    data = data.trim();

    // If user input "next"
    // let's go to the next
    // state
    if (data === 'next') {
      process.stdin.pause();
      process.stdin.removeListener('data', onData);
      two();
      // ----------------------------------------
      // Go to next view here
      // ----------------------------------------
    } else {
      // All other input is invalid
      showMessage(`Invalid: ${data}`);
    }
  };

  // Set the listener
  process.stdin.on('data', onData);
}

let two = () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  // Inline function to handle
  // message output
  var showMessage = err => {
    console.log('State two');
    console.log('Type "next" to continue');
    if (err) {
      console.error(err);
    }
  };

  // Display message
  showMessage();

  // Handler for STDIN data
  // event
  var onData = data => {
    data = data.trim();
    */