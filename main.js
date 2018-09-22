const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const sentence = 'hello!';


let outputString = '';
const makeMaker = () => {
    outputString = '';
    let sentence = document.getElementById('emptySpace').value.toLowerCase();
for (let i = 0; i < sentence.length; i++) {
    outputString += sentence.charCodeAt(0);
    index = 0;
} 
}
printToDom(makeMaker, 'emptySpace');


// console.log('these characters make ' + sentence.charCodeAt(counter) + ' is equal to ' + sentence.charAt(counter))

// const sentence = event.charCode;

// let outputSentence = '';
// const makeMaker = () => {
//     outputSentence = '';
//     let inputSentence = document.getElementById('emptySpace').value;
//     for (let i = 0; i < sentence.length; i++) {
//         outputSentence += `${sentence[sentence.charCodeAt(counter)[i]]}`;
//         outputSentence += " ";
//         }
//     printToDom(outputSentence, 'emptySpace');
//     }



let submitButton = document.getElementById("submitMe");
submitButton.addEventListener('click', function() {makeMaker(sentence)});
