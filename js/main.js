var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elMan = document.querySelector(".list__result--man");
var elBicycle = document.querySelector(".list__result--bicycle");
var elCar = document.querySelector(".list__result--car");
var elPlane = document.querySelector(".list__result--plane")




elForm.addEventListener("submit", function(e){
  e.preventDefault();

  var elValue = elInput.value;
  var person = 3.6;
  var bike = 20.1;
  var transport = 70;
  var airplane = 800;


  function people(){
    return elValue / person;
  }

  function bicycle(){
    return elValue / bike;
  }

  function car(){
    return elValue / transport;
  }

  function plane(){
    return elValue / airplane;
  }

  elMan.textContent = Math.round(people());
  elBicycle.textContent = Math.round(bicycle());
  elCar.textContent = Math.round(car());
  elPlane.textContent = Math.round(plane());

})
