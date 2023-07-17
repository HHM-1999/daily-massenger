///exit button///



const exitButton = document.querySelector('.exit-button');

exitButton.addEventListener('click', function () {

  const photoContainer = this.parentNode;
  photoContainer.remove();

});


onscroll = () => {
  if (document.documentElement.scrollTop > 500) {
    setTimeout(function () { document.getElementById('gototop').classList.remove('d-none') }, 300);
  } else {
    setTimeout(function () { document.getElementById('gototop').classList.add('d-none') }, 300);
  }
};

function gototop() {
  window.scrollTo(0, 0);
  setTimeout(function () { document.getElementById('gototop').classList.add('d-none') }, 500);
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



//search box//
function showSearchBox() {
  var searchContainer = document.getElementById("searchContainer");
  searchContainer.classList.remove("hidden");
}
function hideSearchBox() {
  var searchContainer = document.getElementById("searchContainer");
  searchContainer.classList.add("hidden");
}

function performSearch() {
  var searchInput = document.getElementById("searchInput").value;
  // Perform your search operation using the search input value
  // Add your search logic here (e.g., making an API request, filtering data)
  console.log("Performing search: " + searchInput);
}
