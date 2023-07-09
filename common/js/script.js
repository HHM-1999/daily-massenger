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