window.onload = function() {
    var homeSection = document.getElementById("home");
    var navbar = document.getElementById("navbar");
  
    // Add the navbar to the top-right side of the home section
    homeSection.insertBefore(navbar, homeSection.firstChild);
  
    // Style the navbar to be on top of the home section in one row
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    navbar.style.zIndex = "1000";
    navbar.style.display = "flex";
    navbar.style.justifyContent = "flex-end";
    navbar.style.alignItems = "center";
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "0 0.3rem 0.2rem rgba(0, 0, 0, 0.1)";
    navbar.style.padding = "0.5rem 1rem";
  
    // Style the links in the navbar
    var links = navbar.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black";
      links[i].style.textDecoration = "none";
      links[i].style.marginLeft = "1rem";
    }
  };