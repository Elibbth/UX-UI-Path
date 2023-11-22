document.addEventListener('DOMContentLoaded', function () {
    const shareLink = document.querySelector('.share-link');
    const socialLinks = document.querySelector('.social-links');

    shareLink.addEventListener('click', function () {
        socialLinks.classList.toggle('show');
    });
});