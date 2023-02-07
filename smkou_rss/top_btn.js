const showOnPx = 100;
const top_btn = document.getElementById('top_btn');

const scrollContainer = () => document.documentElement || document.body;

window.onscroll = () => (scrollContainer().scrollTop > showOnPx)?
    top_btn.classList.remove('hidden'):
    top_btn.classList.add('hidden');


const goToTop = () => document.body.scrollIntoView({ behavior: 'smooth' });
top_btn.addEventListener('click', goToTop);