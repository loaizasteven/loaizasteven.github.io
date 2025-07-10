// Reading List specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Collapsible reading items
    const readingItems = document.querySelectorAll('.reading-item');
    
    readingItems.forEach(item => {
        const header = item.querySelector('h3');
        
        // Set collapsed as default
        item.classList.add('collapsed');
        
        header.addEventListener('click', function() {
            // Toggle collapsed class
            item.classList.toggle('collapsed');
            
            // Add some visual feedback
            header.style.transition = 'all 0.2s ease';
        });
        
        // Optional: Add keyboard accessibility
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
        
        // Make headers focusable for accessibility
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false'); // Default to collapsed
        
        // Update aria-expanded when collapsed state changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isCollapsed = item.classList.contains('collapsed');
                    header.setAttribute('aria-expanded', !isCollapsed);
                }
            });
        });
        
        observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
    
    // Optional: Add "Expand All" / "Collapse All" functionality
    addExpandCollapseAllButtons();
});

function addExpandCollapseAllButtons() {
    // Find a good place to add the buttons (after the header)
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    if (header && main) {
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'reading-controls';
        controlsDiv.innerHTML = `
            <button id="expandAll" class="control-btn">Expand All</button>
            <button id="collapseAll" class="control-btn">Collapse All</button>
        `;
        
        // Insert before main content
        main.parentNode.insertBefore(controlsDiv, main);
        
        // Add event listeners
        document.getElementById('expandAll').addEventListener('click', function() {
            const readingItems = document.querySelectorAll('.reading-item');
            readingItems.forEach(item => {
                item.classList.remove('collapsed');
            });
        });
        
        document.getElementById('collapseAll').addEventListener('click', function() {
            const readingItems = document.querySelectorAll('.reading-item');
            readingItems.forEach(item => {
                item.classList.add('collapsed');
            });
        });
    }
}
