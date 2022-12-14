
  /****************//****************/
	/* MENU CODE VAN SANNE */
	/****************//****************/

var menuKnop = document.querySelector("header button");
menuKnop.addEventListener("click", toggleMenu);

function toggleMenu() {
  var deHeader = document.querySelector("header");
  deHeader.classList.toggle("menuOpen");
}



/**************************/
/* GELUIDJE MET BEHULP VAN SANNE */
/**************************/
var deButton = document.querySelector("section:nth-of-type(1) div a");
var hetGeluid = document.querySelector("audio");

deButton.addEventListener("click", speelGeluid);

function speelGeluid() {
	hetGeluid.play();
}



  /****************//****************/
	/* DE CARROUSSEL CODE VAN SANNE, SNAP IK NIET HELEMAAL */
	/****************//****************/

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
  
  let autoScrollInterval = 4000;
  let autoScrollTimer;
	


/**************************/
/* DERDE STREEPJES BUTTON */
/**************************/
var derdeStreepjesButton = document.querySelector("section.streepjes li button");
derdeStreepjesButton.addEventListener("click", derdeStreepjesButtonKlik);
function derdeStreepjesButtonKlik() {
  derdeStreepjesButton.classList.toggle("menuOpen");
}




  
  /****************/
	/* DE BOLLETJES */
	/****************/
  
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// het nieuwe element opzoeken
				let newElement = carrousel.querySelector(this.hash);
        
        // dan naar het element met ID scrollen
        scrollToElement(newElement);
      });
    }
	}
  
  /*****************/
	/* AUTO SCROLLEN */
	/*****************/

	// auto scroll starten
	function startAutoScroll() {
    // de class "autoScrolling" toevoegen aan de carrousel
    carrousel.classList.add("autoScrolling");
    
    // een timer aanzetten
    autoScrollTimer = setInterval(function(){
      // als de timer afgaat naar het volgende element gaan
      goToElement("next");
    }, autoScrollInterval);
   
  }

	// auto scroll stoppen
  function stopAutoScroll() {
    // de class "autoScrolling" verwijderen van de carrousel
    carrousel.classList.remove("autoScrolling");
    // de timer stopzetten
    clearInterval(autoScrollTimer);
  }

	// auto scroll initieren en activeren
  function iniAutoScroll() {
    // de play button naar kliks laten luisteren
    let playButton = carrousel.querySelector(":scope > button");
    playButton.addEventListener("click", function() {
      // als de carrousel de class "autoScrolling" heeft dan stoppen
      if(carrousel.classList.contains("autoScrolling")) {
        stopAutoScroll();
      }
      // anders starten
      else {
        startAutoScroll();
      }
    });
		
    // auto scroll initieel starten
		startAutoScroll();
	}
  
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollToElement(newElement) {
    // de carrousel naar het nieuwe element scrollen
    newElement.scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    // nieuwe element current element maken
    updateCurrentElement(newElement);
    
    // de bolletjes updaten
    updateBolletjes(newElement);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// aan nieuwe element de class current toevoegen
		newElement.classList.add("current");
	}

  
  //////////////////////
  // update bolletjes //
  function updateBolletjes(newElement){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

	// de bolletjes activeren
  iniBolletjes();	
  // de carrousel bij het begin starten
  iniStartPosition();
  // auto scroll activeren 
  // iniAutoScroll();
}

/************************/
/* DE CARROUSEL CRE??REN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("bolletjesAndAutoScroll");
  //je kunt hier ook meerdere carrousellen activeren
})();






/**************************/
/* KNOPJE OP AFBEELDING SECTION */
/**************************/
var deKnop = document.querySelector("section:nth-of-type(4) ul li button");

deKnop.addEventListener("click", toggleThingie);

function toggleThingie() {
	var deUl = document.querySelector("section:nth-of-type(4) ul");
	deUl.classList.toggle("open");
}






