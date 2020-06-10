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

function plusAy(consonant) {
    return (consonant + "ay");
}






// Front End Here:
$(document).ready(function(){
    $("form#pigLatinForm").submit(function(event){
    event.preventDefault();
    const word = $("input#wordInput").val();
    $("#wordOutput").text(word);
    });
});