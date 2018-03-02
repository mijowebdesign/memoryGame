let game = document.querySelector(".game");
var text = '';

// array with icons
var icons = [
  '<i class="fa fa-picture-o" aria-hidden="true"></i>' ,
  '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
  '<i class="fa fa-window-close" aria-hidden="true"></i>',
  '<i class="fa fa-address-card" aria-hidden="true"></i>',
  '<i class="fa fa-bath" aria-hidden="true"></i>',
  '<i class="fa fa-grav" aria-hidden="true"></i>',
  '<i class="fa fa-thermometer-half" aria-hidden="true"></i>',
  '<i class="fa fa-handshake-o" aria-hidden="true"></i>',
  '<i class="fa fa-wpexplorer" aria-hidden="true"></i>',
  '<i class="fa fa-podcast" aria-hidden="true"></i>',
  '<i class="fa fa-bicycle" aria-hidden="true"></i>',
  '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
  '<i class="fa fa-car" aria-hidden="true"></i>',
  '<i class="fa fa-certificate" aria-hidden="true"></i>',
  '<i class="fa fa-cubes" aria-hidden="true"></i>',
  '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>',
  '<i class="fa fa-gavel" aria-hidden="true"></i>',
  '<i class="fa fa-flask" aria-hidden="true"></i>',
  '<i class="fa fa-picture-o" aria-hidden="true"></i>' ,
  '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
  '<i class="fa fa-window-close" aria-hidden="true"></i>',
  '<i class="fa fa-address-card" aria-hidden="true"></i>',
  '<i class="fa fa-bath" aria-hidden="true"></i>',
  '<i class="fa fa-grav" aria-hidden="true"></i>',
  '<i class="fa fa-thermometer-half" aria-hidden="true"></i>',
  '<i class="fa fa-handshake-o" aria-hidden="true"></i>',
  '<i class="fa fa-wpexplorer" aria-hidden="true"></i>',
  '<i class="fa fa-podcast" aria-hidden="true"></i>',
  '<i class="fa fa-bicycle" aria-hidden="true"></i>',
  '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
  '<i class="fa fa-car" aria-hidden="true"></i>',
  '<i class="fa fa-certificate" aria-hidden="true"></i>',
  '<i class="fa fa-cubes" aria-hidden="true"></i>',
  '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>',
  '<i class="fa fa-gavel" aria-hidden="true"></i>',
  '<i class="fa fa-flask" aria-hidden="true"></i>'
];

// IIFE make grid with boxes and icons
(function grid() {
  for (var i = 0; i < 36; i++) {
    var rand = Math.floor(Math.random()*icons.length);

    text += '<div class="box"> <div class="back">' + icons[rand] + '</div> <div class="front"></div> </div>';
    icons.splice(rand, 1);
    }
    game.innerHTML = text;
}() );

// setting variables for grid
let boxs = document.querySelectorAll(".box");
let click = 0;
let activeArr = [];
var end = 0;
let allActiveArr =[];

// make boxes clicable
for (var i = 0; i < 36; i++) {
  boxs[i].addEventListener('click', flip);
}

//function for fliping boxes
function flip() {
click++;
  this.removeEventListener('click', flip);
  this.children[0].classList.add('activeBack');
  this.children[1].classList.add('activeFront');
//aray with temporary open box
  activeArr.push(this);

if (click == 2) {
  check()
}
};
// checking if two open boxes is equal
function check() {

    for (var i = 0; i < 36; i++) {
      boxs[i].removeEventListener('click', flip);
    }
    click = 0;

    if (activeArr[0].children[0].innerHTML == activeArr[1].children[0].innerHTML) {
      // array with all active boxes
        allActiveArr.push(activeArr[0]);
        allActiveArr.push(activeArr[1]);
        console.log(allActiveArr);
        // clean aray with temporary open boxes
        activeArr.splice(0,2);
      end++

      if (end == 18) {
          setTimeout(function () {
            alert('GAME OVER')
          }, 100);
      }
    }else {

      setTimeout(function () {
        activeArr[0].children[0].classList.remove('activeBack');
        activeArr[0].children[1].classList.remove('activeFront');

        activeArr[1].children[0].classList.remove('activeBack');
        activeArr[1].children[1].classList.remove('activeFront');

          activeArr.splice(0,2)

      }, 1000);

      }


    for (var i = 0; i < 36; i++) {
      boxs[i].addEventListener('click', flip);
  }
  // move clicks from active and chatch box
for (var i = 0; i < allActiveArr.length; i++) {
  allActiveArr[i].removeEventListener('click', flip)
}

};
