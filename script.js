// Convention - on attends que la page soit chargée
$(document).ready(function(){

  // On crée et initialise notre variable score
  var score = 0;

  // Action du click sur un des 3 options
  $(".joueur > .fa").on("click", function(){

    // Cache les 2 options non choisies par le joueur
    $(".joueur > .fa").not(this).css("display", "none");

    // Crée un nombre aléatoire entre 1 et 3
    var ordiChoix = Math.floor((Math.random()*3)+1);

    // Choisis une des 3 réponses de l'ordinateur
    $(".ordinateur > .fa:nth-child("+ordiChoix+")").addClass("reponse");

    // Conditions pour interpréter tous les résultats possibles :
    // Cas égalités
    if($(this).hasClass("fa-hand-rock-o") && $(".reponse").hasClass("fa-hand-rock-o")) {
      alert("Egalité !");
    }
    if($(this).hasClass("fa-hand-paper-o") && $(".reponse").hasClass("fa-hand-paper-o")) {
      alert("Egalité !");
    }
    if($(this).hasClass("fa-hand-scissors-o") && $(".reponse").hasClass("fa-hand-scissors-o")) {
      alert("Egalité !");
    }

    // Cas gagnants
    if($(this).hasClass("fa-hand-rock-o") && $(".reponse").hasClass("fa-hand-scissors-o")) {
      alert("Gagné !");
      score += 1;
    }
    if($(this).hasClass("fa-hand-paper-o") && $(".reponse").hasClass("fa-hand-rock-o")) {
      alert("Gagné !");
      score += 1;
    }
    if($(this).hasClass("fa-hand-scissors-o") && $(".reponse").hasClass("fa-hand-paper-o")) {
      alert("Gagné !");
      score += 1;
    }

    // Cas perdants
    if($(this).hasClass("fa-hand-rock-o") && $(".reponse").hasClass("fa-hand-paper-o")) {
      alert("Perdu !");
      score -= 1;
    }
    if($(this).hasClass("fa-hand-scissors-o") && $(".reponse").hasClass("fa-hand-rock-o")) {
      alert("Perdu !");
      score -= 1;
    }
    if($(this).hasClass("fa-hand-paper-o") && $(".reponse").hasClass("fa-hand-scissors-o")) {
      alert("Perdu !");
      score -= 1;
    }

    // On affiche le nouveau score
    $("#score").html("<p>Score : "+score+"</p>");

    // On remets les éléments dans leur état initial pour rejouer
    $(".joueur > .fa").css("display", "inline-block");
    $(".reponse").removeClass("reponse");

  });
});
