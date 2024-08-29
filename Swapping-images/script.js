function swapImage(newImage,clickedImage){
    let selectedImage = document.getElementById("selected-img");
  selectedImage.src = newImage;


// applying the classes
 let newFeature = document.querySelectorAll(".gallery img");
 newFeature.forEach(img => img.classList.remove("active"));


 clickedImage.classList.add("active");
}