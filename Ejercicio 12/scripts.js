'use-strict';
const url = "https://rickandmortyapi.com/api/";

async function getDataFromServer(url) {
    const res = await fetch(url);
    const info = await res.json();
    return info;
}

async function getEpisodeData(url) {
    const data = await getDataFromServer(url);
    const showData = await getDataFromServer(data.episodes);
    const episodes = showData.results;
    return episodes;
}

async function getCharsData(url, month) {
    let charArray = [];
    let charSet = new Set();
    const episodes = await getEpisodeData(url);
    for (const episode of episodes) {
        const monthString = episode.air_date.substr(0, 7);
        if (monthString === month) {
            for (const character of episode.characters) {
                charSet.add(character);
            }
        } 
    }

    for (const character of charSet) {
        const charData = await getDataFromServer(character);
        const charObject = {
            name: charData.name,
        };
        charArray.push(charObject);

       let characName = charObject;
       function lista() {
        console.log('•', this.name)  
    }
        characName.lista = lista;
        characName.lista() // * character
    }

    console.log(charArray.length + " personajes aparecen en los episodios de Enero")
}
getCharsData(url, "January");