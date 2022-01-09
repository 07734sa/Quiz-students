
const guessBtnWrapEl = document.querySelector('.guessBtnWrap');
const lightboxEl = document.querySelector('#lightboxWrapper');
const photoEl = document.querySelector('.photo');
const playAgainBtnEl = document.querySelector('.playAgainButton');
const resultEl = document.querySelector('#result');
const resultBtnEl = document.querySelector('.resultButton');
const resultSpanEl = document.querySelector('SPAN');
const wrongStudentsEl = document.querySelector('.wrongStudent');

//-------------ARRAYS------------------------------------------------

const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "img/adi-dzocaj.jpg",
		"gender": "m",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "img/alexander-bergquist.jpg",
		"gender": "m",
	},
	{
		"name" : "Alexander Kocman",
		"image": "img/alexander-kocman.jpg",
		"gender": "m",
	},
	{
		"name" : "Benjamin Benson",
		"image": "img/benjamin-benson.jpg",
		"gender": "m",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "img/benjamin-tsubarah.jpg",
		"gender": "m",
	},
	{
		"name" : "Calle Nilsson",
		"image": "img/calle-nilsson.jpg",
		"gender": "m",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "img/chikage-takahashi-molander.jpg",
		"gender": "f",
	},
	{
		"name" : "Daniel Be",
		"image": "img/daniel-be.jpg",
		"gender": "m",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "img/daniel-carlsson.jpg",
		"gender": "m",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "img/elin-ahlgren.jpg",
		"gender": "f",
	},
	{
		"name" : "Emma Käck",
		"image": "img/emma-kack.jpg",
		"gender": "f",
	},
	{
		"name" : "Eric Ståhl",
		"image": "img/eric-stahl.jpg",
		"gender": "m",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "img/frans-gustavson-passe.jpg",
		"gender": "m",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "img/glafira-veretennikova.jpg",
		"gender": "f",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "img/gustaf-gronlund.jpg",
		"gender": "m",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "img/hanna-hakanson.jpg",
		"gender": "f",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "img/heidi-sjoberg.jpg",
		"gender": "f",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "img/hugo-carzborn.jpg",
		"gender": "m",
	},
	{
		"name" : "Jesper Kling",
		"image": "img/jesper-kling.jpg",
		"gender": "m",
	},
	{
		"name" : "Johan Ranestam",
		"image": "img/johan-ranestam.jpg",
		"gender": "m",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "img/johanna-backstrom.jpg",
		"gender": "f",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "img/johanna-jonsson.jpg",
		"gender": "f",
	},
	{
		"name" : "Jona Torsson",
		"image": "img/jona-torsson.jpg",
		"gender": "m",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "img/josefine-ahlstedt.jpg",
		"gender": "f",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "img/julia-jespersdotter-hogman.jpg",
		"gender": "f",
	},
	{
		"name" : "Julia Nemell",
		"image": "img/julia-nemell.jpg",
		"gender": "f",
	},
	{
		"name" : "Linus Lindberg",
		"image": "img/linus-lindberg.jpg",
		"gender": "m",
	},
	{
		"name" : "Malin Olsson",
		"image": "img/malin-olsson.jpg",
		"gender": "f",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "img/maria-haara-lundhammar.jpg",
		"gender": "f",
	},
	{
		"name" : "Maria Lövgren",
		"image": "img/maria-lovgren.jpg",
		"gender": "f",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "img/nikola-dimitrijoski.jpg",
		"gender": "m",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "img/paulina-kiendys.jpg",
		"gender": "f",
	},
	{
		"name" : "Raymond Lam",
		"image": "img/raymond-lam.jpg",
		"gender": "m",
	},
	{
		"name" : "Robin Karlsson",
		"image": "img/robin-karlsson.jpg",
		"gender": "m",
	},
	{
		"name" : "Sara Almqvist",
		"image": "img/sara-almqvist.jpg",
		"gender": "f",
	},
	{
		"name" : "Tim Nilsson",
		"image": "img/tim-nilsson.jpg",
		"gender": "m",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "img/tirapat-sukjit.jpg",
		"gender": "m",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "img/tobias-silfverberg.jpg",
		"gender": "m",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "img/wiktoria-dobrzewinska.jpg",
		"gender": "f",
	},
];
let incorrectAnswer = [];  
let firstStudent = []

//---------------------------
let genderSlice;
let studentSlice = "";

