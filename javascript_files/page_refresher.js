// Function to handle orientation change
function handleOrientationChange(event) {
    if (event.matches) {
        // Portrait orientation
        if (lastOrientation === 'landscape') {
            location.reload(); // Reload the page
        }
        lastOrientation = 'portrait'; // Update lastOrientation
    } else {
        // Landscape orientation
        if (lastOrientation === 'portrait') {
            location.reload(); // Reload the page
        }
        lastOrientation = 'landscape'; // Update lastOrientation
    }
}

// Add listener for orientation change
var mqlPortrait = window.matchMedia("(orientation: portrait)");
var lastOrientation = mqlPortrait.matches ? 'portrait' : 'landscape'; // Initialize lastOrientation
mqlPortrait.addEventListener('change', handleOrientationChange);

// Initial check for orientation on page load
handleOrientationChange(mqlPortrait); // Pass the media query list
