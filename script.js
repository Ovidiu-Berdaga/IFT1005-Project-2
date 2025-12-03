$(document).ready(
  function() {
    // gerer changement d'unité pour hydration et vice-versa
    function uniteBase() {
      return $(".select_base");
    }

    function uniteHydratation() {
      return $(".select_hydratation");
    }

    function elementToggle(selecteur) {
      $(selecteur).click(
        function() {
          if(this.value == "hydratation") {
            uniteBase().css("display","none");
            uniteHydratation().css("display","flex");
          } else {
            uniteBase().css("display","flex");
            uniteHydratation().css("display","none")
          }
        }
      )
    }
    // fin gerer changement d'unité

    elementToggle("#habitude")
  }
);
