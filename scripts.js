document.addEventListener('DOMContentLoaded', function() {
    const navLevelSecondary = document.querySelectorAll('.nav-level-secondary li');
    const navLevelTertiary = document.querySelectorAll('.nav-level-tertiary-content');
    const megaDropdown = document.querySelector('.mega-dropdown');
    const dropdown = document.querySelector('.dropdown');
    let currentOptionText = document.createElement('span');
    currentOptionText.textContent = 'Currently browsing >';
    currentOptionText.className = 'currently-browsing';

    // Function to show category links and update Currently browsing text
    function shownavLevelTertiary(categoryId) {
        // Remove "Currently browsing" text from previous category
        navLevelSecondary.forEach(category => {
            const existingText = category.querySelector('.currently-browsing');
            if (existingText) {
                category.removeChild(existingText);
            }
        });

        navLevelTertiary.forEach(link => {
            if (link.id === categoryId) {
                link.style.display = 'block';
                // Highlight the corresponding category
                navLevelSecondary.forEach(category => {
                    if (category.dataset.category === categoryId) {
                        category.classList.add('active');
                        // Append "Current option" text below the category name
                        category.appendChild(currentOptionText.cloneNode(true));
                    } else {
                        category.classList.remove('active');
                    }
                });
            } else {
                link.style.display = 'none';
            }
        });
    }

    // Event listener for hovering over navLevelSecondary
    navLevelSecondary.forEach(category => {
        category.addEventListener('mouseover', function() {
            const categoryId = category.dataset.category;
            shownavLevelTertiary(categoryId);
        });
    });

    // Event listeners for hovering over dropdown and mega dropdown
    dropdown.addEventListener('mouseover', function() {
        megaDropdown.style.display = 'flex';
    });

    megaDropdown.addEventListener('mouseover', function() {
        megaDropdown.style.display = 'flex';
    });

    megaDropdown.addEventListener('mouseout', function(event) {
        // Check if the mouse is not over the mega dropdown or its children
        if (!megaDropdown.contains(event.relatedTarget)) {
            megaDropdown.style.display = 'none';
            // Hide navLevelTertiary when hiding mega dropdown
            navLevelTertiary.forEach(link => {
                link.style.display = 'none';
            });
            // Remove active class from all navLevelSecondary and "Current option" text
            navLevelSecondary.forEach(category => {
                category.classList.remove('active');
                const existingText = category.querySelector('.currently-browsing');
                if (existingText) {
                    category.removeChild(existingText);
                }
            });
        }
    });
});
