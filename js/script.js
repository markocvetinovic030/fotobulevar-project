let header = document.querySelector('header');

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.backgroundColor = "#fff";
      header.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = 'none';
    }
  };
