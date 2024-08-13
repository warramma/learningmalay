
const resources = `[
    {
        "name": "Sierra Lise YT Channel",
        "type": "Educational Video",
        "description": "Sierra Lise is a native speaker and teaches how to speak colloquial Malay in her series Speak Malay Like a Local. Her channel features lots of short videos, with vocab, situational practice, and even song analysis.",
        "beginnerfriendly": "True",
        "link" : "https://www.youtube.com/channel/UCS4bgrp3KfdEeBQAbkiCTqA"
    },
    {
        "name": "Tina Amir",
        "type": "Educational Video",
        "description": "Tina Amir posts a variety of Malay learning content, including the very basics such as the alphabet and basic pronunciation!",
        "beginnerfriendly": "True",
        "link" : "https://www.youtube.com/@TinaAmir"
    },
    {
        "name": "Easy Malay",
        "type": "Educational Video",
        "description": "Created by the Easy Languages channel, Easy Malay is a collection of street interviews and is great for hearing Malay as it’s spoken by native speakers! Although they do speak a bit fast, the videos are great if you're looking for language immersion resources!",
        "beginnerfriendly": "False",
        "link" : "https://youtube.com/playlist?list=PLA5UIoabheFNZ1XpASWLn2Emf3TniE6eG&si=sg_e0w3N2TmkgqAL"
    },
    {
        "name": "Upin and Ipin",
        "type": "Show",
        "description": "This classic children's show can be a great learning resource, especially if you learn best by watching. Upin & Ipin are some of the most iconic cartoon characters in the Malay archipelago, especially in Malaysia and Indonesia. With 16 seasons and going, Upin & Ipin has a wealth of Malay content on a variety of topics.",
        "beginnerfriendly": "True",
        "link" : "https://www.youtube.com/@lescopaque"
    },
    {
        "name": "Kampung Boy",
        "type": "Show",
        "description": "The OG Malay Children’s show, based on the famous book by cartoonist Lat about his experience growing up in rural Malaysia.",
        "beginnerfriendly": "False",
        "link" : "https://youtube.com/playlist?list=PL7Zv0F6XNLqFKQJNgaEACtuWxtx9KnUAa&si=Z679IrvMrJTEkfZ-"
    },
    {
        "name": "Malay Dub - Platform 9 and 3/4",
        "type": "Show",
        "description": "Enjoy this short dub of this iconic scene",
        "beginnerfriendly": "False",
        "link" : "https://www.youtube.com/watch?v=YW3KgsDTEh0&pp=ygUWaGFycnkgcG90dGVyIG1hbGF5IGR1Yg%3D%3D"
    },
     {
        "name": "MLLPC books",
        "type": "Book",
        "description": "A collection of entertaining and educational short stories for children, published by the Malay Language Learning & Promotion Committee in Singapore. Has books ranging in level from KG to grade 4.",
        "beginnerfriendly": "True",
        "link" : "https://www.mllpc.sg/publications"
    },
     {
        "name": "Speak Malay!",
        "type": "Book",
        "description": "Speak Malay! by Edward S. King is good for absolute beginners with pronunciation notes, exercises for review, and and an introduction Malay grammar.",
        "beginnerfriendly": "True",
        "link" : "https://archive.org/details/speakmalaycourse0000king"
    },
    {
        "name": "Converse in Malay",
        "type": "Book",
        "description": "Dr G. Soosai compiles 200 Malay conversations concerning various topics including politics and poetry. Great if you're looking for some more intermediate/advanced beginner practice material. This book can be accessed for free with a free account on Internet Archive.",
        "beginnerfriendly": "False",
        "link" : "https://archive.org/details/converseinmalay0000gsoo/page/396/mode/2up"
    },
    {
        "name": "Nemo",
        "type": "App",
        "description": "Flashcard app with basic malay vocabulary (free set of beginner flashcards, more available for purchase) - available on android and IOS",
        "beginnerfriendly": "True",
        "link" : "http://www.nemolanguageapps.com/"
    },
    {
        "name": "Learn Malay - Set 1 of 4",
        "type": "Flashcards",
        "description": "First of four parts, this Quizlet flashcard set by Amir Ab Rahman is a great way to learn more Malay vocab!",
        "beginnerfriendly": "True",
        "link" : "https://quizlet.com/my/249479998/learn-malay-set-1-of-4-flash-cards/"
    },
    {
        "name": "Learn Malay - Set 2 of 4",
        "type": "Flashcards",
        "description": "The second of four parts, this Quizlet flashcard set by Amir Ab Rahman is a continuation of the Learn Malay series.",
        "beginnerfriendly": "True",
        "link" : "https://quizlet.com/my/249495525/learn-malay-set-2-of-4-flash-cards/"
    },
    {
        "name": "Learn Malay - Set 3 of 4",
        "type": "Flashcards",
        "description": "The third of four parts, this Quizlet flashcard set by Amir Ab Rahman is a continuation of the Learn Malay series.",
        "beginnerfriendly": "True",
        "link" : "https://quizlet.com/my/249495698/learn-malay-set-3-of-4-flash-cards/"
    },
    {
        "name": "Learn Malay - Set 4 of 4",
        "type": "Flashcards",
        "description": "This Quizlet flashcard set by Amir Ab Rahman is the final installment in his Learn Malay Quizlet set.",
        "beginnerfriendly": "True",
        "link" : "https://quizlet.com/my/249999852/learn-malay-set-4-of-4-flash-cards/"
    },
    {
        "name": "Simpulan Bahasa (Idioms)",
        "type": "Flashcards",
        "description": "By Amir Ab Rahman, this Quizlet set is great for anyone looking to explore some Malay idioms!",
        "beginnerfriendly": "False",
        "link" : "https://quizlet.com/my/252308001/learn-malay-simpulan-bahasa-flash-cards/"
    },
    
    {
        "name": "RTMKlik",
        "type": "Show",
        "description": "Access Malaysian TV programs and radio stations as they broadcast (do be aware of time zone differences though!) Also available as an app on ios and Android!",
        "beginnerfriendly": "Yes",
        "link" : "https://rtmklik.rtm.gov.my/"
    },
    {
        "name": "Malay - Mango Languages",
        "type": "Course",
        "description": "A beginner friendly course with built in review and situational dialogue. Nice for dipping your toes in!",
        "beginnerfriendly": "True",
        "link" : "https://mangolanguages.com/available-languages/"
    },
    {
        "name": "Basic Malay by pgoh13",
        "type": "Course",
        "description": "This free 64 lesson course on Basic Malay focuses on grammar, with new vocab every lesson and pronounciations from native speakers, as well as notes on how certain things may differ from Malay to Indonesian. If you're unsure, the first 3 lessons are a great intro to Malay grammar and will help you start stringing sentences together!",
        "beginnerfriendly": "True",
        "link" : "http://pgoh13.free.fr/mycourse2/table_contentsPC.htm"
    },
    {
        "name": "Studio Sembang",
        "type": "Podcast",
        "description": "Studio Sembang is a podcast about society and culture, where the host, the amazing Amelia Henderson, interviews special guests as well as gives advice to listeners who submit questions. The podcast is hosted in a mix of Malay and English and is great for those looking for a more casual, colloquial Malay experience. Find the podcast on YouTube and wherever you listen to podcasts.",
        "beginnerfriendly": "Yes",
        "link" : "https://www.youtube.com/playlist?list=PLDa2MHbIdxAtiHgtZUuJSnbwa8UoSTlOL"
    },
    {
        "name": "Keluar Sekejap",
        "type": "Podcast",
        "description": "Hosted by Khairy Jamaluddin and Shahril Hamdan, Keluar Sekejap is a podcast about politics and current events committed to mainitaining a relaxed atmosphere and using everyday, easy-to-understand Malay (vs confusing political/formal jargon). Find the podcast on YouTube and wherever you listen to podcasts.",
        "beginnerfriendly": "Yes",
        "link" : "https://www.youtube.com/@keluarsekejap"
    },
    {
        "name": "Survival Malay", "type": "Flashcards",
        "description": "If you're looking for a nice comprehensive set of Malay vocab for beginners, this compilation of survival Malay by Amir Ab Rahman is a great place to start!",
        "beginnerfriendly": "True",
        "link" : "https://quizlet.com/my/311983222/survival-malay-flash-cards/?funnelUUID=eaff0c6c-1853-49ce-abb4-a434b967ff2a"
    }
]
`
const template = `
    {
        "name": "",
        "type": "",
        "description": "",
        "beginnerfriendly": "",
        "link" : ""
    }
`
export default resources;