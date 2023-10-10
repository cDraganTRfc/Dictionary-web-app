const form = document.querySelector("form");


const searchWord = (e) => {
    e.preventDefault();

}

const getData = async () => {
    const response = await fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/hello')

const data = await response.json();
console.log(data)
};

form.addEventListener("submit", searchWord); 