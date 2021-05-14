function getImages(pageNumber, successCallback) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
    success: successCallback
    });
}