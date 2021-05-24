//once page loaded
window.addEventListener('load', function(){

  //if anywhere in the document is clicked
  document.addEventListener("click", function(){
    document.write("Woah! William is Awesome!");
  });
  
  // create a variable fo the button
  var button = document.getElementById("foobar");
  
  // if the button is clicked
  button.addEventListener("click", function(){
    document.write("Button Clicked");
  });

  var img = document.getElementById("moomoo");

  img.addEventListener("click", function(){
    document.write("The End Is Near.");
  });

});