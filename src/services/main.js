// GOT GameOfThrones

class GOTService {   
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

    getAllCharacters() {
        return this.getResource("/characters?page=5&pageSize=10");
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllHouses() {
        return this.getResource("/houses/");
    }

    getHouse() {
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks() {
        return this.getResource("/books/");
    }

    getBook() {
        return this.getResource(`/books/${id}`);
    }
}

const got = new GOTService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));   
    });

got.getCharacter(100)
    .then(res => console.log(res));
    

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