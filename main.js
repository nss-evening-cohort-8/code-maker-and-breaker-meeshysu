const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};



const makeMaker = () => {
    outputString = '';
    let sentence = document.getElementById('inputElem').value;
    let sentenceMaker = sentence.split('');
    for (let i = 0; i < sentence.length; i++) {
        if (i < (sentence.length - 1)) {          
            outputString = sentence.charCodeAt(i) + ",";}
            else {
                outputString = sentence.charCodeAt(i); 
            }
        printToDom(outputString, 'emptySpace');
    }
}


const breakBreaker = () => {
    sentenceString = ',';
    let sentence = document.getElementById('inputElem2').value;
    let sentenceBreaker = sentence.split(',');
    for (let i = 0; i < sentence.length; i++) {
        sentenceString = String.fromCharCode(sentenceBreaker[i]);
        printToDom(sentenceString, 'alsoEmptySpace');
    }
}


let submitButton = document.getElementById("submitMe");
submitButton.addEventListener('click', function () { makeMaker() });


let submitButtonToo = document.getElementById('submitMeToo');
submitButtonToo.addEventListener('click', function () { breakBreaker() });


