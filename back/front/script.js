document.addEventListener('DOMContentLoaded', function () {
    var filterButton = document.getElementById('filterBtn');
    var saveButton = document.getElementById('saveBtn');
    var filterOptions = document.getElementById('filterOptions');
  
    filterButton.addEventListener('click', function () {
      filterOptions.classList.toggle('show');
    });
  
    saveButton.addEventListener('click', function () {
      filterOptions.classList.remove('show');
    });
  });


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
  var closeSubsc = document.getElementById("container");

  input.addEventListener('click', function (){
    input.classList.add('open');
  });
  
  closeSubsc.addEventListener('click', function (event){
    if (!event.target.closest('.search-container')) {
      input.classList.remove('open');
  }
  });


  // script.js

 


