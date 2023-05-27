function sendContact() {
    // Get the values of the input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var houseNumber = document.getElementById("houseNumber").value;
    var country = document.getElementById("country").value;
    var question = document.getElementById("question").value;
  
    // Validate the input fields
    if (firstName.trim() === "") {
      alert("Please enter your first name.");
      return false;
    }
    if (lastName.trim() === "") {
      alert("Please enter your last name.");
      return false;
    }
    if (!gender) {
      alert("Please select your gender.");
      return false;
    }
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return false;
    }
    if (address.trim() === "") {
      alert("Please enter your address.");
      return false;
    }
    if (houseNumber.trim() === "") {
      alert("Please enter your house number.");
      return false;
    }
    if (country === "") {
      alert("Please select a country.");
      return false;
    }
    if (question.trim() === "") {
      alert("Please enter your question.");
      return false;
    }
  
    // Construct the message to be sent
    var message = "Name: " + firstName + " " + lastName + "\n";
    message += "Gender: " + gender + "\n";
    message += "Email: " + email + "\n";
    message += "Address: " + address + ", " + houseNumber + "\n";
    message += "Country: " + country + "\n";
    message += "Question: " + question + "\n";
  
    // Make an AJAX request to send the email
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert("Message sent successfully!");
        } else {
          alert("There was an error sending your message. Please try again later.");
        }
      }
    };
    xhr.send("name=" + encodeURIComponent(firstName + " " + lastName) + "&gender=" + encodeURIComponent(gender) + "&email=" + encodeURIComponent(email) + "&address=" + encodeURIComponent(address) + "&houseNumber=" + encodeURIComponent(houseNumber) + "&country=" + encodeURIComponent(country) + "&question=" + encodeURIComponent(question));
  }
    
  