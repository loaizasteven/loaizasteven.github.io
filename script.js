// Scroll restoration and page reload handling
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const labels = sidebar.querySelectorAll('.sidebar-label');

    function setCollapsed(collapsed) {
        if (collapsed) {
            sidebar.classList.add('collapsed');
            labels.forEach(label => label.style.display = 'none');
        } else {
            sidebar.classList.remove('collapsed');
            labels.forEach(label => label.style.display = 'inline');
        }
    }

    // Set initial collapsed state
    let collapsed = true;
    setCollapsed(collapsed);
    
    toggleBtn.addEventListener('click', () => {
        collapsed = !collapsed;
        setCollapsed(collapsed);
    });

    // Optional: collapse sidebar by default on small screens
    if (window.innerWidth < 800) {
        setCollapsed(true);
        collapsed = true;
    }
});
