document.addEventListener('DOMContentLoaded', () => {

    // 1. Cinematic Loader Sequence
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    
    // Lock scroll during loading
    document.body.classList.add('loading');

    // Wait for cinematic animation to finish (2.5 seconds)
    setTimeout(() => {
        // Fade out loader
        loader.style.opacity = '0';
        
        // After fade out transition (1s), hide it completely and show main content
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
            
            // Fade in main content
            mainContent.style.opacity = '1';
        }, 1000);
    }, 2500);

    // 2. Theme Toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Default to Dark Mode as per requirements
    // Check local storage for preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        htmlElement.classList.remove('dark');
    } else {
        htmlElement.classList.add('dark'); // Default deep black cinema Mode
    }

    themeToggleBtn.addEventListener('click', () => {
        // Toggle the .dark class
        htmlElement.classList.toggle('dark');
        
        // Save preference
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // 3. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
            if(htmlElement.classList.contains('dark')) {
                navbar.classList.remove('dark:border-white/10');
                navbar.classList.add('dark:border-white/20');
            }
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.remove('dark:border-white/20');
            navbar.classList.add('dark:border-white/10');
        }
    });

});
