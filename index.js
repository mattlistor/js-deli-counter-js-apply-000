function takeANumber(lineArray, newPerson){
  lineArray.push(newPerson);
  var message = "Welcome, ${newPerson}$$$. You are number ${lineArray.length} in line";
  console.log(message);
  return message;
}