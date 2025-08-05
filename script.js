
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade').forEach(el => observer.observe(el));


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const carousel = document.querySelector(".testimonials");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 16; // includes margin/gap
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// === Auto Slide (optional) ===
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateCarousel();
// }, 5000);


const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".quote").forEach(quote => {
  quote.addEventListener("click", () => {
    modalText.innerText = quote.innerText;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
