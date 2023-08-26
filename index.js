const projectTiles = document.querySelectorAll('.project');

// Add event listeners for hover effects
projectTiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.classList.add('hover');
    });

    tile.addEventListener('mouseleave', () => {
        tile.classList.remove('hover');
    });
});
