function toggleMenu() {
  let menu = document.getElementsByClassName("menu")[0];
    
  if (menu.className === "menu") {
    menu.className += " open";
  } else {
    menu.className = "menu";
  }   
}

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }

function btn (){
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
   } 
$('body').scrollspy({ target: 'menu' })
   







