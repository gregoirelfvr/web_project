document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les boutons avec la classe toggleButton
    var buttons = document.querySelectorAll(".toggleButton");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var textContainer = this.nextElementSibling; // Sélectionnez le div.paragraph suivant le bouton cliqué
            var largeBox = this.parentElement; // Sélectionnez le parent (div.Largebox) du bouton cliqué

            // Vérifiez l'état actuel du texteContainer
            if (textContainer.style.maxHeight === "300px" || textContainer.style.maxHeight === "") {
                // Si le texteContainer est caché, l'afficher
                textContainer.style.maxHeight = "1000px";
                largeBox.style.height = "auto";
                this.textContent = "-";
            } else {
                // Sinon, le cacher
                largeBox.style.height = "300px";
                textContainer.style.maxHeight = "300px";
                this.textContent = "+";
            }
        });
    });
});