// Get all the bar elements
const bars = document.querySelectorAll('.bg-red-500');

// Add event listeners to each bar
bars.forEach(bar => {
  bar.addEventListener('wheel', event => {
    // Prevent default scrolling behavior
    event.preventDefault();
    
    // Get the current height of the bar
    let currentHeight = parseInt(bar.style.height.replace('px', '')) || 10;
    
    // Increase or decrease the height of the bar based on the scrolling direction
    if (event.deltaY < 0 && currentHeight < 100) {
      bar.style.height = `${currentHeight + 5}px`;
    } else if (event.deltaY > 0 && currentHeight > 0) {
      bar.style.height = `${currentHeight - 5}px`;
    }
  });
});
