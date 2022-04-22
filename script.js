const booksContainer = document.getElementById('books');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const createBtn = document.getElementById('create');
const newBookBtn = document.getElementById('new-book');


overlay.style.display = 'none'

let harry = new book('ok', 'poewr', 233, 'read')
let myLibrary = [harry];
fillBooksContainer(booksContainer);

// Book constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function resetBooksContainer(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fillBooksContainer(booksContainer){
    resetBooksContainer(booksContainer);
    myLibrary.forEach(book => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('book')
        booksContainer.appendChild(newDiv);
        const title = document.createElement('p');
        title.innerText = `"${book.title}"`;
        const author = document.createElement('p');
        author.innerText = `Author: ${book.author}`;
        const pages = document.createElement('p');
        pages.innerText = `${book.pages} pages`;
        const read = document.createElement('p');
        read.innerText = `${book.read}`;
        const removeBook = document.createElement('button');
        removeBook.classList.add('removeBook');
        removeBtn(removeBook)

        newDiv.appendChild(title);
        newDiv.appendChild(author);
        newDiv.appendChild(pages);
        newDiv.appendChild(read);
        newDiv.appendChild(removeBook)
    });
}

newBookBtn.addEventListener('click', () => {
    overlay.style.display = 'block'
})

const xBtn = document.getElementById('x-btn');
xBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})

createBtn.addEventListener ('click', (e) => {
    e.preventDefault();

    if (title.value === '' || author.value === ''
        || pages.value === '') {
            alert('All fields have to be filled');
            return false;
        }

    let read = document.getElementById('read');
    if (read.checked == true) {
        read = 'Read'
    } else {
        read = 'Not read'
    }
    const newBook = new book(title.value, author.value, pages.value, read);

    myLibrary.push(newBook);
    fillBooksContainer(booksContainer)

    xBtn.click()
})

// function removeBtn(removeBtn, library){
//     removeBtn.addEventListener('click', function() {
//         library removeBtn.parentNode
//     })
// }

