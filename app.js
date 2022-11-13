const slides = document.querySelectorAll(".slide");

slides.forEach(item => {
  item.addEventListener("click", () => {
    clearActiveClassses();
    item.classList.add("active");
  });
});

function clearActiveClassses(){
  slides.forEach(item => {
    item.classList.remove('active');
  });
}


