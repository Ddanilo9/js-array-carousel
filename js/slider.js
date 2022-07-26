// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

//pusho in questo nuovo array il contenuto
let slideElements = []
currentIndex = 0

let containerSlider = document.querySelector('.slides-wrapper');
containerSlider.innerHTML= '';

// console.log(containerSlider)

//contenuto slider
for (let i = 0; i < slides.length; i++) {
let src = slides[i] //racchiudo in una nuova variabile
// console.log(src)


//creo l'elemento li
let li = document.createElement('li');
//aggiungo classe a li
li.className = ('slide');

//agiungo la classe active sul  primo elemento dell'array
if (i === 0){
	li.classList.add('active');
}
// creo l'elemento immagine
let img = document.createElement('img');
img.src = src
li.append(img)
// console.log(src)
containerSlider.append (li);
slideElements.push(li);

}

console.log(slideElements)

//prendo la freccia destra da dntro il dom
let arrowRight = document.querySelector('.arrow-next')
// console.log(arrowRight)

arrowRight.addEventListener('click', function() {
	let slideAttiva = slideElements[currentIndex]
	// console.log(slideAttiva)
	slideAttiva.classList.remove('active')

	let slideSuccessiva = slideElements[currentIndex + 1]
	slideSuccessiva.classList.add('active')

	currentIndex ++
})

let arrowleft = document.querySelector('.arrow-prev')
// console.log(arrowleft)

arrowleft.addEventListener('click', function() {
	let slideAttiva = slideElements[currentIndex]
	// console.log(slideAttiva)
	slideAttiva.classList.remove('active');

	let slideSuccessiva = slideElements[currentIndex - 1]
	slideSuccessiva.classList.add('active');

	currentIndex --
})

