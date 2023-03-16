// PorfolioFilter

const buttons = document.querySelectorAll('.btn-porto');
const images = document.querySelectorAll('.item');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;

    images.forEach((item) => {
      if(filter === 'all'){
        item.classList.remove('hide'); // Remove the hide class to show the item
      } else {
        if(item.classList.contains(filter)){
          item.classList.remove('hide');
        } else {
          item.classList.add('hide'); // Add the hide class to hide the item
        }
      }
    });
  });
});


// year update

const actualYear = new Date().getFullYear();
document.getElementById('year').innerHTML = actualYear;



// navbar hide
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

let isNavbarHidden = false;

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navbarCollapse.classList.add('hide');
    isNavbarHidden = true;
  });
});

navbarToggler.addEventListener('click', () => {
  if (isNavbarHidden) {
    navbarCollapse.classList.remove('hide');
    isNavbarHidden = false;
  }
});

// Hide navbar after 5 seconds
setTimeout(() => {
  navbarCollapse.classList.add('hide');
  isNavbarHidden = true;
}, 50);


document.querySelector('.navbar-toggler').onclick = () =>{
  document.querySelector('.navbar-collapse').classList.toggle('collapso');
}


//  WOW  ANIMATION
new WOW().init();



document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));


// Animation scrool

var smoothScroll = {

  move : function (old, des, actual) {
    easeIn = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = easeIn(actual / 300);
    delta = des - old;
    delta *= ease;
    delta += old;
    window.scrollTo(0, delta);
    if (actual < 300) {
      window.requestAnimationFrame(function () {
        smoothScroll.move(old, des, actual);
      });
    }
  },

  linkInit : function (e) {
    e.preventDefault();
    link = e.target.getAttribute("href").substr(1);
    block = document.getElementById(link).offsetTop;
    client = document.documentElement.scrollTop;

    smoothScroll.move(client, block, 0);
  },

  init : function () {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      link = links[i].getAttribute("href");
      if (link.search("#") == 0 & link.substr(1) != "") {
        links[i].onclick = smoothScroll.linkInit;
      }
    }
  }
};

window.onload = smoothScroll.init;


// validation form
$(function () {
  $('.myForm').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return false; // Don't submit form for this demo
  });
});