function takeANumber(lineArray, newPerson){
  lineArray.push(newPerson);
  var message = `Welcome, ${newPerson}. You are number ${lineArray.length} in line.` //You have to use `grave accents` NOT 'single quotes'
  console.log(message);
  return message;
}



