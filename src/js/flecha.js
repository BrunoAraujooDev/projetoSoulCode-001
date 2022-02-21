var topo = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos > topo) {
    document.getElementById("flecha").style.transform = "scaleX(0)";
  }
  if (currentScrollPos == topo) {
    document.getElementById("flecha").style.transform = "scaleX(1)";
  }
} 