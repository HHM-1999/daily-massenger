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

const stickyElement = document.getElementById('stickyElement');
const desiredPosition = 200;
window.addEventListener('scroll', handleScroll);
function handleScroll() {
  const scrollPosition = window.pageYOffset || window.scrollY;
  if (scrollPosition >= desiredPosition) {
    stickyElement.classList.add('sticky');
  } else {
    stickyElement.classList.remove('sticky');
  }
}

// ///Drop-down-button////


// var dropdownBtn = document.querySelector(".dropbtn");
// var dropdownContent = document.querySelector(".dropdown-content");

// function toggleDropdown() {
//   dropdownContent.classList.toggle("show");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     if (dropdownContent.classList.contains('show')) {
//       dropdownContent.classList.remove('show');
//     }
//   }
// };

// dropdownBtn.addEventListener("click", toggleDropdown);