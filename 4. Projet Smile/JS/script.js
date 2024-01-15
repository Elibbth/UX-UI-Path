function toggleImage() {
    let bananeImage = document.getElementById("bananeImage");

    // Vérifier l'actuelle source de l'image
    if (bananeImage.src.includes("assets/img/bananeelec.png")) {
        // Si l'image actuelle est "bananeelec.png", masquer l'image et changer la source
        bananeImage.classList.add("hidden");
        setTimeout(function() {
            bananeImage.src = "assets/img/bananeelec-on.png";
            bananeImage.classList.remove("hidden");
        }, 50); // Attendez la fin de la transition (0.5s) avant de changer la source
    } else {
        // Sinon, si l'image actuelle est différente, masquer l'image et changer la source
        bananeImage.classList.add("hidden");
        setTimeout(function() {
            bananeImage.src = "assets/img/bananeelec.png";
            bananeImage.classList.remove("hidden");
        }, 50); // Attendez la fin de la transition (0.5s) avant de changer la source
    }
}