// Array to store image file names
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Change these to match your image names

// Function to populate the select dropdown with image options
function populateImageSelect() {
    const select = document.getElementById("imageSelect");
    
    // Clear existing options (except first one)
    select.innerHTML = '<option value="">Select an image</option>';
    
    images.forEach((image) => {
        let option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        select.appendChild(option);
    });
}

// Function to display selected image
document.getElementById("imageSelect").addEventListener("change", function () {
    const selectedImage = this.value;
    const imgElement = document.getElementById("displayedImage");

    if (selectedImage) {
        imgElement.src = `images/${selectedImage}`;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }
});

// Function to change background based on input
function changeCustomColor() {
    const input = document.getElementById("colorInput").value;
    const studentId = "200597146";
    document.getElementById("studentInfo").textContent = "Student ID: " + studentId;

    changeBackgroundColor(input);
}

// Function to change background based on random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    changeBackgroundColor(randomNum);
}

// Function to change background color based on conditions
function changeBackgroundColor(value) {
    let color = "white";

    if (value < 0 || value > 100) color = "red";
    else if (value <= 20) color = "green";
    else if (value <= 40) color = "blue";
    else if (value <= 60) color = "orange";
    else if (value <= 80) color = "purple";
    else color = "yellow";

    document.body.style.backgroundColor = color;
}

// Populate images when page loads
document.addEventListener("DOMContentLoaded", populateImageSelect);
