/**
 * KRUNCH Academy - Homepage & Navigation Script
 * This file handles the mobile navigation menu toggle safely
 * across index.html and subject-navigator.html.
 */

// 1. Define the Mobile Menu Toggle Function
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileNav && menuIcon) {
        if (mobileNav.classList.contains('hidden')) {
            // Open Menu
            mobileNav.classList.remove('hidden');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            // Close Menu
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    }
}

// 2. Safely attach the click listener once the page loads
// Using optional chaining (?.) so it doesn't crash if a page is missing the button
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
});
