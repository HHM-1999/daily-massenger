const exitButton= document.querySelector('.exit-button');

exitButton.addEventListener('click',function(){

    const photoContainer=this.parentNode;
    photoContainer.remove();

});




onscroll = () => {
    if(document.documentElement.scrollTop > 500){
      setTimeout(function(){ document.getElementById('gototop').classList.remove('d-none') }, 500);
    }else{
      setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 500);
    }
  };
  
  function gototop () {
    window.scrollTo(0, 0);
    setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 500);
  }