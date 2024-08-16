const randomFacts = [
    'Malay also known as Bahasa Melayu or Bahasa Malaysia is spoken primarily in Malaysia, Indonesia, Singapore, Brunei, and Thailand',
    'Malaysia\'s national flower is the Rafflesia, or the stinking corpse lily, which also has medicinal benefits! It\'s considered the biggest flower in the world!',
    'The language Malay has been influenced by many languages including English, Arabic, Mandarin, Tamil, and Portugese!',
    'Malaysia\'s capital Kuala Lumpur or KL is home to the Petronas Towers, the tallest twin buildings in the world.',
    'Malaysia and the Malay peninsula is home to the elusive Malayan tiger.',
    'Malaysia\'s national dish is Nasi Lemak and it\'s national drink is teh tarik!',
    'Malaysia is a diverse multicultural and multiracial country which is reflected in Malaysia\'s vibrant culture',
    'Malaysia is one of the 17 most biologically diverse countries in the world, with at least 13 million species!',
    'The predominant forms of Malay are Malaysian (Standard) Malay and Indonesian. Malaysian is also known as Malacca and is closely related to Indonesian.',
    'Malay is spoken by around 350 million people, with more than half of those speaking Indonesian.',
    'Malay has been written in several scripts over time, including Jawi (an Arabic script) and Rumi (the Latin alphabet), which is the most commonly used today.',
    'Although English is the primary working language, Malay is recognized as the national language of Singapore, reflecting the country\'s historical ties to the Malay world.',
    'Brunei is one of the oldest continuous monarchies in the world, with a sultanate that has existed for over 600 years.',
    'The official language of Indonesia, Bahasa Indonesia, is a standardized form of Malay, making it mutually intelligible with Malaysian Malay.',
    'In southern Thailand, particularly in provinces like Pattani and Yala, there is a significant Malay-speaking Muslim population',
    'The Chavacano language spoken in the Philippines has many Malay influences, especially in the Zamboanga region.',
    'Malay is one of the working languages of ASEAN (Association of Southeast Asian Nations), highlighting its regional importance.',
    'The pantun is a traditional form of Malay poetry that is often composed of quatrains with a rhyme scheme and is still popular in cultural performances.',
    'The Malay Archipelago, which includes Indonesia, Malaysia, Brunei, and the Philippines, is the world’s largest archipelago, with over 25,000 islands.',
    'Brunei is one of the wealthiest countries in the world, thanks to its vast reserves of oil and natural gas, leading to a high standard of living.',
    'The Langkawi archipelago in Malaysia is made up of 99 islands and is known for its stunning beaches, rainforests, and geoparks.',
    'Singapore’s national anthem, "Majulah Singapura," is written in Malay and means "Onward Singapore."',
    'The Malay language has numerous dialects across different regions, such as Kelantanese, Terengganu, and Sarawakian Malay in Malaysia, as well as Betawi and Minangkabau in Indonesia.',
    'Before it was known as Singapore, the island was called "Pulau Ujong," which means "Island at the End" in Malay, referring to its location at the tip of the Malay Peninsula.',
    'Brunei’s Kampong Ayer, often called the "Venice of the East," is a sprawling water village with houses, schools, and mosques built on stilts along the Brunei River.',
    'Located in Sabah, Malaysia, Mount Kinabalu is the tallest mountain in Southeast Asia, standing at 4,095 meters, and is a UNESCO World Heritage site.',
    'Silat is a traditional Malay martial art that is not only a form of self-defense but also an important cultural performance art in Malaysia, Indonesia, and Brunei.',
    'Several Malay words have made their way into the English language, such as "amok" (from "amuk," meaning to go berserk) and "compound" (from "kampung," meaning village or enclosure).',
    'The Orang Asli are the indigenous people of Peninsular Malaysia, consisting of various tribes with their own languages, cultures, and traditions.',
    'Wayang Kulit is a traditional form of shadow puppetry popular in Malaysia and Indonesia, where intricate leather puppets are used to tell stories from epics like the Ramayana.'
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
