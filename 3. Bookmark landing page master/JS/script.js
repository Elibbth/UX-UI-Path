// FEATURES -- JS
function changerFeatures(targetItemId, control) {
    // Récupérer tous les items
    let allItems = document.querySelectorAll('.features-items');

    // Afficher l'item cible et cacher les autres
    allItems.forEach(function(item) {
        if (item.id === targetItemId) {
        item.style.display = 'flex';
        } else {
        item.style.display = 'none';
        }
    });

    // Supprimer la classe "active" de tous les contrôles
    let allControls = document.querySelectorAll('.control');
    allControls.forEach(function(ctrl) {
        ctrl.classList.remove('active');
    });

    // Ajouter la classe "active" au contrôle cliqué
    control.classList.add('active');
}
// Afficher le premier élément au chargement de la page
changerFeatures('item-1', document.querySelector('.control.active'));
// FIN -- FEATURES

