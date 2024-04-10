




///subscribe popup  
document.addEventListener('DOMContentLoaded', function () {
    var subscribeButton = document.getElementById('subscribeBtn');
    var closeButton = document.getElementById('closeBtn');
    var joinButton = document.getElementById('joinBtn');
    var newsletterPopup = document.getElementById('popup');
    var emailInput = newsletterPopup.querySelector('input[type="email"]');
  
    subscribeButton.addEventListener('click', function () {
      newsletterPopup.classList.remove('hidden');
    });
  
    function closePopup() {
      newsletterPopup.classList.add('hidden');
      emailInput.value = '';
    }
  
    closeButton.addEventListener('click', closePopup);
  
    joinButton.addEventListener('click', function () {
      var email = emailInput.value;
      if (email && email.includes('@') && email.includes('.')) { 
        closePopup();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    overlay.addEventListener('click', function (event) {
      if (event.target === newsletterPopup) {
        closePopup();
      }
    });
  
    newsletterPopup.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

  ///search
  var input = document.getElementById("searchInput");

  input.addEventListener('click', function (){
    input.classList.add('open');
  }) 

  input.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
      input.classList.remove('open');
    }
 
  });