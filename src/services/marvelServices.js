class MarvelServices {
    _apiBase = "https://gateway.marvel.com:443/v1/public/"
    _apiKey = "apikey=ea3892a4a38fd40f6edd334273023729"
    getRecurce = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = () => {
        return this.getRecurce(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    getCharacter = (id) => {
        return this.getRecurce(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelServices