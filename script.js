const apiAccessKey = "1Yg-E1kfBJaYC_rTweMSUQZEr2rJ1QLKep2Ieo1E7Dw";

const formEle = document.querySelector("form");
const inputEle = document.getElementById("searchBar");
const searchResults = document.querySelector(".search-results");
const showMoreBtn = document.getElementById("show-more-btn"); 


let inputData = ""
let page = 1;


async function searchImages(){

    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiAccessKey}`


    const response = await fetch(url)
    const data = await response.json()

    const results = data.results
    
    if(page===1){
        searchResults.innerHTML=""
    }

    results.forEach((result) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("results-images");
        const image = document.createElement("img");
        image.src = result.urls.small; // Corrected property name
        image.alt = result.alt_description; // Corrected property name
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description; // Corrected property name
  
         
             imageContainer.appendChild(image);
             imageContainer.appendChild(imageLink);
             searchResults.appendChild(imageContainer);
    });

    page++
    if(page>1){
        showMoreBtn.style.display="block"
    }


}

formEle.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImages()
});

showMoreBtn.addEventListener("click",()=>{

    searchImages()
});


// scroll up button 

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Get a reference to the scroll-to-top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  // Show or hide the button based on the user's scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // Show the button when the user scrolls down 100 pixels
      scrollToTopBtn.style.display = "block";
    } else {
      // Hide the button when the user is near the top
      scrollToTopBtn.style.display = "none";
    }
  });

  
