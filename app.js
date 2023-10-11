const form = document.querySelector("form");


const searchWord = async (e) => {
    e.preventDefault();

    const data = await getData();
    console.log(data)
};

const renderHtml = (data) => {
    let html = "";
    html+=`<div class="word-header">
    <div class="left">
        <h1>${}</h1>
        <p>/'ki:bc:d/</p>
    </div>
    <div class="right">
        <button>
            <audio src=""></audio>
        </button>
    </div>
</div>`
}

const getData = async () => {
    const response = await fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard')

const data = await response.json();

};

form.addEventListener("submit", searchWord); 