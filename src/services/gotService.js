// GOT GameOfThrones
export default class GOTService {   
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) { // ok - if error happened or not
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource("/characters?page=5&pageSize=10");
        return res.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`); // await returns us value, that was waited from promise
        return this._transformCharacter(character)

    }

    async getAllHouses() {
        const res = await this.getResource("/houses/");
        return res.map(this._transformHouse);
    }

    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    async getAllBooks() {
        const res = await this.getResource("/books/");
        return res.map(this._transformBook);
    }  

    async getBook(id) {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    _isEmpty(item) {
        return item ? item : "none";
    }

    _transformCharacter(char) {
        return {
            name: this._isEmpty(char.name),
            gender: this._isEmpty(char.gender),
            born: this._isEmpty(char.born),
            died: this._isEmpty(char.died),
            culture: this._isEmpty(char.culture)
        }
    }

    _transformHouse(house) {
        return {
            name: this._isEmpty(house.name),
            region: this._isEmpty(house.region),
            words: this._isEmpty(house.words),
            titles: this._isEmpty(house.titles),
            overlord: this._isEmpty(house.overlord),
            ancestralWeapons: this._isEmpty(house.ancestralWeapons)
        }
    }

    _transformBook(book) {
        return {
            name: this._isEmpty(book.name),
            numberOfPages: this._isEmpty(book.numberOfPages),
            publisher: this._isEmpty(book.publisher),
            released: this._isEmpty(book.released)
        }
    }
}



// Posted some data

// let url = 'https://jsonplaceholder.typicode.com/posts',
//     data = {username: 'example'};

// fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((response) => response.json())
//     .then((myJson) => console.log('Success', myJson))
//     .catch((error) => console.log('Error', error));

// const getResource = async (url) => {
//     const res = await fetch(url);

//     if (!res.ok) { // ok - if error happened or not
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     const some = await res.json();


//     return some;
// };

// getResource('https://jsonplaceholder.typicode.com/todos/10000')
//     .then((res) => console.log('Success', res))
//     .catch((error) => console.log(error));