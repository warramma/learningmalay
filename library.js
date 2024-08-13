import RESOURCES_DATA from './resources.js';

const RESOURCES_JSON = JSON.parse(RESOURCES_DATA)

function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


const resourcesContainer = document.querySelector('#resources-container');

function addResources(resources){
    
    for (let i = 0; i < resources.length; i++){
        const resourceCard = document.createElement("div");
        resourceCard.classList.add("resource-card");

        resourceCard.innerHTML = `
            <h2>${resources[i].name}</h2>
            <p class="type">Type: ${resources[i].type}</p>
            <p class="bfriendly">Beginner Friendly: ${resources[i].beginnerfriendly}</p>
            <p class=description">${resources[i].description}</p>
            <a rel = "noreferrer" target="_blank" href=${resources[i].link}>See resource</a>
        `;

        resourcesContainer.appendChild(resourceCard);
    }
}

addResources(RESOURCES_JSON);

//----filtering resources

function appsOnly(){
    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "app";
    });
    
    addResources(result);
}

function podcastsOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "podcast";
    });

    addResources(result);
}

function showsOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "show";
    });

    addResources(result);
}
function flashcardsOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "flashcards";
    });

    addResources(result);
}
function coursesOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "course";
    });

    addResources(result);
}
function booksOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "book";
    });

    addResources(result);
}
function edvidsOnly(){

    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.type.toLowerCase() === "educational video";
    });

    addResources(result);
}

function showBeginner(){
    deleteChildren(resourcesContainer);

    const result = RESOURCES_JSON.filter((resource)=>{
        return resource.beginnerfriendly == "True";
    });

    addResources(result);
}


//buttons

const showAll = document.querySelector('#showAll');
const apps = document.querySelector('#apps');
const podcasts = document.querySelector('#podcasts');
const shows = document.querySelector('#shows');
const flashcards = document.querySelector('#flashcards');
const courses = document.querySelector('#courses');
const books = document.querySelector('#books');
const edVids = document.querySelector('#ed_videos');
const beginner = document.querySelector('#beginner');



apps.addEventListener("click", ()=>{
    appsOnly();
    event.stopPropagation();
});
podcasts.addEventListener("click", ()=>{
    podcastsOnly();
    event.stopPropagation();
});
shows.addEventListener("click", ()=>{
    showsOnly();
    event.stopPropagation();
});
flashcards.addEventListener("click", ()=>{
    flashcardsOnly();
    event.stopPropagation();
});
courses.addEventListener("click", ()=>{
    coursesOnly();
    event.stopPropagation();
});
edVids.addEventListener("click", ()=>{
    edvidsOnly();
    event.stopPropagation();
});
books.addEventListener("click", ()=>{
    booksOnly();
    event.stopPropagation();
});
showAll.addEventListener("click", ()=>{
    deleteChildren(resourcesContainer);
    addResources(RESOURCES_JSON);
    event.stopPropagation();
});
beginner.addEventListener("click", ()=>{
    showBeginner();
    event.stopPropagation();
});