let header = document.querySelector('header');

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "#F3F3F3";
    header.style.boxShadow = 'rgba(0, 0, 0, 0.35) 5px 5px 15px'
    header.style.transition = '0.5s all'
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = 'none';
  }
};


let nav = document.querySelector('.right')
let hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('click', function () {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    header.style.backgroundColor = '#F3F3F3';
  } else {
    nav.style.display = "none";
    header.style.backgroundColor = "transparent";
  }
});


function FullView(ImgLink) {
    document.getElementById("full-image").src = ImgLink;
    document.getElementById("full-image-view").style.display = 'block';
}

function CloseFullView() {
  document.getElementById("full-image-view").style.display = 'none'; 
}

