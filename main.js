const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};




// let outputString = '';
// const makeMaker = () => {
//     outputString = '';
//     // let codeMaker = sentence.charCodeAt(0);
//     let sentence = document.getElementById('inputElem').value;
//     let sentenceSplit = sentence.split(' ');
// for (let i = 0; i < sentenceSplit.length; i++) {
//     outputString = sentenceSplit.charCodeAt(i) + ",";
//     printToDom(outputString, 'emptySpace');
// } 
// }

let outputString = '';
const makeMaker = () => {
    outputString = '';
    // let codeMaker = sentence.charCodeAt(0);
    let sentence = document.getElementById('inputElem').value;
    let sentenceSplit = sentence.split(' ');
for (let i = 0; i < sentence.length; i++) {

    outputString = sentence.charCodeAt(i) + ",";

} 
printToDom(outputString, 'emptySpace');
}

const breakBreaker = () => {
    sentenceString = ',';
    let sentence = document.getElementById('inputElem2').value;
    let sentenceBreaker = sentence.split(',');
    for (let i = 0; i < sentenceBreaker.length; i++) {
        sentenceString = String.fromCharCode(sentenceBreaker[i]);
        printToDom(sentenceString, 'alsoEmptySpace');
    }
}


let submitButton = document.getElementById("submitMe");
submitButton.addEventListener('click', function() {makeMaker()});

let submitButtonToo = document.getElementById('submitMeToo');
submitButtonToo.addEventListener('click', function() {breakBreaker()});
