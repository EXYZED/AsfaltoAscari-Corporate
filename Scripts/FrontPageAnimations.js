window.addEventListener('load', () => {
  document.body.style.opacity = '1';

})

function OutFMTransition(str) {
  document.getElementById("frontmain").style.opacity = "0";
  window.setTimeout(replaceA, 1050);

  function replaceA() {  
    if (str == 'Broadcasting') {
      var el = document.querySelector('body');
      var newEl = document.createElement('p');
      newEl.innerHTML = '<b>	Error 403 Authentication Required</b>';
      el.parentNode.replaceChild(newEl, el);
    }
	if (str == 'Broadcasting') {
      var el2 = document.querySelector('body');
      var newEl2 = document.createElement('p');
      newEl2.innerHTML = '<b>	Error 403 Authentication Required</b>';
      el2.parentNode.replaceChild(newEl2, el2);
    }
	if (str == 'Broadcasting') {
      var el3 = document.querySelector('body');
      var newEl3 = document.createElement('p');
      newEl3.innerHTML = '<b>	Error 403 Authentication Required</b>';
      el3.parentNode.replaceChild(newEl3, el3);
    }
	if (str == 'Asfalto') {
     window.location.href = 'https://AsfaltoAscari.com/';
    }
  }

}