let names;
let correctGuessIndex = "";
let guesses = 0; 
let correctPoints = 0;

//--------- SHUFFLE STUDENTS ---------------------------------------

//Fisher-Yates algorithm
const shuffleArray = (array) => { //shuffle names in copied array
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  //shuffles new array
        const  temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};

//--------- SORT BY GENDER AND SHOW STUDENT ------------------------

const showStudent = ()  => {

	guessBtnWrapEl.innerHTML = ""; //No more than 4 buttons

	shuffleArray(students); //Shuffles the students.
	studentSlice = students.slice(0, 1); //Get one student as a referens.
	correctGuessIndex = studentSlice[0]; //Correct answer at index 0.
	photoEl.src = correctGuessIndex.image; //Get photo of student.


	if (correctGuessIndex.gender ===  "m") { // if it's a male...

		const male = students.filter(student => student.gender === "m"); // get all male students.
		const maleSlice = male.slice(1, 4); // get 3 more male students.
		genderSlice = studentSlice.concat(maleSlice); // Make one slice.
		shuffleArray(genderSlice); //shuffle to avoid the correct name from ending up in the same place.
		names = genderSlice.map(students => students.name); //get the 4 names.

	}	else if (correctGuessIndex.gender === "f")   {

		const female = students.filter(student => student.gender === "f");
		const femaleSlice = female.slice(1, 4);
		genderSlice = studentSlice.concat(femaleSlice);
		shuffleArray(genderSlice); 
		names = genderSlice.map(students => students.name);
		console.log(correctGuessIndex)
	};

	names.forEach(name => { //Make one btn for each name.
		guessBtnWrapEl.innerHTML += `<button class="guess">${name}</button>`;
	});
};

//------------ START GAME ------------------------------------------------------

guessBtnWrapEl.addEventListener('click', e => {
    e.preventDefault();
  
    if (e.target.tagName === 'BUTTON') {
        guesses++;
    
        if (e.target.innerText === correctGuessIndex.name) {
            correctPoints++; 
			e.target.classList.add ('correct'); //Green btn if correct guess.
			//console.log(correctAnswer)

        }  else {
			incorrectAnswer.push(correctGuessIndex);
			e.target.classList.add('wrong'); //Red btn if wrong guess.
            //console.log(incorrectAnswer)
        }

        if (guesses === 10) {
            lightboxEl.classList.add('show');
            resultBtnEl.classList.add('show');// Game over- show result btn
        }

		setTimeout(() => { // Otherwise you're not able to see live feedback.
			showStudent();
		}, 50);
    };
});

//---------------- RESULT ---------------------------------------------------

resultBtnEl.addEventListener('click', e => {
	e.preventDefault();
	//console.log(e.target)

	incorrectAnswer.forEach(answer => {
		wrongStudentsEl.innerHTML += `
		<figure>
			<img src="${answer.image}"
			<figcaption>${answer.name}</figcaption>
		</figure>
		`			
	});	

	if ('BUTTON' === e.target.tagName) {

		lightboxEl.classList.remove('show');
		resultBtnEl.classList.remove('show'); 
		resultEl.classList.add('show');
		resultEl.innerText = `Antal rätt: ${correctPoints}/${guesses}`; 
		resultSpanEl.classList.add('show')
		resultSpanEl.innerText = `Du gissade fel på ${guesses - correctPoints} personer`;
		playAgainBtnEl.classList.add('show'); 
		wrongStudentsEl.classList.add('show'); // Show wrong guesses.
		photoEl.src = ""; 
		guessBtnWrapEl.classList.add('hide');	
	}
	
	if (correctPoints === 10) {
		wrongStudentsEl.classList.remove('show');
	};
});

//------------------PLAY AGAIN BUTTON--------------------------------------

playAgainBtnEl.addEventListener('click', e => {

	if ('BUTTON' === e.target.tagName) {
        //Clears arrays for new game
        incorrectAnswer = [];  
		guesses = 0; 	// Reset counter.
		correctPoints = 0;

		resultEl.classList.remove('show');	//Hide result.
		resultSpanEl.classList.remove('show');
		playAgainBtnEl.classList.remove('show'); 
		lightboxEl.classList.remove('show'); 
		wrongStudentsEl.classList.remove('show');
	}	
    showStudent(); // To prevent showing the same student.			
});

showStudent();



