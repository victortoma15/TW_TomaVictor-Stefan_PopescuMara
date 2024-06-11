document.getElementById('registerForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('checkPassword').value;
    
    if (password !== checkPassword) {
      event.preventDefault();
      alert('Passwords do not match!');
    }
  });

  function setType(type) {
    document.getElementById('userType').value = type;
    document.getElementById('dropbtn').innerText = type;
  }