const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const sentence = 'hello!'
counter = 0;

const makeMaker = () => {
    const whatever = sentence.charCodeAt(0);
    for (let i = 0; i < sentence.length; i++){
        
    }

}


// let outputString = '';
// const makeMaker = () => {
//     outputString = '';
//     let sentence = document.getElementById('emptySpace').value.toLowerCase();
// for (let i = 0; i < sentence.length; i++) {
//     outputString += 'hello!'[sentence.charCodeAt(0)[sentence.charAt(counter)]];
//     counter = 0;
// } 
// console.logt(makeMaker);
// }

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
