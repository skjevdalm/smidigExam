var items = [
	"TheMurderer-crop",
	"TreesByTheSea-crop",
	"TwoWomenByTheVerandaSteps-crop",
	"TwoWomenIntheGarden-crop",
	"UninvitedGuests-crop",
	"WavesAgainstTheShore-crop",
]; // Updated array of items

function generateDropdownItems() {
	var dropdown = document.getElementById("dropdown");
	dropdown.innerHTML = ""; // Clear previous items

	var fragment = document.createDocumentFragment(); // Create a DocumentFragment to hold the items

	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var link = document.createElement("a");
		link.href = "#";
		link.innerText = item;
		link.addEventListener("click", function () {
			selectItem(this.innerText);
		});
		fragment.appendChild(link);
	}

	dropdown.appendChild(fragment); // Append the DocumentFragment to the dropdown

	// Adjust the height of the dropdown based on the number of visible items
	var visibleItems = dropdown.getElementsByTagName("a");
	var itemHeight = visibleItems[0].offsetHeight;
	var maxHeight = itemHeight * visibleItems.length;
	dropdown.style.maxHeight = maxHeight + "px";
}

function filterItems() {
	var input, filter, dropdown, items, a, i;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	dropdown = document.getElementById("dropdown");
	items = dropdown.getElementsByTagName("a");

	for (i = 0; i < items.length; i++) {
		a = items[i];
		if (a.innerText.toUpperCase().indexOf(filter) > -1) {
			a.style.display = "";
		} else {
			a.style.display = "none";
		}
	}

	if (filter.length > 0) {
		dropdown.classList.add("show");
	} else {
		dropdown.classList.remove("show");
	}
}

function selectItem(item) {
	document.getElementById("searchInput").value = item;
	document.getElementById("dropdown").classList.remove("show");
}

// Close the dropdown when clicking outside
window.onclick = function (event) {
	if (!event.target.matches("#searchInput")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

// Generate initial dropdown items
generateDropdownItems();

// Add event listener to the search input field
document.getElementById("searchInput").addEventListener("keyup", filterItems);

    // Function to show tooltips
    function showTooltip(element) {
        var tooltip = element.querySelector(".tooltip");
        tooltip.style.visibility = "visible";
    }

    // Function to hide tooltips
    function hideTooltip(element) {
        var tooltip = element.querySelector(".tooltip");
        tooltip.style.visibility = "hidden";
    }

    // Attach event listeners to buttons
    var buttons = document.getElementsByClassName("floor-button");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener("mouseover", function() {
            showTooltip(this);
        });
        button.addEventListener("mouseout", function() {
            hideTooltip(this);
        });
    }