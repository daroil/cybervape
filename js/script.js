// Flavor data
const flavors = [
    {
        name: "CHARGE",
        desc: "Яблоко-жвачка.",
        image: "img/Blossom.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: 'white'
    },
    {
        name: "BLOSSOM",
        desc: "Вишнево-ягодный йогурт.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: 'purple'
    },
    {
        name: "MIDNIGHT",
        desc: "Черника.",
        image: "img/wizard_2.jpg",
        progress: 100,
        progress_freeze: 25,
        color: '#BF00FF'
    },
    {
        name: "GUISE",
        desc: "Премиальный табак.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus",
        progress: 100,
        progress_freeze: 0,
        color: '#BF00FF'
    },
    {
        name: "MAZE",
        desc: "Вишневый табак.",
        image: "img/wizard_2.jpg",
        progress: 50,
        progress_2: 50,
        progress_freeze: 0,
        color: '#'
    },
    {
        name: "FLUX",
        desc: "Скитлз.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus",
        progress: 100,
        progress_freeze: 0,
        color: '#'
    },
    {
        name: "NOVA",
        desc: "Клубника-банан.",
        image: "img/wizard_2.jpg",
        progress: 50,
        progress_2: 50,
        progress_freeze: 25,
        color: '#'
    },
    {
        name: "SPROUT",
        desc: "Ягоды-мята-хвоя.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus",
        progress: 75,
        progress_2: 25,
        progress_freeze: 0,
        color: '#'
    },
    {
        name: "SURGE",
        desc: "Персик-манго-ананас.",
        image: "img/wizard_2.jpg",
        progress: 60,
        progress_2: 40,
        progress_freeze: 25,
        color: '#'
    },
    {
        name: "TETHER",
        desc: "Клубника-киви.",
        image: "img/wizard_2.jpg",
        progress: 60,
        progress_2: 40,
        progress_freeze: 25,
        color: '#'
    },
    {
        name: "BOGBORN",
        desc: "Лесные ягоды.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus",
        progress: 50,
        progress_2: 50,
        progress_freeze: 25,
        color: '#'
    },
    {
        name: "EMBERBARK",
        desc: "Черный чай, земляника-персик.",
        image: "img/wizard_2.jpg",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: '#'
    }
];

let currentFlavorIndex = 0;

// DOM elements
const flavorImage = document.getElementById('flavor-image');
const flavorName = document.getElementById('flavor-name');
const flavorDesc = document.getElementById('flavor-desc');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');
const flavorSelector = document.getElementById('flavor-selector');
const progressRing = document.getElementById('progress-ring');
const progressRing2 = document.getElementById('progress-ring-2');
const progressLine = document.querySelector('.progress-line');
const progressRingText = document.getElementById('progress-ring-text');
const progressRingText2 = document.getElementById('progress-ring-2-text');
const bgVideo = document.getElementById('bg-video');

function updateSVGColor(color){
    const path = document.getElementById('path3619');
    if(path)
        path.setAttribute('fill',color);
}

function changeSVGColor(color) {
    // Get the <object> element
    const svgObject = document.getElementById('svg_image');

    // Wait for the SVG content to load
    svgObject.addEventListener('load', () => {
        // Access the internal SVG document
        const svgDoc = svgObject.contentDocument;

        // Find the element you want to change (e.g., a circle or path)
        const circle = svgDoc.querySelector('path'); // Change 'circle' to the appropriate selector

        // Change the color
        if (circle) {
            circle.setAttribute('fill', color); // Change 'fill' to 'stroke' if needed
        }
    });
}


// Function to update flavor content and trigger animations
function updateFlavor() {
    const flavor = flavors[currentFlavorIndex];

    // Remove animate class to reset animation
    productImage.classList.remove('animate');
    productDescription.classList.remove('animate');

    // Force reflow to restart animation
    void productImage.offsetWidth;
    void productDescription.offsetWidth;

    // Update content
    flavorImage.src = flavor.image;
    flavorName.textContent = flavor.name;
    flavorDesc.textContent = flavor.desc;

    // Add animate class to trigger animation
    productImage.classList.add('animate');
    productDescription.classList.add('animate');

    // Update active button in selector
    document.querySelectorAll('.flavor-selector button').forEach((btn, index) => {
        btn.classList.toggle('active', index === currentFlavorIndex);
    });

    progressLine.classList.remove('animate-progress');
    void progressLine.offsetWidth;
    void progressRing.offsetWidth; // Force reflow
    void progressRing2.offsetWidth; // Force reflow
    progressRing.style.setProperty('--progress', flavor.progress);
    progressRingText.textContent = `${flavor.progress}%`; // Update text
    if (!flavor.progress_2)
    {
        hideElement(progressRing2);
        hideElement(progressRingText2);
    }
    else
    {
        showElement(progressRing2);
        showElement(progressRingText2);
        progressRing2.style.setProperty('--progress', flavor.progress_2);
        progressRingText2.textContent = `${flavor.progress_2}%`; // Update text
    }
    changeSVGColor('white');
    progressLine.style.setProperty('--progress', flavor.progress_freeze);
    progressLine.classList.add('animate-progress');
}

// Function to create flavor selector buttons
function createFlavorSelector() {
    flavors.forEach((flavor, index) => {
        const button = document.createElement('button');
        button.textContent = flavor.name;
        button.addEventListener('click', () => {
            currentFlavorIndex = index;
            updateFlavor();
        });
        flavorSelector.appendChild(button);
    });
}

// Scroll event listener for flavor switching
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll down - next flavor
        currentFlavorIndex = (currentFlavorIndex + 1) % flavors.length;
    } else if (event.deltaY < 0) {
        // Scroll up - previous flavor
        currentFlavorIndex = (currentFlavorIndex - 1 + flavors.length) % flavors.length;
    }
    updateFlavor();
});

function hideElement(element)
{
    if (element)
    {
        if (!element.classList.contains('hidden'))
            element.classList.add('hidden');
    }
}

function showElement(element)
{
    if (element)
    {
        if (element.classList.contains('hidden'))
            element.classList.remove('hidden');
    }
}

bgVideo.playbackRate = 0.5; // Half speed (adjust as needed)

// Initialize
createFlavorSelector();
updateFlavor();