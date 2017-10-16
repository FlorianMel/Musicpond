$(function(){
    $('.deplie').hide(); // on masque tout 
    $('.bouton-deplier').click(function(event){
        event.preventDefault(); // on ne suit pas le lien
        $(t