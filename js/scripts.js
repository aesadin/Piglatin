function notLetter(char) {
    return char;   
}

function plusWay(vowel) {
    return (vowel + "way");
}
//combine vowel and vowelword into one single function
function wayToWord(vowelWord) {
    return (vowelWord + "way");
}


function plusAy(consonantWord) {
    let splitString = consonantWord.split("");
    let sliceString = splitString.slice(1);
    let joinString = sliceString.join("");
    let zeroString = splitString.toString("");
    return (joinString + zeroString[0] + "ay");
}


function moveConsonants(splitString) {
    const vowels = ["a", "e", "i", "o", "u"];
    //let wordArray = word.split("");
    for(i=0; i < splitString.length; i++) {
        let vowelMatch = false;
            let value;
        for(v=0; v <vowels.length; v++) {
            if (vowels[v] === splitString[i]) {
                let value = i
                console.log(value)
                break;
               
            };
        }; 
        
        let newSplit = (splitString.slice(value) + splitString.slice(0, value) + "ay")
            return newSplit;
};
};        

        //character 

        //aracter + ch + ay 
 



        //christening
        //const 1 =chr
        //const 2 istening
      //const 3 =  const 2 (concat)const 1 "ay"
      //isteningchray
    

//vowel = ["a", "e", "i", "o", "u"]
//user inputs "fart" 
// let inputWord = inputWord.split("") <-- ["f", "a", "r", "t"]
//let newWord = inputWord.shift <-- ["a", "r", "t"]
//newWord.concat() 

// word 
// splitString = ["w", "o", "r", "d"]
// sliceString = ["o", "r", "d"]





// Front End Here:
$(document).ready(function(){
    $("form#pigLatinForm").submit(function(event){
    event.preventDefault();
    const word = $("input#wordInput").val();
    $("#wordOutput").text(word);
    });
});