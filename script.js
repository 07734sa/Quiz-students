/*
Godkänt

- Följer strukturen och upplägget ovan
- Den ursprungliga array:en förblir oförändrad
- Visar resultat med antal rätt samt totalt antal frågor (t.ex. 16/20 rätt om man fick 16 rätt på 20 frågor)

Väl Godkänt

- Använda Array Filter & Array Map
- Slumpa ordningen som bilderna kommer i
- Visa vilka man gissade fel på och vilket som var rätt svar. Antingen genom att i listan visa vad man gissade på 
    och vad som var rätt svar, eller i en ny lista under resultatet visa foto + namn på de man gissade fel på
- Håll reda på senaste resultat och vid varje ny gissning visa om man förbättrade eller försämrade sig denna gången
*/

const photoEl = document.querySelector('.photo');
const guessContainer = document.querySelector('.guessContainer');
const lightboxEl = document.querySelector('#lightboxWrapper')
const photosEl = document.querySelector('.photos');
const playAgainButtonEl = document.querySelector('#playAgainButton')
const resultEl = document.querySelector('#result');
const resultButtonEl = document.querySelector('.resultButton');

//-------------ARRAYS-----------------------------------------------------------------------------

const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

const studentsCopy = [...students]; //Gör en kopia av students
//console.log(studentsCopy);

const filtredStudents = [];

//----------SHUFFLE STUDENTS-------------------------------------------------

const shuffleArray = (array) => { //shuffle names in copied array
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  //shuffles new array
        const  temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
shuffleArray(studentsCopy);

//-----------SHOW IMAGE AND NAMES-------------------------------------------

let correctGuessIndex = ""; // Måste ligga utanför. getStudents kan inte komma åt den inne i scopet
let names;

const showStudent = () => { // skapar en funktion för att kunna kalla på den igen
	guessContainer.innerHTML = ""; //Gör att fler knappar ej skapas.
	shuffleArray(studentsCopy); //shufflar studenterna

	const studentSlice = studentsCopy.slice(0,4); // Plockar ut fyra första studenterna
    correctGuessIndex = studentsCopy[1];	//Rätt svar på index 1
	photoEl.src = `students/${correctGuessIndex.image}`; //Plockar fram bild

	shuffleArray(studentSlice); //shufflar slice-arna så rätt svar inte alltid är på samma plats
	//console.log(correctGuessIndex);

 	names = studentSlice.map(students => students.name); //Plockar ut de fyra namnen.
	names.forEach(name => { //För varje namn skapas en knapp.
		guessContainer.innerHTML += `<button class="guess">${name}</button>`;
	});
};
//-----------SHOW LIVE IF CORRECT GUESS OR NOT--------------------------------


//-----------ADD CLICK EVENTS FOR EACH NAME-----------------------------------

let guesses = 0; 
let correctPoints = 0;

guessContainer.addEventListener('click', e  => {
	e.preventDefault();

	if ('BUTTON' === e.target.tagName && guesses < 10){ //man kan ändra hur lång spelet ska vara. Här ska 10 foton visas
		//Om target är en button...
		guesses ++; //Antal gissade ggr
		console.log(e.target);
	}

	if (e.target.innerText === correctGuessIndex.name) {	 //...om namnet på knappen hör ihop med bilden.
		correctPoints++ //  Om det är rätt, 1 poäng
		e.target.classList.add('correct')

		filtredStudents.push(e.target.innerText);			
		console.log(filtredStudents);
				
	}	else if (guesses === 10) { //När spelet har visat 10 bilder visas lightboxen...
			lightboxEl.classList.add('show');
			resultButtonEl.classList.add('show');//...och resultatknappen

	}	else {
			e.target.classList.add('wrong')
	}
	setTimeout(() => {
		showStudent();
	}, 500);
});

//----------- HIDE RESULT BUTTON WHEN CLICKED ON. THEN SHOW SCORE--------------

resultButtonEl.addEventListener('click', e => {
	e.preventDefault();
	console.log(e.target)
	
	if ('BUTTON' === e.target.tagName) {
			
		resultButtonEl.classList.remove('show'); // resultatknappen döljs
		resultEl.classList.add('show');
		resultEl.innerText =`Antal rätt: ${correctPoints}/${guesses}`; //poäng
		playAgainButtonEl.classList.add('show');
	}	
});

//------------------PLAY AGAIN BUTTON--------------------------------------

playAgainButtonEl.addEventListener('click', e => {

	if ('BUTTON' === e.target.tagName) {
		guesses = 0; 	//När spelet är slut nollställs räknaren
		correctPoints = 0;

		resultEl.classList.remove('show');	//Dölj resultat
		playAgainButtonEl.classList.remove('show'); //Dölj splela-igen-knappen
		lightboxEl.classList.remove('show'); // Dölj lightbox
	}				
	showStudent();
});

showStudent();

//-------------------------------------------------------------------------------


