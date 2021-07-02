var player_1 = localStorage.getItem("Player_1_username");
var player_2 = localStorage.getItem("Player_2_username");

var player_1_score = 0;
var player_2_score=0;

document.getElementById("player_1_name").innerHTML = player_1+" : ";
document.getElementById("player_2_name").innerHTML = player_2+" : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;