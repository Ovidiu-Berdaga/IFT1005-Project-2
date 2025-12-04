$(document).ready(function () {
  // gerer changement d'unité pour hydration et vice-versa
  function uniteBase() {
    return $(".select_base");
  }

  function uniteHydratation() {
    return $(".select_hydratation");
  }

  function elementToggle(selecteur) {
    $(selecteur).click(function () {
      if (this.value == "hydratation") {
        uniteBase().css("display", "none");
        uniteHydratation().css("display", "flex");
      } else {
        uniteBase().css("display", "flex");
        uniteHydratation().css("display", "none");
      }
    });
  }
  // fin gerer changement d'unité
  // ajouter habitude Progres du jour
  function boutonClick(selecteur) {
    $(selecteur).click(function() {
      let habitude = [
        document.forms[0].habitude.value,
        document.forms[0].quantite.value,
        document.forms[0].unite.value
      ];
      
    });
  }

  function ajouterHabitude(habitude) {
    alert("yo");
  }
  // fin ajouter habitude Progres du jour
  elementToggle("#habitude");
  let habitude = boutonClick("#btn_form");
  if(!habitude)
  ajouterHabitude(habitude);
});
