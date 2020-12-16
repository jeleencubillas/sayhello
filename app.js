// Submit Name Button
document.getElementById("submit-name").addEventListener("click", function() {
  const name = document.getElementById("name-field").value;
  document.getElementById("display-screen").innerHTML = name;
  });

// Hello Button
document.getElementById("hello-button").addEventListener("click", function() {
  const name = document.getElementById("name-field").value;
  document.getElementById("display-screen").innerHTML = "Hello, " + name + "!";
  });