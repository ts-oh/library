let myLibrary = [];

const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const addBookBtn = document.querySelector('#add-book-btn');
const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('#read-radio');
const notRead = document.querySelector('#not-read-radio');
const libraryContainer = document.querySelector('.library-container');

openModalBtn.addEventListener('click', function () {
	document.querySelector('#overlay').style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
	document.querySelector('#overlay').style.display = 'none';
});

addBookBtn.addEventListener('click', function () {
	if (read.checked === true) {
		read.value = 'Yes';
	} else if (notRead.checked === true) {
		read.value = 'No';
	}

	let newBook = new Book(title.value, author.value, pages.value, read.value);

	myLibrary.push(newBook);
	clearDisplay();
	renderDisplay();
});

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
				<p><b>Read?:</b> ${myLibrary[i].read}</p> <button id="read-status" onclick="readStatusChange(${i})">Toggle Read 🙋🏻</button>
				<button class="delete-book-btn" onclick="deleteBook(${i})">
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
