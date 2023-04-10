let appFooter = `
<img src="./images/logo_svg.svg" alt="logo" id="footer-logo">
<p>Copyright © 2023 Fulbourn Cleaning Inc</p>
<div id="footer-social-links">
    <a href="https://instagram.com" id="footer-instagram" target="_blank" class="footer-link">
        <img src="./images/instagram_blank.svg" alt="instagram" id="footer-insta-img" class="footer-link-icon">
    </a>
    <a href="https://facebook.com" id="footer-facebook" target="_blank" class="footer-link">
        <img src="./images/facebook_blank.svg" alt="facebook" id="footer-facebook-img" class="footer-link-icon">
    </a>
    <a href="https://twitter.com" id="footer-twitter" target="_blank" class="footer-link">
        <img src="./images/twitter_blank.svg" alt="twitter" id="footer-twitter-img" class="footer-link-icon">
    </a>
</div>
`

let appHeader = `
<div id="header-left">
    <img src="./images/logo_svg.svg" alt="logo" id="header-logo">
    <nav></nav>
</div>
<div id="header-right">
    <button id="mobile-menu-button">
        <img src="./images/icon-menu.svg" alt="" id="mobile-menu-image">
    </button>
</div>
`

document.querySelector('header').innerHTML = appHeader;
document.querySelector('footer').innerHTML = appFooter;

const footerLinks = document.querySelectorAll('.footer-link')

footerLinks.forEach((element) => {
    element.addEventListener('mouseover', ev => {
        const target = ev.target
        if (target && target.tagName === 'IMG') {
            target.src = "./images/" + target.alt + '_hover.svg'
        }
    })
    element.addEventListener('mouseleave', ev => {
        const target = ev.target
        if (target && target.tagName === 'A') {
            target.querySelector('img').src = "./images/" + target.querySelector('img').alt + '_blank.svg'
        }
    })
})
