// Array of image URLs
const images = [    
"cards/set2drawer07_001_done92_001.jpg",
"cards/set2drawer07_001_done92_002.jpg",
"cards/set2drawer07_001_done92_022.jpg",
"cards/set2drawer07_001_done92_023.jpg",
"cards/set2drawer07_001_done92_030.jpg",
"cards/set2drawer07_001_done92_032.jpg",
"cards/set2drawer07_001_done92_034.jpg",
"cards/set2drawer07_001_done92_039.jpg",
"cards/set2drawer07_001_done92_041.jpg",
"cards/set2drawer07_001_done92_043.jpg",
"cards/set2drawer07_001_done92_045.jpg",
"cards/set2drawer07_001_done92_046.jpg",
"cards/set2drawer07_001_done92_055.jpg",
"cards/set2drawer07_001_done92_061.jpg",
"cards/set2drawer07_001_done92_063.jpg",
"cards/set2drawer07_001_done92_067.jpg",
"cards/set2drawer07_001_done92_068.jpg",
"cards/set2drawer07_001_done92_070.jpg",
"cards/set2drawer07_001_done92_073.jpg"
];

// Select a random image
const randomImage = images[Math.floor(Math.random() * images.length)];

// Update the image source
const imageElement = document.getElementById("randomImage");
imageElement.src = randomImage;