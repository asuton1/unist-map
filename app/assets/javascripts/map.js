window.onload = function(){
    
    /* --------------- PRIKAZ/SKRIVANJE FILTERA ZA MAPU --------------- */

    let menu = document.querySelector("#menu");
    menu.addEventListener("click", handleMenuClick);
    function handleMenuClick(e){
        let menu = e.currentTarget;
        if(menu.classList.contains("displayed")){
            menu.classList.remove("displayed");
            let secondHeader = document.querySelector("#secondary-header");
            secondHeader.classList.add("hidden");
            let zoom = document.querySelector(".leaflet-top");
            zoom.style.padding = "0px 0px 0px 0px";
        }
        else{
            menu.classList.add("displayed");
            let secondHeader = document.querySelector("#secondary-header");
            secondHeader.classList.remove("hidden");
            let zoom = document.querySelector(".leaflet-top");
            zoom.style.padding = "68px 0px 0px 0px";
        }
    }

	/* --------------- FILTRIRANJE FAKULTETA NA MAPI --------------- */

 	let fakultet = document.querySelector("#fakultet");
	fakultet.addEventListener("click", handleFilterFakultetClick);
	function handleFilterFakultetClick(e){
    	let fakultet = e.currentTarget;
    	if(fakultet.classList.contains("selected")){
    		fakultet.classList.remove("selected");
    		let markeri = document.querySelectorAll(".Fakultet");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
    	}
    	else{
    		fakultet.classList.add("selected");
    		let markeri = document.querySelectorAll(".Fakultet");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
    	}
	}

	/* --------------- FILTRIRANJE ODJELA NA MAPI --------------- */

	let odjel = document.querySelector("#odjel");
	odjel.addEventListener("click", handleFilterOdjelClick);
	function handleFilterOdjelClick(e){
    	let odjel = e.currentTarget;
    	if(odjel.classList.contains("selected")){
    		odjel.classList.remove("selected");
    		let markeri = document.querySelectorAll(".Odjel");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
    	else{
    		odjel.classList.add("selected");
    		let markeri = document.querySelectorAll(".Odjel");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
    	}
	}

    /* --------------- FILTRIRANJE AKADEMIJA NA MAPI --------------- */

    let akademija = document.querySelector("#akademija");
    akademija.addEventListener("click", handleFilterAkademijaClick);
    function handleFilterAkademijaClick(e){
        let akademija = e.currentTarget;
        if(akademija.classList.contains("selected")){
            akademija.classList.remove("selected");
            let markeri = document.querySelectorAll(".Akademija");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
        else{
            akademija.classList.add("selected");
            let markeri = document.querySelectorAll(".Akademija");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
        }
    }

    /* --------------- FILTRIRANJE INFRASTRUKTURNIH JEDINICA NA MAPI --------------- */

    let infrastrukt = document.querySelector("#infrastrukt");
    infrastrukt.addEventListener("click", handleFilterInfrastruktClick);
    function handleFilterInfrastruktClick(e){
        let infrastrukt = e.currentTarget;
        if(infrastrukt.classList.contains("selected")){
            infrastrukt.classList.remove("selected");
            let markeri = document.querySelectorAll(".Infrastrukturnajedinica");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
        else{
            infrastrukt.classList.add("selected");
            let markeri = document.querySelectorAll(".Infrastrukturnajedinica");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
        }
    }

    /* --------------- FILTRIRANJE MENZA NA MAPI --------------- */

    let menza = document.querySelector("#menza");
    menza.addEventListener("click", handleFilterMenzaClick);
    function handleFilterMenzaClick(e){
        let menza = e.currentTarget;
        if(menza.classList.contains("selected")){
            menza.classList.remove("selected");
            let markeri = document.querySelectorAll(".Prehrana");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
        else{
            menza.classList.add("selected");
            let markeri = document.querySelectorAll(".Prehrana");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
        }
    }

    /* --------------- FILTRIRANJE STUDENTSKIH DOMOVA NA MAPI --------------- */

    let dom = document.querySelector("#dom");
    dom.addEventListener("click", handleFilterDomClick);
    function handleFilterDomClick(e){
        let dom = e.currentTarget;
        if(dom.classList.contains("selected")){
            dom.classList.remove("selected");
            let markeri = document.querySelectorAll(".Studentskidom");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
        else{
            dom.classList.add("selected");
            let markeri = document.querySelectorAll(".Studentskidom");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
        }
    }

    /* --------------- FILTRIRANJE STUDENTSKIH UDRUGA NA MAPI --------------- */

    let udruga = document.querySelector("#udruga");
    udruga.addEventListener("click", handleFilterUdrugaClick);
    function handleFilterUdrugaClick(e){
        let udruga = e.currentTarget;
        if(udruga.classList.contains("selected")){
            udruga.classList.remove("selected");
            let markeri = document.querySelectorAll(".Studentskaudruga");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("visible");
                markeri[i].classList.add("hidden");
            }
        }
        else{
            udruga.classList.add("selected");
            let markeri = document.querySelectorAll(".Studentskaudruga");
            for(let i = 0; i < markeri.length; i++){
                markeri[i].classList.remove("hidden");
                markeri[i].classList.add("visible");
            }
        }
    }
    /* --------------- PRIKAZ INFORMACIJA O MAPI --------------- */
    let info = document.querySelector("#info");
    info.addEventListener("click", handleInfoClick);
    function handleInfoClick(){
        document.getElementById("overlay").style.display = "flex";
    }
    
    let exit = document.querySelector("#exit");
    exit.addEventListener("click", handleExitClick);
    function handleExitClick(){
        document.getElementById("overlay").style.display = "none";
    }
}