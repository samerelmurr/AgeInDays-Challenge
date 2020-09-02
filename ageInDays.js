//Age in days

function ageInYears(){
    var ageInYears = prompt("Your age in years please: ");
    var ageInDays = ageInYears * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDays + " days old.");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('textBoxResult').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
