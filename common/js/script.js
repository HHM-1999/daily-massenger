///exit button///



const exitButton= document.querySelector('.exit-button');

exitButton.addEventListener('click',function(){

    const photoContainer=this.parentNode;
    photoContainer.remove();

});


///goto button///

onscroll = () => {
    if(document.documentElement.scrollTop > 500){
      setTimeout(function(){ document.getElementById('gototop').classList.remove('d-none') }, 300);
    }else{
      setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 300);
    }
  };
  
  function gototop () {
    window.scrollTo(0, 0);
    setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 300);
  }
//sticky//

// Step 1: Retrieve the element to make sticky
const stickyElement = document.getElementById('stickyElement');

// Step 2: Determine the desired scroll position for stickiness
const desiredPosition = 200;

// Step 3: Add event listener to the scroll event
window.addEventListener('scroll', handleScroll);

// Step 4: Event handler for scroll event
function handleScroll() {
  // Step 5: Get the current scroll position
  const scrollPosition = window.pageYOffset || window.scrollY;

  // Step 6: Add or remove CSS class based on scroll position
  if (scrollPosition >= desiredPosition) {
    stickyElement.classList.add('sticky');
  } else {
    stickyElement.classList.remove('sticky');
  }
}
