const form = document.querySelector("form");
const container = document.querySelector(".content");

const searchWord = async (e) => {
    e.preventDefault();
    const word = form.word.value;

    const data = await getData(word);

    renderHtml(data);
};

const renderHtml = (data) => {
    let html = "";
    html+=
    `<div class="word-header">
    <div class="left">
        <h1>${data.word}</h1>
        <p>${data.phonetic || phoneticsText}</p>
    </div>
    <div class="right">
        <button class="audio-btn">`
        if (data.phonetic.length > 0) {
            for (let i of data.phonetics) {
                if (i.audio) {
                    html+= `<audio src="${i.audio}"`
                };
            };
        };
          html+=` </button>
    </div>
</div>`;

if(data.meanings) {
    for (let i of data.meanings) {
        html +=`
        <div class="meaning-container">
                    <div class="meaning-header">
                        <h3>${i.partOfSpeach}</h3>
                        <hr>
                    </div>
                    <h3 class="meaning-title">Meaning</h3>
                    <ul>`
                       if (i.definitions) {
                        for (let j of i.definitions) {
                            html+= `<li>${j.definition}</li>`
                        }
                       }
                    html += `</ul>
                    <p class="synonyms">Synonyms <span>electronic keyboard</span></p>
                </div>
        `
    }
}



container.innerHTML = html;

const audioBtn = document.querySelector(".audio-btn")
audioBtn.addEventListener("click", () => {
    const audio = audioBtn.querySelector("audio");
    audio.play();
})
};

const getData = async (word) => {
    const response = await fetch (
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
        );

const data = await response.json();

return data[0];
};

form.addEventListener("submit", searchWord); 

const dark = document.querySelector("#sl")
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
dark.addEventListener("click", myFunction, true)

const dataTwo = {
    phonetics: [
      { audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3', sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=75797336', license: {} },
      { text: '/həˈləʊ/', audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3', sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=9021983', license: {} },
      { text: '/həˈloʊ/' }
    ]
  };
  
  const phoneticsText = dataTwo.phonetics[2].text;