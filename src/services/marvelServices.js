class MarvelServices {
    getRecurce = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = () => {
        return this.getRecurce("https://gateway.marvel.com:443/v1/public/characters?apikey=ea3892a4a38fd40f6edd334273023729");
    }

}

export default MarvelServices