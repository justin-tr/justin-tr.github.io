$(function(){
    $("body").prepend(`<header id="navigation-bar"></header>`);
    $("body").append(`<footer id="page-footer"></footer>`);
    $("#navigation-bar").load("/navigation-bar.html");
    $("#page-footer").load("/footer.html");
  });
