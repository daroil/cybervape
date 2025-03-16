// Flavor data
const flavors = [
    {
        name: "CHARGE",
        desc: "Яблоко-жвачка.",
        image: "img/Blossom.png",
        icon1: "img/apple.png",
        icon2: "img/bubble_gum.png",
        icon_freeze: "img/snow.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: '#15c900'
    },
    {
        name: "BLOSSOM",
        desc: "Вишнево-ягодный йогурт.",
        image: "img/Blossom.png",
        icon1: "img/cherry_yoghurt.png",
        icon2: "img/berries.png",
        icon_freeze: "img/snow.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: '#fc5bae'
    },
    {
        name: "MIDNIGHT",
        desc: "Черника.",
        image: "img/Blossom.png",
        icon1: "img/blueberry.png",
        icon_freeze: "img/snow.png",
        progress: 100,
        progress_freeze: 25,
        color: '#bc5dff'
    },
    {
        name: "GUISE",
        desc: "Премиальный табак.",
        image: "img/Blossom.png",
        icon1: "img/premium_tobacco.png",
        icon_freeze: "img/snow.png",
        progress: 100,
        progress_freeze: 0,
        color: '#df6d3e'
    },
    {
        name: "MAZE",
        desc: "Вишневый табак.",
        image: "img/Blossom.png",
        icon1: "img/tobacco.png",
        icon2: "img/cherry.png",
        icon_freeze: "img/snow.png",
        progress: 50,
        progress_2: 50,
        progress_freeze: 0,
        color: '#c92571'
    },
    {
        name: "FLUX",
        desc: "Скитлз.",
        image: "img/Blossom.png",
        icon1: "img/skittles.png",
        icon_freeze: "img/snow.png",
        progress: 100,
        progress_freeze: 0,
        color: '#ff00f6'
    },
    {
        name: "NOVA",
        desc: "Клубника-банан.",
        image: "img/Blossom.png",
        icon1: "img/strawberry.png",
        icon2: "img/banana.png",
        icon_freeze: "img/snow.png",
        progress: 50,
        progress_2: 50,
        progress_freeze: 25,
        color: '#ffc43d'
    },
    {
        name: "SPROUT",
        desc: "Ягоды-мята-хвоя.",
        image: "img/Blossom.png",
        icon1: "img/blueberry.png",
        icon2: "img/cone.png",
        icon_freeze: "img/snow.png",
        progress: 75,
        progress_2: 25,
        progress_freeze: 0,
        color: '#5e6da6'
    },
    {
        name: "SURGE",
        desc: "Персик-манго-ананас.",
        image: "img/Blossom.png",
        icon1: "img/peach-mango.png",
        icon2: "img/pineapple.png",
        icon_freeze: "img/snow.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 25,
        color: '#e82555'
    },
    {
        name: "TETHER",
        desc: "Клубника-киви.",
        image: "img/Blossom.png",
        icon1: "img/strawberry2.png",
        icon2: "img/kiwi.png",
        icon_freeze: "img/snow.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 25,
        color: '#fb5f87'
    },
    {
        name: "BOGBORN",
        desc: "Лесные ягоды.",
        image: "img/Blossom.png",
        icon1: "img/raspberry.png",
        icon2: "img/blueberry2.png",
        icon_freeze: "img/snow.png",
        progress: 50,
        progress_2: 50,
        progress_freeze: 25,
        color: '#e4906a'
    },
    {
        name: "EMBERBARK",
        desc: "Черный чай, земляника-персик.",
        image: "img/Blossom.png",
        icon1: "img/peach_tea.png",
        icon2: "img/strawberry.png",
        icon_freeze: "img/snow.png",
        progress: 60,
        progress_2: 40,
        progress_freeze: 0,
        color: '#f93f36'
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
const icon1 = document.getElementById('flavor_icon_1');
const icon2 = document.getElementById('flavor_icon_2');
const icon_freeze = document.getElementById('freeze_icon');

const device = detectDeviceType();

function updateSVGColor(color){
    const path = document.getElementById('path3619');
    if(path)
        path.setAttribute('fill',color);
}

// function changeSVGColor(color) {
//     // Get the <object> element
//     const svgObject = document.getElementById('svg_image');
//
//     // Wait for the SVG content to load
//     svgObject.addEventListener('load', () => {
//         // Access the internal SVG document
//         const svgDoc = svgObject.contentDocument;
//
//         // Find the element you want to change (e.g., a circle or path)
//         const circle = svgDoc.querySelector('path'); // Change 'circle' to the appropriate selector
//
//         // Change the color
//         if (circle) {
//             circle.setAttribute('fill', color); // Change 'fill' to 'stroke' if needed
//         }
//     });
//     const svgDoc = svgObject.contentDocument;
//
// // Find the element you want to change (e.g., a circle or path)
//     const circle = svgDoc.querySelector('path'); // Change 'circle' to the appropriate selector
//
//     // Change the color
//     if (circle) {
//         circle.setAttribute('fill', color); // Change 'fill' to 'stroke' if needed
//     }
// }

let firstLoad = true;

function changeSVGColor(color) {
    const svgObject = document.getElementById('svg_image');
    if (!svgObject) {
        console.error('SVG object not found');
        return;
    }

    // If the SVG is already loaded, apply the color immediately
    if (svgObject.contentDocument && !firstLoad) {
        console.log('here')
        applyColorToSVG(svgObject, color);
    } else {
        firstLoad = false;
        // Otherwise, wait for the SVG to load
        svgObject.addEventListener('load', () => {
            applyColorToSVG(svgObject, color);
        }, { once: true }); // Ensure the listener is only called once
    }
}

function applyColorToSVG(svgObject, color) {
    const svgDoc = svgObject.contentDocument;
    if (!svgDoc) {
        console.error('SVG document not accessible');
        return;
    }

    const path = svgDoc.querySelector('path');
    if (path) {
        path.setAttribute('fill', color);
    } else {
        console.error('No path element found in SVG');
    }
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
        if(device !== 'Phone')
            showElement(progressRingText2);
        progressRing2.style.setProperty('--progress', flavor.progress_2);
        progressRingText2.textContent = `${flavor.progress_2}%`; // Update text
    }
    changeSVGColor(flavor.color);
    changeCanvasColor(flavor.color,flavor.icon1, 'flavor_icon_1');
    if (flavor.icon2)
    {
        showElement(icon2)
        changeCanvasColor(flavor.color,flavor.icon2,'flavor_icon_2');
    }
    else
        hideElement(icon2);
    changeCanvasColor(flavor.color,flavor.icon_freeze, 'freeze_icon');
    document.documentElement.style.setProperty('--progress-fill', flavor.color);
    progressLine.style.setProperty('--progress', flavor.progress_freeze);
    progressLine.classList.add('animate-progress');
}

// Function to create flavor selector buttons
function createFlavorSelector() {
    flavors.forEach((flavor, index) => {
        const button = document.createElement('button');
        // button.textContent = flavor.name;
        button.addEventListener('click', () => {
            currentFlavorIndex = index;
            updateFlavor();
        });
        if( flavorSelector)
            flavorSelector.appendChild(button);
    });
}



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

if(bgVideo)
    bgVideo.playbackRate = 0.5; // Half speed (adjust as needed)

function changeRing(object)
{
    if (object)
    {
        object.setAttribute('cx', '25px');
        object.setAttribute('cy', '25px');
        object.setAttribute('r', '20px');
    }
}

if (device === 'Phone')
{
    const progressRing = document.getElementById('progress-ring');
    const progressRing2 = document.getElementById('progress-ring-2');
    const progressRingFill1 = document.getElementById('progress-ring-fill-1');
    const progressRingFill2 = document.getElementById('progress-ring-fill-2');
    const progressRingBg1 = document.getElementById('progress-ring-bg-1');
    const progressRingBg2 = document.getElementById('progress-ring-bg-2');
    const progressRingText = document.getElementById('progress-ring-text');
    const progressRingText2 = document.getElementById('progress-ring-2-text');
    const progressExamples = document.getElementById('progress-examples');

    // hideElement(progressExamples);
    if (progressRing)
    {
        progressRing.setAttribute('width', '50px');
        progressRing.setAttribute('height', '50px');
    }
    if (progressRing2)
    {
        progressRing2.setAttribute('width', '50px');
        progressRing2.setAttribute('height', '50px');
    }
    changeRing(progressRingFill1);
    changeRing(progressRingBg1);
    changeRing(progressRingFill2);
    changeRing(progressRingBg2);
    if(progressRingText)
    {
        hideElement(progressRingText)
        progressRingText.setAttribute('x','25px');
        progressRingText.setAttribute('y','30px');
    }
    if(progressRingText2)
    {
        hideElement(progressRingText2)
        progressRingText2.setAttribute('x','25px');
        progressRingText2.setAttribute('y','30px');
    }
}
else if (device === 'Desktop')
{
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
}

function changeCanvasColor(color, imgPath, canvasId)
{
    const flavor_icon = document.getElementById(canvasId);
     const img = new Image();
    img.src = imgPath;

    img.onload = function () {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d",{ willReadFrequently: true });

        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the black image
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const rNew = parseInt(color.slice(1, 3), 16);
        const gNew = parseInt(color.slice(3, 5), 16);
        const bNew = parseInt(color.slice(5, 7), 16);

        // Change color (Example: Red)
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Detect black pixels (allowing slight variations)
            if (r < 50 && g < 50 && b < 50) {
                data[i] = rNew;     // New Red
                data[i + 1] = gNew; // New Green
                data[i + 2] = bNew; // New Blue
            }
        }
        ctx.putImageData(imageData, 0, 0);
    };
}

function detectDeviceType()
{
    const width = window.innerWidth;

    if (width <= 768) {
        return "Phone";
    } else if (width <= 1024) {
        return "Tablet";
    } else {
        return "Desktop";
    }

}
// Initialize
document.addEventListener('DOMContentLoaded', ()=>{
    createFlavorSelector();
    updateFlavor();
} )
