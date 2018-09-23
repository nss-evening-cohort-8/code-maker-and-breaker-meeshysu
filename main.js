const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};




let outputString = '';
const makeMaker = () => {
    outputString = '';
    // let codeMaker = sentence.charCodeAt(0);
    let sentence = document.getElementById('inputElem').value;
    let sentenceSplit = sentence.split(' ');
for (let i = 0; i < sentence.length; i++) {
    outputString = sentence.charCodeAt(i) + ",";
    printToDom(outputString, 'emptySpace');
} 
}



let submitButton = document.getElementById("submitMe");
submitButton.addEventListener('click', function() {makeMaker()});




