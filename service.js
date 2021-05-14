// function getImages(pageNumber) {
//     let promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`);
//     return promise;
// }

function getImages(pageNumber) {
    let promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}