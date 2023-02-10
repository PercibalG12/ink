
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let interval = null;
  
  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
  }

  const bar = document.getElementById("bar");
  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");

  if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
  }else if(close){
    close.EventListener("click",()=>{
        nav.classList.remove("active");
    })
  }

  // MODAL //
//   const modal = document.querySelector(".modal");
// const closeButton = document.querySelector(".close-button");
// // const acceptButton = document.querySelector("#accept");
// // const declineButton = document.querySelector("#decline");
// const acceptButton = document.getElementById("accept");
// const declineButton = document.getElementById("decline");

// // Show the modal when the user scrolls down the page
// window.onscroll = function() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     modal.style.display = "block";
//   }
// };

// // Close the modal when the close button is clicked
// closeButton.onclick = function() {
//   modal.style.display = "none";
// };


// acceptButton.onclick = function() {
//   // Accept the user cookie and country location
//   // ...
//   alert("Cookies and location accepted.");
//   // Remove the modal from reappearing again
//   modal.style.display = "none";

//   // Store the user's decision in local storage
//   localStorage.setItem("cookieConsent", "accepted");
 
// };

// declineButton.onclick = function() {
//   // Prompt the user that declining may affect language
//   alert("Declining may affect the language preference.");

//   // Remove the modal from reappearing again
//   modal.style.display = "none";

//   // Store the user's decision in local storage
//   localStorage.setItem("cookieConsent", "declined");
// };

// // Check if the user has already made a decision
// if (localStorage.getItem("cookieConsent") === null) {
//   // Show the modal if the user has not made a decision
//   modal.style.display = "block";
// } else {
//   // Hide the modal if the user has already made a decision
//   modal.style.display = "none";
// }



