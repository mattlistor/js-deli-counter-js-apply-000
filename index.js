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
}

var katzDeliLine = [];
 
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
nowServing(katzDeliLine); // "Currently serving Ada."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"



