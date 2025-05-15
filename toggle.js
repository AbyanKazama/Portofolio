menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("show");
  if (navLinks.classList.contains("show")) {
    document.querySelector('nav').style.height = "200px";
    hero.style.paddingTop = "200px"; // Sesuai tinggi navbar saat show
  } else {
    document.querySelector('nav').style.height = "70px";
    hero.style.paddingTop = "70px"; // Balikin ke posisi awal
  }
});
