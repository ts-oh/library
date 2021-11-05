const bookDisplay = document.querySelector('#book-item');

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

// add button to add new books from the pop-up form
const addBook = document.querySelector('.btn-add');
addBook.addEventListener('click', addBookToLibrary);

const addBtn = document.querySelector('.btn-add');

addBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const bookTitleValue = bookTitle.value;
	const bookAuthorValue = bookAuthor.value;
	const bookPagesValue = bookPages.value;
	const newBook = new addBookToLibrary(
		bookTitleValue,
		bookAuthorValue,
		bookPagesValue
	);
	console.log(newBook);
	myLibrary.push(newBook);
});

let myLibrary = [];
console.log(myLibrary);

function Book() {
	// the constructor
	myLibrary.forEach((book) => {
		const bookCard = document.createElement('h1');
		bookCard.textContent = book;
		bookDisplay.appendChild(bookCard);
	});
}

// An object constructor
function addBookToLibrary(title, author, pages) {
	// add books
	this.title = title;
	this.author = author;
	this.pages = pages;
}

Book();

function openForm() {
	document.querySelector('#book-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('#book-popup').style.display = 'none';
}
