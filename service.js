function getImages(pageNumber) {
    let promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

function getTasks() {
    let promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=534235`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTasks(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=534235&title=${title}`);
    return promise.then((response) => {
        return response.data;
    });
}