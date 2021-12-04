let myLibrary = [];

const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const addBookBtn = document.querySelector('#add-book-btn');
const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('input#readCheck[value]');
const libraryContainer = document.querySelector('.library-container');
//const deleteBookBtn = document.querySelectorAll('.delete-book-btn');

// deleteBookBtn.forEach((book) =>
// 	book.addEventListener('click', function () {
// 		console.log('button is clicked');
// 	})
// );

openModalBtn.addEventListener('click', function () {
	document.querySelector('#overlay').style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
	document.querySelector('#overlay').style.display = 'none';
});

addBookBtn.addEventListener('click', function () {
	let newBook = new Book(title.value, author.value, pages.value, read.value);

	myLibrary.push(newBook);
	console.log(myLibrary);
	clearDisplay();
	renderDisplay();
});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

// render read string from my library
function renderDisplay() {
	libraryContainer.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		libraryContainer.innerHTML += `<div class="book-container" data-index="${i}">
				<p>Title: ${myLibrary[i].title}</p>
				<p>Author: ${myLibrary[i].author}</p>
				<p>Pages: ${myLibrary[i].pages}</p>
				<button class="read-btn">
					${myLibrary[i].read}
				</button>
				<button class="delete-book-btn" onclick="deleteBook(${i})">
					Remove ✖️
				</button>
			</div>`;
	}
}

function clearDisplay() {
	libraryContainer.innerHTML = '';
}

function deleteBook(index) {
	myLibrary.splice(index, 1);
	clearDisplay();
	renderDisplay();
}
