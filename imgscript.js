// Array of image URLs
const images = [
    "cards/img6425.png",
"cards/img6426.png",
"cards/img6431.png",
"cards/img6432.png",
"cards/img6433.png",
"cards/img6434.png",
"cards/img6435.png",
"cards/img6436.png",
"cards/img6437.png",
"cards/img6438.png",
"cards/img6439.png",
"cards/img6440.png",
"cards/img6441.png",
"cards/img6442.png",
"cards/img6443.png",
"cards/img6444.png",
"cards/img6445.png",
"cards/img6446.png",
"cards/img6447.png",
"cards/img6448.png",
"cards/img6449.png",
"cards/img6450.png",
"cards/img6451.png",
"cards/img6452.png",
"cards/img6453.png",
"cards/img6454.png",
"cards/img6455.png",
"cards/img6456.png",
"cards/img6457.png",
"cards/img6458.png",
"cards/img6459.png",
"cards/img6460.png",
"cards/img6461.png",
"cards/img6463.png",
"cards/img6464.png",
"cards/img6465.png",
"cards/img6466.png",
"cards/img6467.png",
"cards/img6468.png",
"cards/img6469.png",
"cards/img6470.png",
"cards/img6471.png",
"cards/img6472.png",
"cards/img6473.png",
"cards/img6474.png",
"cards/img6475.png",
"cards/img6476.png",
"cards/img6477.png",
"cards/img6478.png",
"cards/img6497.png",
"cards/img6498.png",
"cards/img6499.png",
"cards/img6500.png",
"cards/img6503.png",
"cards/img6504.png",
"cards/img6505.png",
"cards/img6508.png",
"cards/img6509.png",
"cards/img6510.png",
"cards/img6511.png",
"cards/img6512.png",
"cards/img6513.png",
"cards/img6514.png",
"cards/img6515.png",
"cards/img6516.png",
"cards/img6517.png",
"cards/img6518.png",
"cards/img6519.png",
"cards/img6520.png",
"cards/img6521.png",
"cards/img6523.png",
"cards/img6524.png",
"cards/img6525.png",
"cards/img6526.png",
"cards/img6527.png",
"cards/img6528.png",
"cards/img6530.png",
"cards/img6531.png"
];

// Select a random image
const randomImage = images[Math.floor(Math.random() * images.length)];

// Update the image source
const imageElement = document.getElementById("randomImage");
imageElement.src = randomImage;