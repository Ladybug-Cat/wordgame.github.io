function adduser(){
    var player1 = document.getElementById("pLaYeR1").value;
    var player2 = document.getElementById("pLaYeR2").value;
    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);
    window.location="game_page.html";
}