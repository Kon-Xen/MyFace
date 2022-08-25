document.addEventListener("DOMContentLoaded", function () {

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

  const hamburgerButton = document.getElementById("hamburger-button");
  hamburgerButton.addEventListener("click", ()=>{
    //change display property from :none to :block
    //of dropdown-content class
    ;
  });

});
