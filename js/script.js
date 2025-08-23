// Navegación móvil
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Toggle menú móvil
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Cerrar menú al hacer click en un enlace (solo para enlaces internos)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Solo cerrar menú para enlaces internos (que empiecen con #)
      if (this.getAttribute("href").startsWith("#")) {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", function (e) {
    if (hamburger && !hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Dropdown móvil
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    });
    // Cerrar el dropdown si se hace click fuera
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observar elementos para animaciones
document
  .querySelectorAll(".service-card, .city-card, .contact-item")
  .forEach((el) => {
    observer.observe(el);
  });

// Agregar clase CSS para animaciones
const style = document.createElement("style");
style.textContent = `
    .service-card,
    .city-card,
    .contact-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .service-card.animate-in,
    .city-card.animate-in,
    .contact-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Contador animado para años de experiencia
function animateCounter() {
  const counter = document.querySelector(".experience-counter");
  if (counter) {
    let count = 0;
    const target = 8;
    const increment = target / 50;

    const timer = setInterval(() => {
      count += increment;
      counter.textContent = Math.floor(count);

      if (count >= target) {
        counter.textContent = target;
        clearInterval(timer);
      }
    }, 50);
  }
}

// Formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Validar formulario
  if (!validateContactForm(form)) {
    showFormMessage(
      "Por favor, completa todos los campos obligatorios.",
      "error"
    );
    return;
  }

  // Simular envío del formulario
  showFormMessage(
    "¡Gracias por tu mensaje! Te contactaremos pronto.",
    "success"
  );
  form.reset();
}

function validateContactForm(form) {
  const requiredFields = form.querySelectorAll(
    "input[required], textarea[required]"
  );
  const emailField = form.querySelector('input[type="email"]');
  const privacyCheckbox = form.querySelector("#privacidad");
  let isValid = true;

  // Limpiar errores previos
  form.querySelectorAll(".form-error").forEach((error) => error.remove());
  form
    .querySelectorAll(".error")
    .forEach((field) => field.classList.remove("error"));

  // Validar campos obligatorios
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      showFieldError(field, "Este campo es obligatorio");
      isValid = false;
    }
  });

  // Validar email
  if (emailField && emailField.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
      showFieldError(emailField, "Por favor, introduce un email válido");
      isValid = false;
    }
  }

  // Validar checkbox de privacidad
  if (privacyCheckbox && !privacyCheckbox.checked) {
    showFieldError(privacyCheckbox, "Debes aceptar la política de privacidad");
    isValid = false;
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");

  const errorDiv = document.createElement("div");
  errorDiv.className = "form-error";
  errorDiv.textContent = message;
  errorDiv.style.color = "#e74c3c";
  errorDiv.style.fontSize = "0.85rem";
  errorDiv.style.marginTop = "5px";

  field.parentNode.appendChild(errorDiv);
}

function showFormMessage(message, type) {
  // Eliminar mensaje anterior si existe
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = "form-message";
  messageDiv.textContent = message;
  messageDiv.style.padding = "15px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.marginTop = "20px";
  messageDiv.style.textAlign = "center";
  messageDiv.style.fontWeight = "500";

  if (type === "success") {
    messageDiv.style.backgroundColor = "#d4edda";
    messageDiv.style.color = "#155724";
    messageDiv.style.border = "1px solid #c3e6cb";
  } else {
    messageDiv.style.backgroundColor = "#f8d7da";
    messageDiv.style.color = "#721c24";
    messageDiv.style.border = "1px solid #f5c6cb";
  }

  const form = document.getElementById("contact-form");
  form.appendChild(messageDiv);

  // Scroll suave al mensaje
  messageDiv.scrollIntoView({ behavior: "smooth", block: "center" });

  // Eliminar mensaje después de 5 segundos
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Event listener para el botón de WhatsApp
document
  .querySelector(".whatsapp-button a")
  .addEventListener("click", function (e) {
    // Tracking de analytics si se necesita
    if (typeof gtag !== "undefined") {
      gtag("event", "click", {
        event_category: "Contact",
        event_label: "WhatsApp Button",
      });
    }
  });

// Lazy loading para imágenes (cuando se agreguen)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Inicializar lazy loading cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", lazyLoadImages);

// Mejorar la experiencia del usuario con feedback visual
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Header transparente al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Agregar estilos para header scrolled
const headerScrollStyle = document.createElement("style");
headerScrollStyle.textContent = `
    .header.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(headerScrollStyle);

// Galería de fotos
document.addEventListener("DOMContentLoaded", function () {
  loadGallery();
  initLightbox();
  initSliderNavigation();
});

function initSliderNavigation() {
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const galleryContainer = document.getElementById("gallery-container");

  if (prevButton && nextButton && galleryContainer) {
    prevButton.addEventListener("click", function () {
      galleryContainer.scrollBy({
        left: -320, // Ancho de imagen + gap
        behavior: "smooth",
      });
    });

    nextButton.addEventListener("click", function () {
      galleryContainer.scrollBy({
        left: 320, // Ancho de imagen + gap
        behavior: "smooth",
      });
    });
  }
}

function loadGallery() {
  const galleryContainer = document.getElementById("gallery-container");
  if (!galleryContainer) return;

  // Número de imágenes en la galería
  const imageCount = 22;

  for (let i = 1; i <= imageCount; i++) {
    let src;
    // Para las dos últimas imágenes, usar nombres especiales
    if (i === 21) {
      src = "fotos/galeria/WhatsApp Image 2025-08-21 at 15.51.22.jpeg";
    } else if (i === 22) {
      src = "fotos/galeria/WhatsApp Image 2025-08-21 at 16.37.13.jpeg";
    } else {
      src = `fotos/galeria/galeria${i}.jpg`;
    }

    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-index", i - 1);

    galleryItem.innerHTML = `
      <img src="${src}" alt="" loading="lazy"
        onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRmMWU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzVkNDAzNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=='" />
    `;

    galleryContainer.appendChild(galleryItem);
  }
}

function initLightbox() {
  // Crear el lightbox
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "lightbox";

  lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
            <button class="lightbox-nav lightbox-prev" onclick="prevImage()">&#8249;</button>
            <img id="lightbox-img" src="" alt="">
            <button class="lightbox-nav lightbox-next" onclick="nextImage()">&#8250;</button>
        </div>
    `;

  document.body.appendChild(lightbox);

  // Añadir event listeners a las imágenes de la galería
  let currentImageIndex = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentImageIndex = index;
      openLightbox(this.querySelector("img").src);
    });
  });

  // Funciones globales para el lightbox
  window.openLightbox = function (src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeLightbox = function () {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "auto";
  };

  window.nextImage = function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    document.getElementById("lightbox-img").src =
      galleryItems[currentImageIndex].src;
  };

  window.prevImage = function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    currentImageIndex =
      (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    document.getElementById("lightbox-img").src =
      galleryItems[currentImageIndex].src;
  };

  // Cerrar lightbox con tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // Cerrar lightbox al hacer click fuera de la imagen
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
}
