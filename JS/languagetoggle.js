function toggleLanguage() {
	var languageToggle = document.getElementById("language-toggle");
	var translationElements = document.querySelectorAll(
		"[data-translation-en], [data-translation-no]"
	);

	for (var i = 0; i < translationElements.length; i++) {
		var translationElement = translationElements[i];
		var translationEn = translationElement.getAttribute(
			"data-translation-en"
		);
		var translationNo = translationElement.getAttribute(
			"data-translation-no"
		);

		if (languageToggle.checked) {
			translationElement.textContent = translationNo;
			if (translationElement.tagName === "INPUT") {
				translationElement.placeholder = translationNo;
			}
		} else {
			translationElement.textContent = translationEn;
			if (translationElement.tagName === "INPUT") {
				translationElement.placeholder = translationEn;
			}
		}
	}
}

// Attach an event listener to the language toggle checkbox
document.getElementById("language-toggle");
document.addEventListener("change", toggleLanguage);
