
// Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobil Menü Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const barsIcon = document.getElementById('bars');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        barsIcon.className = 'fas fa-bars fa-2x';
    } else {
        mobileMenu.style.display = 'block';
        barsIcon.className = 'fas fa-times fa-2x';
    }
});

// Sayfa İçi Kaydırma (Smooth Scroll)
function scrollToMain() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Menü dışına tıklandığında mobile menüyü kapat
window.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.style.display = 'none';
        barsIcon.className = 'fas fa-bars fa-2x';
    }
});
