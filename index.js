const resultBlock = document.querySelector("#result");
const pageNumber = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumber);
    promise.then(onImagesRecieved);
});

function onImagesRecieved (array) {
    array.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    })
}

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksRecieved);
});

createTasks('learn JS').then((data) => {
    console.log(data);
});

function onTasksRecieved (array) {
    array.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = el.title;
        document.querySelector('#task-result').appendChild(li);
    })
}