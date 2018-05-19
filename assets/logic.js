$(document).ready(function() {
  console.log("is working");

  var attacks = 0;
  var toHit = 0;
  var toWound = 0;
  var rend = 0;

  var atkInput = $("#attack-input").val();
  var hitInput = $("#hit-input").val();
  var woundInput = $("#wound-input").val();
  var rendInput = $("#rend-input").val();
  var successInput = $("#hit-input").val();

  var successHits = 0

  //function for attacks
  function renderattack() {
    $("#attack-output").empty();
    attacks = 0;
    var attackNumber = $("#attack-input").val();
    attackNumber = parseInt(attackNumber);
    attacks = attacks + attackNumber;
    $("#attack-output").append(attacks);
    console.log(attacks);
  }

  //function for hits
  function renderhit() {
    $("#hit-output").empty();
    toHit = 0;
    var hitNumber = $("#hit-input").val();
    hitNumber = parseInt(hitNumber);
    console.log(typeof hitNumber);
    toHit = toHit + hitNumber;
    $("#hit-output").append(toHit);
  }
  //function for wounds
  function renderwound() {
    $("#wound-output").empty();
    toWound = 0;
    var woundNumber = $("#wound-input").val();
    woundNumber = parseInt(woundNumber);
    console.log(typeof woundNumber);
    toWound = toWound + woundNumber;
    $("#wound-output").append(toWound);
    console.log(woundNumber);
  }

  //function for rend
  function renderrend() {
    $("#rend-output").empty();
    var rendNumber = $("#rend-input").val();
    $("#rend-output").append(rendNumber);
    console.log(rendNumber);
  }

  //   //function for success
  //   function renderattack() {
  //     $("#attack-output").empty();
  //     var attackNumber = $("#attacks-input").val();
  //     $("#success-output").append(attackNumber);
  //   }

  //Button for Attacks
  $("#numAttacks").on("click", function(event) {
    event.preventDefault();
    renderattack();
  });
  //Button for hits
  $("#toHit").on("click", function(event) {
    event.preventDefault();
    renderhit();
  });
  //Button for wounds
  $("#toWound").on("click", function(event) {
    event.preventDefault();
    renderwound();
  });
  //Button for rend
  $("#rendValue").on("click", function(event) {
    event.preventDefault();
    renderrend();
  });

  //Hit Success
  function hitSuccess() {
    successHits = successHits + (attacks * ((7 - toHit) / 6));
    $("#hitSuccess-output").append(successHits);
  }

  //Wound Success
  function woundSuccess() {
    var woundSuccess = successHits * ((7 - toHit) / 6);
    $("#woundSuccess-output").append(woundSuccess);
  }

  //Success Click
  $("#Success").on("click", function(event) {
    event.preventDefault();
    renderattack();
    renderhit();
    renderwound();
    hitSuccess();
    woundSuccess();
  });
});
