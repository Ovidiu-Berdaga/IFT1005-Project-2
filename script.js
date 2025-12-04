$(document).ready(function () {
  const MAX_HYDRATATION = 8
  const MAX_SOMMEIL = 8;
  const MAX_LECTURE = 30;
  const MAX_SPORT = 60;
  const compteurHydratation = $(".compteur_hydratation");
  const compteurSommeil = $(".compteur_sommeil");
  const compteurLecture = $(".compteur_lecture");
  const compteurSport = $(".compteur_sport");
  const pourcentHydratation = $('.pourcent_hydratation');
  const pourcentSommeil = $('.pourcent_sommeil');
  const pourcentLecture = $('.pourcent_lecture');
  const pourcentSport = $('.pourcent_sport');
  const hydratationProgress = $('#hydratation')
  const sommeilProgress = $('#sommeil')
  const lectureProgress = $('#lecture')
  const SportProgress = $('#sport')

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

  function estUniteHydratation(element) {
    return element.val() == "hydratation"
  }

  function boutonClick(selecteur) {
    $(selecteur).click(function() {
      let unite = document.forms[0].unite.value;
      if(estUniteHydratation($('#habitude'))) {
        unite = document.forms[0].unite_h.value;
      }
      let habitude = [
        document.forms[0].habitude.value,
        parseInt(document.forms[0].quantite.value),
        unite
      ];
      ajouterHabitude(habitude);
      majStats()
    });
  }

  function majStats() {
    pourcentHydratation.html(
      Math.floor(compteurHydratation.html()/MAX_HYDRATATION*100)+"%"
    );
    hydratationProgress.attr("value", compteurHydratation.html());
    pourcentSommeil.html(
      Math.floor(compteurSommeil.html()/MAX_SOMMEIL*100)+"%"
    );
    pourcentLecture.html(
      Math.floor(compteurLecture.html()/MAX_LECTURE*100)+"%"
    );
    pourcentSport.html(
      Math.floor(compteurSport.html()/MAX_SPORT*100)+"%"
    );
  }



  function ajouterHabitude(habitude) {
    if(!habitude[1]) return;
    if(habitude[0] == "hydratation") {
      let valeur = Math.floor(parseInt(compteurHydratation.text())+habitude[1])
      if(valeur > MAX_HYDRATATION) valeur = MAX_HYDRATATION;
      return compteurHydratation.html(valeur);
    }

    switch (habitude[2]) {
      case "minutes":
        if(habitude[0] == "sommeil") {
          let increment = habitude[1]/60;
          let valeur = Math.floor(parseInt(compteurSommeil.text())+increment);
          if(valeur > MAX_SOMMEIL) valeur = MAX_SOMMEIL;
          compteurSommeil.html(valeur)
        }        
        if(habitude[0] == "lecture") {
          let valeur = Math.floor(parseInt(compteurLecture.text())+habitude[1]);
          if(valeur > MAX_LECTURE) valeur = MAX_LECTURE;
          compteurLecture.html(valeur)
        }        
        if(habitude[0] == "sport") {
          let valeur = Math.floor(parseInt(compteurSport.text())+habitude[1]);
          if(valeur > MAX_SPORT) valeur = MAX_SPORT;
          compteurSport.html(valeur)
        }        

        break;
      case "heures":
        if(habitude[0] == "sommeil") {
          let valeur = Math.floor(parseInt(compteurSommeil.text())+habitude[1]);
          if(valeur > MAX_SOMMEIL) valeur = MAX_SOMMEIL;
          compteurSommeil.html(valeur)
        }        
        if(habitude[0] == "lecture") {
          let increment = habitude[1]*60;
          let valeur = Math.floor(parseInt(compteurLecture.text())+increment);
          if(valeur > MAX_LECTURE) valeur = MAX_LECTURE;
          compteurLecture.html(valeur)
        }        
        if(habitude[0] == "sport") {
          let increment = habitude[1]*60;
          let valeur = Math.floor(parseInt(compteurSport.text())+increment);
          if(valeur > MAX_SPORT) valeur = MAX_SPORT;
          compteurSport.html(valeur)
        }
        break;
      default:
        break;
    }
  }
  // fin ajouter habitude Progres du jour
  elementToggle("#habitude");
  boutonClick("#btn_form");
});
