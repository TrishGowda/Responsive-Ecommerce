// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Scroll Reveal

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Wishlist

const hearts = document.querySelectorAll(".wishlist");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    const icon = heart.querySelector("i");

    icon.classList.toggle("fas");
    icon.classList.toggle("far");

    icon.style.color = "#ff3b5c";
  });
});

/* ===========================
   Add To Cart Toast
=========================== */

const carts = document.querySelectorAll(".cart");

const toast = document.getElementById("toast");

carts.forEach((cart) => {
  cart.addEventListener("click", (e) => {
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
});

/* ===========================
Loading Screen
=========================== */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

/*==========================
Blog Card Animation
==========================*/

const blogCards = document.querySelectorAll(".blog-box");

blogCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = ".4s";
  });
});

/*==========================
Blog Search + Filter
==========================*/

const searchInput = document.getElementById("searchBlog");

const cards = document.querySelectorAll(".blog-box");

const buttons = document.querySelectorAll(".filter-btn");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(value)) {
      card.classList.remove("hideBlog");
    } else {
      card.classList.add("hideBlog");
    }
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const category = card.querySelector(".category").innerText;

      if (filter === "all" || category === filter) {
        card.classList.remove("hideBlog");
      } else {
        card.classList.add("hideBlog");
      }
    });
  });
});

/*==============================
Premium Page Transition
==============================*/

document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("javascript") &&
      !href.startsWith("mailto") &&
      !href.startsWith("tel")
    ) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});
