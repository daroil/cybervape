// Flavor data
const flavors = [
    {
        name: "Midnight Berry",
        desc: "A bold mix of dark berries with a cool, smooth finish.",
        image: "https://via.placeholder.com/300x400?text=Midnight+Berry"
    },
    {
        name: "Smoky Citrus",
        desc: "Zesty orange and lemon with a smoky undertone.",
        image: "https://via.placeholder.com/300x400?text=Smoky+Citrus"
    },
    {
        name: "Shadow Mint",
        desc: "Crisp mint with a hint of dark chocolate.",
        image: "https://via.placeholder.com/300x400?text=Shadow+Mint"
    }
];

let currentFlavorIndex = 0;

// DOM elements
const flavorImage = document.getElementById('flavor-image');
const flavorName = document.getElementById('flavor-name');
const flavorDesc = document.getElementById('flavor-desc');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');

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

// Initialize with the first flavor
updateFlavor();