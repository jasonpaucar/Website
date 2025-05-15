function myFunction() {
  // Get the text field

  // Select the text field
  copyText.select("paucarjason2@gmail.com");
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  alert("Copied the text: " + copyText.value);
}