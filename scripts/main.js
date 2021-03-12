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
	const material = event.target.value
	console.log(material);
	if (material !== "0") {
		filterLegoMaterial(material)
	} else {
		makeLegoList(useLegos())
	}

	// } else if (event.target.id.startsWith("show")) { 
	// 	const color = event.target.id.split("show")[1]
	// 	filterLegos(color)
	// }
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