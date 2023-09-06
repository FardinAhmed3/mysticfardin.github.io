const projectTiles = document.querySelectorAll('.project');

projectTiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.classList.add('hover');
    });

    tile.addEventListener('mouseleave', () => {
        tile.classList.remove('hover');
    });
});

window.addEventListener("load", function() {
    const loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden"; 
});