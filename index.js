function takeANumber(lineArray, newPerson){
  lineArray.push(newPerson);
  var message = `Welcome, ${newPerson}. You are number ${lineArray.length} in line.` //You have to use `grave accents` NOT 'single quotes'
  console.log(message);
  return message;
}

function nowServing(lineArray){
  if (lineArray.length === 0){return "There is nobody waiting to be served!"}
  else {
    var message = `Currently serving ${lineArray.shift()}.`;
    return message;
  }
}

function currentLine(lineArray){
  if (lineArray.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var spontInLine = 0;
    var message = "";
    while(spotInLine < lineArray.length){
      message = " " + (spotInLine+1) + ". " + lineArray[spotInLine] +","
      spotInLine++;
    }
    message = "The line is currently:" + message;
    return message;
}

