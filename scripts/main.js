console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { dropDownNav } from './navBar.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})


const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const showdropDownNav = () => {
	const dropDownElement = document.querySelector('.dropdown');
	dropDownElement.innerHTML = dropDownNav();
}


navElement.addEventListener("change", (event) => {
	console.log(event);
	const materialSort = event.target.value
	if (materialSort !== "dropdown"){
		filterLegoMaterial(materialSort)
	} else {
		makeLegoList(useLegos())
	}
})

const filterLegoMaterial = (whatMaterial) => {
	console.log(useLegos());
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatMaterial)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}



const startEIA = () => {
	showdropDownNav();
	loadLegos()
		.then(legoArray => {
			makeLegoList(legoArray)
		})
}

startEIA();

navElement.addEventListener("keyup", (event) => {
	if (event.key === "Enter"){
		if (event.target.id === 'search'){
			searchBar();
		}
	}
})

function searchBar() {
	const legoID = document.getElementById('search').value
	console.log("legoID", legoID)
	const legoIDSearch = useLegos().filter(singleLego => {
		if (singleLego.LegoId ===  legoID){
			return singleLego;
		}
	})
	if (legoIDSearch.length === 0){
		document.getElementById("all-legos").innerHTML = `<h3> We couldn\'t find that Lego ID </h3>`
		}

	else { makeLegoList(legoIDSearch)
	}

}