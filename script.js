/* =========================
   WhatsApp Cloud API Documentation
   Enhanced Interactive Features
========================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "%c🚀 WhatsApp Cloud API Documentation Loaded",
    "color: #25d366; font-size: 16px; font-weight: bold;",
  );

  initializeAnimations();
  setupProgressBar();
  setupScrollReveal();
  setupSectionHover();
  setupScrollSpy();
  setupBackToTop();
  setupCopyButtons();
  setupSmoothScroll();
  addLoadingAnimation();
});

/* =========================
   Initial Page Load Animation
========================= */
function initializeAnimations() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";

    setTimeout(() => {
      section.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 100);
  });
}

/* =========================
   Progress Bar on Scroll
========================= */
function setupProgressBar() {
  const progressBar = document.getElementById("progressBar");

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

/* =========================
   Intersection Observer for Scroll Reveal
========================= */
function setupScrollReveal() {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Add stagger animation to list items
        const listItems = entry.target.querySelectorAll("li");
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.animation = `fadeIn 0.5s ease forwards`;
          }, index * 50);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/* =========================
   Enhanced Hover Effects
========================= */
function setupSectionHover() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      section.style.transform = "translateY(-6px) scale(1.01)";
      section.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.15)";
    });

    section.addEventListener("mouseleave", () => {
      section.style.transform = "translateY(0) scale(1)";
      section.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
    });
  });
}

/* =========================
   Scroll Spy Navigation
========================= */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".quick-nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* =========================
   Back to Top Button
========================= */
function setupBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* =========================
   Copy Code Functionality
========================= */
function setupCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      copyCode(this);
    });
  });
}

function copyCode(button) {
  const codeBlock = button.closest(".code-block");
  const code = codeBlock.querySelector("code");
  const text = code.textContent;

  // Copy to clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Visual feedback
      const originalText = button.textContent;
      button.textContent = "Copied! ✓";
      button.style.background = "#25d366";
      button.style.color = "white";
      button.style.borderColor = "#25d366";

      // Create ripple effect
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.width = "100%";
      ripple.style.height = "100%";
      ripple.style.background = "rgba(37, 211, 102, 0.3)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s ease-out";

      button.style.position = "relative";
      button.appendChild(ripple);

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
        button.style.color = "";
        button.style.borderColor = "";
        ripple.remove();
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      button.textContent = "Failed ✗";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 2000);
    });
}

/* =========================
   Smooth Scroll for Navigation
========================= */
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll(".quick-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Add pulse animation to target section
        targetSection.style.animation = "none";
        setTimeout(() => {
          targetSection.style.animation = "pulse 0.6s ease";
        }, 10);

        // Smooth scroll
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* =========================
   Loading Animation
========================= */
function addLoadingAnimation() {
  const header = document.querySelector("header");
  const headerContent = document.querySelector(".header-content");

  headerContent.style.opacity = "0";
  headerContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    headerContent.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    headerContent.style.opacity = "1";
    headerContent.style.transform = "translateY(0)";
  }, 100);
}

/* =========================
   Keyboard Navigation
========================= */
document.addEventListener("keydown", (e) => {
  // Press 'T' or 'Home' to scroll to top
  if (e.key === "t" || e.key === "T" || e.key === "Home") {
    e.preventDefault();
    scrollToTop();
  }

  // Press 'End' to scroll to bottom
  if (e.key === "End") {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
});

/* =========================
   Dynamic Section Numbering Enhancement
========================= */
function enhanceListItems() {
  const orderedLists = document.querySelectorAll("ol");

  orderedLists.forEach((list) => {
    const items = list.querySelectorAll("li");
    items.forEach((item, index) => {
      item.style.transition = "all 0.3s ease";

      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateX(8px)";
        item.style.color = "#1a202c";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateX(0)";
        item.style.color = "";
      });
    });
  });
}

// Initialize list enhancements
setTimeout(enhanceListItems, 500);

/* =========================
   Console Easter Egg
========================= */
console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║      WhatsApp Cloud API Documentation v2.0              ║
║      Built with 💚 for developers                       ║
║                                                          ║
║      Features:                                           ║
║      ✓ Smooth scroll animations                         ║
║      ✓ Progress tracking                                ║
║      ✓ Code copy functionality                          ║
║      ✓ Keyboard shortcuts (T = Top, End = Bottom)       ║
║      ✓ Responsive design                                ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);

/* =========================
   Performance Monitoring
========================= */
if ("performance" in window) {
  window.addEventListener("load", () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(
      `%c⚡ Page loaded in ${pageLoadTime}ms`,
      "color: #25d366; font-weight: bold;",
    );
  });
}

/* =========================
   Add Ripple Animation CSS
========================= */
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
      box-shadow: 0 20px 60px rgba(37, 211, 102, 0.3);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
