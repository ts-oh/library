let myLibrary = [
	{
		title: 'Add your book Title',
		author: 'The name of the Author',
		pages: '777',
		read: 'Yes',
	},
];

const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const addBookBtn = document.querySelector('#add-book-btn');
const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('#read-radio');
const notRead = document.querySelector('#not-read-radio');
const libraryContainer = document.querySelector('.library-container');

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

addBookBtn.addEventListener('click', function () {
	readValueCheck();
	createNewBook();
	clearDisplay();
	renderDisplay();
	closeModal();
});

function openModal() {
	document.querySelector('#overlay').style.display = 'block';
}

function closeModal() {
	document.querySelector('#overlay').style.display = 'none';
}

function readValueCheck() {
	if (read.checked === true) {
		return (read.value = 'Yes');
	} else if (notRead.checked === true) {
		return (read.value = 'No');
	}
}

function createNewBook() {
	let newBook = new Book(title.value, author.value, pages.value, read.value);
	myLibrary.push(newBook);
	return newBook;
}

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function renderDisplay() {
	libraryContainer.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		libraryContainer.innerHTML += `<div class="book-container" data-index="${i}">
				<p><b>Title:</b> ${myLibrary[i].title}</p>
				<p><b>Author:</b> ${myLibrary[i].author}</p>
				<p><b>Pages:</b> ${myLibrary[i].pages}</p>
				<p><b>Read?:</b> ${myLibrary[i].read}</p> <button id="read-status-btn" onclick="readStatusChange(${i})">Read? 🙋🏻 or 🙅🏻‍♂️</button>
				<button id="delete-book-btn" onclick="deleteBook(${i})">
					Remove 📤
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

function readStatusChange(index) {
	if (myLibrary[index].read === 'Yes') {
		myLibrary[index].read = 'No';
	} else if (myLibrary[index].read === 'No') {
		myLibrary[index].read = 'Yes';
	}
	clearDisplay();
	renderDisplay();
}

renderDisplay();
