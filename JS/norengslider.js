function updateButtonContent(buttonId, translationAttribute) {
	const button = document.getElementById(buttonId);
	button.textContent = button.dataset[translationAttribute];
}

function updateTooltips(language) {
	var tooltipElements = document.getElementsByClassName("tooltip");
	for (var i = 0; i < tooltipElements.length; i++) {
		var tooltip = tooltipElements[i];
		var translationKey = tooltip.getAttribute(
			"data-translation-" + language
		);
		tooltip.textContent = translationKey;
	}
}

function handleLanguageToggle(event) {
	const isChecked = event.target.checked;

	if (isChecked) {
		// Switch to Norwegian content for buttons
		updateButtonContent("button1", "translationNo");
		updateButtonContent("button2", "translationNo");
		updateButtonContent("button3", "translationNo");
		updateButtonContent("button4", "translationNo");
		updateButtonContent("button5", "translationNo");
		updateButtonContent("button6", "translationNo");
		updateButtonContent("button7", "translationNo");
		updateButtonContent("button8", "translationNo");
		updateButtonContent("button9", "translationNo");
		updateButtonContent("button10", "translationNo");
		updateButtonContent("button11", "translationNo");
		updateButtonContent("button12", "translationNo");
		updateButtonContent("button13", "translationNo");
		// Add more buttons here
	} else {
		// Switch to English content for buttons
		updateButtonContent("button1", "translationEn");
		updateButtonContent("button2", "translationEn");
		updateButtonContent("button3", "translationEn");
		updateButtonContent("button4", "translationEn");
		updateButtonContent("button5", "translationEn");
		updateButtonContent("button6", "translationEn");
		updateButtonContent("button7", "translationEn");
		updateButtonContent("button8", "translationEn");
		updateButtonContent("button9", "translationEn");
		updateButtonContent("button10", "translationEn");
		updateButtonContent("button11", "translationEn");
		updateButtonContent("button12", "translationEn");
		updateButtonContent("button13", "translationEn");

		// Add more buttons here
	}

	// Update tooltips separately
	var language = isChecked ? "no" : "en";
	updateTooltips(language);
}

var languageToggle = document.getElementById("language-toggle");
languageToggle.addEventListener("change", handleLanguageToggle);

window.addEventListener("DOMContentLoaded", function () {
	// Update tooltips on page load
	updateTooltips("en");
});
