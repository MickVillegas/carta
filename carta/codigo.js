let botonVer = document.getElementById("ver");
  
botonVer.addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});
