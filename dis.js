function search() {
    endis = input.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${endis}`).then(data => data.json()).then(data => displayData(data)).catch(() => {
        result.innerHTML = `<h3 class="text-center mt-3">Incorrect Word!</h3>`
    })


    if (endis.input) {

    }
    else {
        function displayData(endisDetails) {
            WordTitle = endisDetails[0].word
            wordPhonetic = endisDetails[0].phonetic
            Meaning = endisDetails[0].meanings[1].definitions[0].definition
            partOfSpeech = endisDetails[0].meanings[1].partOfSpeech

            result.innerHTML = `<div class="meaning_container mt-3" id="meaning_container">
           <p>Word Title:<span>${WordTitle}</span></p>
            <p>Word Phonetic:<span>${wordPhonetic}</span></p>
            <p>Meaning:<span >${Meaning}</span></p>
            <p>Part of speech:<span >${partOfSpeech}</span></p>
            
            
    `
        }
    }
}


