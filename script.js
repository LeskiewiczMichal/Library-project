const booksContainer = document.getElementById('books');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');

overlay.style.display = 'none'

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let harry = new book('Harry potter', 'JK', 320, 'read');
let lord = new book('lord of the rings', 'tolkien', 500, 'read');
let da = new book('dragon age', 'gaider', 200, 'not read');

const myLibrary = [harry, lord, da];

function addBookToLibrary() {
    myLibrary.forEach(function (book){
        const newDiv = document.createElement('div');
        booksContainer.appendChild(newDiv);
        const title = document.createElement('p');
        title.innerText = `"${book.title}"`;
        const author = document.createElement('p');
        author.innerText = `Author: ${book.author}`;
        const pages = document.createElement('p');
        pages.innerText = `${book.pages} pages`;
        const read = document.createElement('p');
        read.innerText = `${book.read}`;

        newDiv.appendChild(title);
        newDiv.appendChild(author);
        newDiv.appendChild(pages);
        newDiv.appendChild(read);
    });
}

const newBookBtn = document.getElementById('new-book');

newBookBtn.addEventListener('click', () => {
    overlay.style.display = 'block'
})

const xBtn = document.getElementById('x-btn');
xBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})

    // document.addEventListener('click', (e) => {
    //     if (!form.contains(e.target) && overlay.style.display == 'block') {
    //         overlay.style.display = 'none'
    //     }
    // })

