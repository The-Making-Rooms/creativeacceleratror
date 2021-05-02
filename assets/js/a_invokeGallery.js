/*JS Gallery invoke script*/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const invoke = urlParams.get('invoke')


function invokeGallery() {
    if (invoke == 'True') {
        document.getElementById("first").click();
      }    
}

window.onload = invokeGallery;