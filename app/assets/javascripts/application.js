// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

function hide_spinner(){
  $('#spinner').hide();
}

function show_spinner(){
  $('#spinner').show();
}

/* dit werkt ook, geen gebruik van jquery

function show_spinner(){
  document.getElementById("spinner").style.display='block';
}

*/


/* andere syntax, anonieme functie toegewezen aan variabele bij initialisatie

var hide_spinner = function(){
  $('#spinner').hide();
}

var show_spinner = function(){
  $('#spinner').show();
}
*/

