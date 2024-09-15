// index.js

document.addEventListener('DOMContentLoaded', function() {
    const pageContent = document.getElementById('page-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to load page content
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                pageContent.innerHTML = html;
            })
            .catch(error => {
                pageContent.innerHTML = '<p>Error loading page.</p>';
                console.error('Error loading page:', error);
            });
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });


    // index.js

    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('update-content-btn');
        button.addEventListener('click', function() {
        const contentPlaceholder = document.getElementById('content-placeholder');
        contentPlaceholder.innerHTML = `
            <p>New content loaded on button click.</p>
        `;
        });
    });
  
    // Load default page (home)
    loadPage('home');
});
