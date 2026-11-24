let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    const item = button.dataset.item;
    const price = Number(button.dataset.price);
    showToast(`${item} added to cart · ₹${price}`);
  });
});

document.getElementById("cartBtn").addEventListener("click", () => {
  showToast(cartCount === 0 ? "Your cart is empty. Add a dish to get started!" : `You have ${cartCount} item(s) in your demo cart.`);
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    document.querySelectorAll(".dish-card").forEach(dish => {
      dish.style.display = (category === "All" || dish.dataset.category === category) ? "" : "none";
    });
    document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
  });
});
