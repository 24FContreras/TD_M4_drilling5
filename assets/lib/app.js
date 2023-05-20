"use strict";

console.log("🟢 Connected!");

$(document).ready(function () {
  $("#busquedaEnTienda").submit(function (event) {
    event.preventDefault();
    var value = $("#inputTienda").val();

    if (value) {
      $(this).css({
        color: "green",
        "border-color": "green",
        background: "#90ef8f"
      });

      $("#inputTienda").css({
        color: "inherit"
      });
    } else {
      $(this).css({
        color: "",
        "border-color": "",
        background: ""
      });

      $("#inputTienda").css({
        color: ""
      });
    }
  });

  $("#busquedaOtrasTiendas").submit(function (event) {
    event.preventDefault();
    var value = $("#inputOtrasTiendas").val();

    if (value) {
      $(this).css({
        color: "#d7870e",
        "border-color": "#d7870e",
        background: "yellow"
      });

      $("#inputOtrasTiendas").css({
        color: "inherit"
      });
    } else {
      $(this).css({
        color: "",
        "border-color": "",
        background: ""
      });

      $("#inputOtrasTiendas").css({
        color: ""
      });
    }
  });

  $("#busquedaOnline").submit(function (event) {
    event.preventDefault();
    var value = $("#inputOnline").val();

    if (value) {
      $(this).css({
        color: "blue",
        "border-color": "blue",
        background: "#add8e6"
      });

      $("#inputOnline").css({
        color: "blue"
      });
    } else {
      $(this).css({
        color: "",
        "border-color": "",
        background: ""
      });

      $("#inputOnline").css({
        color: ""
      });
    }
  });
});