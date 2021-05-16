/*JS Gallery invoke script and Video Player*/

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const invoke = urlParams.get('invoke')

function invokeGallery() {
    if (invoke == 'True') {
        document.getElementById("first").click();
      }    
}

function manualInvokeGallery() {
    lightbox_close();
    document.getElementById("second").click();  
    
}

window.onload = invokeGallery;