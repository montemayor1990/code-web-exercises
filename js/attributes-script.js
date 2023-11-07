
// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
//     Four seconds after the page loads, use innerHTML to change the name in "profile-name".
//     Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
//     Use setTimout to create these behaviors.
//     Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.

(()  => {
    window.addEventListener('load', function() {
        // Use a setTimeout to change the image source after 2 seconds
        setTimeout(function() {
            const profilePic = document.getElementById('profile-pic');
            if (profilePic) {
                // Change the src attribute to a different image URL
                profilePic.src = 'https://example.com/your-new-image.jpg';
            }
        }, 2000); // 2000 milliseconds (2 seconds)
    });
    window.addEventListener('load', function() {
        // Use a setTimeout to change the profile name after 4 seconds
        setTimeout(function() {
            const profileName = document.getElementById('profile-name');
            if (profileName) {
                // Change the innerHTML to the new name
                profileName.innerHTML = 'David Montemayor'; // Replace 'Jane Smith' with the desired name
            }
        }, 4000); // 4000 milliseconds (4 seconds)
    });
    // Function to toggle the class and change the background color
    function toggleBackgroundColor() {
        const profileCard = document.getElementById('profile-card');

        // Check if the element exists
        if (profileCard) {
            profileCard.classList.toggle('background-toggle');
        }
    }

    // Use setInterval to toggle the class every two seconds
    setInterval(toggleBackgroundColor, 2000); // 2000 milliseconds (2 seconds)
})();