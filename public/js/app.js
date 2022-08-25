document.addEventListener("DOMContentLoaded", function () {

  if (document.getElementById("randomise")){
    const randomiseButton = document.getElementById("randomise");
    randomiseButton.addEventListener("click", ()=>{
  
      let posts = document.getElementsByClassName("post");
      for(let i=0; i<posts.length; i++){
  
        posts[i].style.background = `rgb(
          ${Math.floor(Math.random()*255)}, 
          ${Math.floor(Math.random()*255)}, 
          ${Math.floor(Math.random()*255)}
          )`;
      }
    });
  }


  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerDropdownLinks = document.getElementsByClassName("hamburger-dropdown");
  hamburgerButton.addEventListener("click", ()=>{

    if (hamburgerDropdownLinks[0].className === "hamburger-dropdown open"){
      hamburgerDropdownLinks[0].className = "hamburger-dropdown closed"
    }
    else if (hamburgerDropdownLinks[0].className === "hamburger-dropdown closed"){
      hamburgerDropdownLinks[0].className = "hamburger-dropdown open"
    }


    ;
  });

});
