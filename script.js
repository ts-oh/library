const bookContainer = document.querySelector('#card-container');

// button to open pop-up form
const openFormBtn = document.querySelector('#open-form');
openFormBtn.addEventListener('click', openForm);

// closing button for pop-up form
const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', closeForm);

// accessing the values in the add book form
const bookTitle = document.forms['form-container']['book-title'];

const bookAuthor = document.forms['form-container']['book-author'];

const bookPages = document.forms['form-container']['book-pages'];

const bookRead = document.forms['form-container']['readCheckBox'];

// add button to add new books from the pop-up form
const addBook = document.querySelector('.btn-add');
addBook.addEventListener('click', createBook);

const addBtn = document.querySelector('.btn-add');

function isRead(readValue) {
	if (readValue === 'read') {
		return 'read';
	} else if (readValue === 'not read') {
		return 'not read';
	}
}

addBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const titleVal = bookTitle.value;
	const authorVal = bookAuthor.value;
	const pagesVal = bookPages.value;
	const readVal = bookRead.value;

	const readBool = isRead(readVal);

	const newBook = new createBook(titleVal, authorVal, pagesVal, readBool);
	console.log(newBook);

	myLibrary.push(newBook);

	Book(titleVal, authorVal, pagesVal, readBool);
});

let myLibrary = [];
console.log(myLibrary);

function Book(titleVal, authorVal, pagesVal, readBool) {
	const bookCardTitle = document.createElement('h2');
	const bookCardAuthor = document.createElement('p');
	const bookCardPages = document.createElement('p');
	const bookCardRead = document.createElement('p');
	bookCardTitle.textContent = titleVal;
	bookCardAuthor.textContent = authorVal;
	bookCardPages.textContent = pagesVal;
	bookCardRead.textContent = readBool;
	bookContainer.appendChild(bookCardTitle);
	bookContainer.appendChild(bookCardAuthor);
	bookContainer.appendChild(bookCardPages);
	bookContainer.appendChild(bookCardRead);
}

// An object constructor
function createBook(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function openForm() {
	document.querySelector('#book-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('#book-popup').style.display = 'none';
}
