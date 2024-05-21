document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    var tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipElements.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });

    // sidebar link clicks
    var sidebarLinks = document.querySelectorAll('.nav-link');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            sidebarLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // collapse events
    var collapses = document.querySelectorAll('.collapse');
    collapses.forEach(function (collapse) {
        collapse.addEventListener('hide.bs.collapse', function () {
            var icon = this.previousElementSibling.querySelector('.dropdown-icon');
            if (icon) {
                icon.classList.remove('rotate-180');
                icon.classList.add('rotate-0');
            }
        });

        collapse.addEventListener('show.bs.collapse', function () {
            var icon = this.previousElementSibling.querySelector('.dropdown-icon');
            if (icon) {
                icon.classList.remove('rotate-0');
                icon.classList.add('rotate-180');
            }
        });
    });

    // profile menu toggle
    var userIcon = document.querySelector('.user-icon');
    var profileMenu = document.getElementById('profileMenu');
    var closeProfileMenuButton = profileMenu.querySelector('.btn-close');

    userIcon.addEventListener('click', function () {
        if (profileMenu.style.display === 'none' || profileMenu.style.display === '') {
            profileMenu.style.display = 'block';
        } else {
            profileMenu.style.display = 'none';
        }
    });

    closeProfileMenuButton.addEventListener('click', function () {
        profileMenu.style.display = 'none';
    });
});
