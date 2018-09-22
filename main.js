const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};




let outputString = '';
const makeMaker = () => {
    outputString = '';
    // let codeMaker = sentence.charCodeAt(0);
    let sentence = document.getElementById('inputElem').value;
for (let i = 0; i < sentence.length; i++) {
    outputString += sentence.charCodeAt(i) + ",";
} 
printToDom(outputString, 'emptySpace');
}


// delimeter, write some sort of logic function such as an if or else code that stops the last comma 


let submitButton = document.getElementById("submitMe");
submitButton.addEventListener('click', function() {makeMaker()});
