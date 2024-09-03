// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function toggleDrawer() {
    const drawer = document.getElementById('Drawer');
    drawer.classList.toggle('open');
}

// Smooth scrolling for anchor links and closing the drawer
document.querySelectorAll('.DrawerList a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scroll to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the drawer
        toggleDrawer();
    });
});


//Photo Open
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


// Function to add loading animation and start video
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            const video = entry.target.querySelector('video');
            if (video) {
                video.play();
            }
        }
    });
}

// Adjust threshold to ensure section visibility
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });

document.querySelectorAll('.About, .Videos, .Shorts').forEach(section => {
    observer.observe(section);
});

// Fallback to ensure visibility after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.About, .Videos, .Shorts').forEach(section => {
            section.classList.add('in-view');
            const video = section.querySelector('video');
            if (video) {
                video.play();
            }
        });
    }, 1000);
});