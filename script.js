const images = document.querySelectorAll('.preview');
const mainImage = document.getElementById('image');

function upDate(event) {
    const previewPic = event.target;
    console.log("Hovering in Picture:", previewPic.src);
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
    mainImage.innerText = previewPic.alt;
}

function undo() {
    mainImage.style.backgroundImage ='';
    mainImage.innerText = "Hover over an image below to display here."
}

images.forEach(img => {
    img.addEventListener("mouseover", upDate);
    img.addEventListener("mouseout", undo);
})