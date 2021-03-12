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


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();

// function dropDownNav {
// 	document.getElementById("dropdown").classList.toggle("show");
// }

// window.onclick = dropDownNav(e) {
// 	if (!e.target.matches('.dropbtn')) {
// 	var myDropdown = document.getElementById("dropdown");
// 	  if (myDropdown.classList.contains('${brick.Material}')) {
// 		myDropdown.classList.remove('${brick.Material}');
// 	  }
// 	}
//   }

sortItems($("${brick.Material}")[0]); // get the select element

function sortItems(selElem) {
    let optionsToSort = selElem.options; // get the options from the dropdown
    let selectedOption = selElem.value; // in case there's an item already selected, preserve it

    // Forms uses Lodash, so we can too. 
    // Why write a sorting function when somebody else can do it for us?
    let sortedOptions = _.sortBy(optionsToSort, function(item) {
        					return item.value;
    					});

    $(selElem).empty(); // empty the dropdown
    $(selElem).append(sortedOptions); // refill it with sorted goodness
  
    $(selElem).value = selectedOption; // if there was a previously selected item, restore it
}