const footerSpanRef = document.querySelector('.footer__year');

const date = new Date();
const currentYear = date.getFullYear().toString();

footerSpanRef.textContent = currentYear;