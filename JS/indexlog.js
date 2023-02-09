document.querySelector('form[action=""]').addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="u-name"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = storedUsers.find(user => user.username === username && user.password === password);
    if (user) {
      // alert("You have logged in successfully");
      window.location.href='pop-up.html'
    } else {
        alert("You don't have an account Please sign-up")
      window.location.href = '/signup.html';
    }
  });
  
  document.querySelector('form[method=""]').addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const repeatPassword = document.querySelector('input[name="rpassword"]').value;
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = {
      username,
      password
    };
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("You have signed up successfully");
    window.location.href = 'index.html';
  });
  const pop_up = document.getElementById("pop_up");
  function openpopup(){
    pop_up.classList.add("openpopup");
  }
  function openpopup(){
    pop_up.classList.remove("closepopup");
  }

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  function closepopup(){
    
    window.location = 'index.html'
    
  }