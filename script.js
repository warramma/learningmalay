const randomFacts = [
    'Malay also known as Bahasa Melayu or Bahasa Malaysia is spoken primarily in Malaysia, Indonesia, Singapore, Brunei, and Thailand',
    'Malaysia\'s national flower is the Rafflesia, or the stinking corpse lily, which also has medicinal benefits! It\'s considered the biggest flower in the world!',
    'The language Malay has been influenced by many languages including English, Arabic, Mandarin, Tamil, and Portugese!',
    'Malaysia\'s capital Kuala Lumpur or KL is home to the Petronas Towers, the tallest twin buildings in the world.',
    'Malaysia and the Malay peninsula is home to the elusive Malayan tiger.',
    'Malaysia\'s national dish is Nasi Lemak and it\'s national drink is teh tarik!',
    'Malaysia is a diverse multicultural and multiracial country which is reflected in Malaysia\'s vibrant culture',
    'Malaysia is one of the 17 most biologically diverse countries in the world, with at least 13 million species!'
]

const randomFactContainer = document.querySelector(".random");

function randomFact(){
    let randomNumber = Math.floor((Math.random()*(randomFacts.length)));
    let fact = document.createElement("p");
    console.log(randomFacts[randomNumber]);
    fact.textContent = randomFacts[randomNumber];
    randomFactContainer.appendChild(fact);
}

randomFact();

//----random fact button
const randomBtn = document.querySelector(".randomBtn");


function generateFact(){
    randomFactContainer.removeChild(randomFactContainer.firstChild);
    randomFact();
}

randomBtn.addEventListener("click", generateFact);
