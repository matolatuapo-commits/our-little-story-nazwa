
// ==========================================
// 1. PENGHITUNG HARI JADIAN
// ==========================================

// Tanggal jadian: 1 Juni 2026
const relationshipStart = new Date(2026, 5, 1);

const daysElement = document.getElementById("daysTogether");

function updateDays() {
    const today = new Date();

    const start = new Date(
        relationshipStart.getFullYear(),
        relationshipStart.getMonth(),
        relationshipStart.getDate()
    );

    const now = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const days = Math.max(
        0,
        Math.floor((now - start) / 86400000) + 1
    );

    if (daysElement) {
        daysElement.textContent = days.toLocaleString("id-ID");
    }
}

updateDays();

// Periksa setiap menit agar angka berubah setelah tengah malam
setInterval(updateDays, 60000);


// ==========================================
// 2. PERGANTIAN WARNA OTOMATIS
// ==========================================

const themes = [
    "",
    "theme-lavender",
    "theme-blue",
    "theme-peach",
    "theme-mint"
];

let themeIndex = 0;

setInterval(function () {
    document.body.classList.remove(
        "theme-lavender",
        "theme-blue",
        "theme-peach",
        "theme-mint"
    );

    themeIndex = (themeIndex + 1) % themes.length;

    if (themes[themeIndex] !== "") {
        document.body.classList.add(themes[themeIndex]);
    }
}, 5000);


// ==========================================
// 3. MENU NAVIGASI HP
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("show");
        });
    });
}


// ==========================================
// 4. SURAT CINTA
// ==========================================

const openLetter = document.getElementById("openLetter");
const letterMessage = document.getElementById("letterMessage");

if (openLetter && letterMessage) {
    openLetter.addEventListener("click", function () {
        letterMessage.hidden = !letterMessage.hidden;

        if (letterMessage.hidden) {
            this.innerHTML =
                'Buka surat kecil ini <span>♡</span>';
        } else {
            this.innerHTML =
                'Tutup surat <span>×</span>';
        }
    });
}


// ==========================================
// 5. ANIMASI HATI BERJATUHAN
// ==========================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 13) + "px";
    heart.style.animationDuration = (9 + Math.random() * 8) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 18000);
}

setInterval(createHeart, 1100);


// ==========================================
// 6. GALERI FOTO / LIGHTBOX
// ==========================================

// Pastikan nama foto sama dengan file di folder images.

const photos = [
    "poto1.jpg.jpeg",
    "poto2.jpg.jpeg",
    "poto3.jpg.jpeg",
    "poto4.jpg.jpeg",
    "poto5.jpg.jpeg",
    "poto6.jpg.jpeg"
];

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCount = document.getElementById("lightboxCount");

let currentPhoto = 0;


// Menampilkan foto besar
function showPhoto(index) {
    if (!lightbox || !lightboxImage) return;

    currentPhoto = (index + photos.length) % photos.length;

    lightboxImage.src = "images/" + photos[currentPhoto];
    lightboxImage.alt = "Kenangan foto " + (currentPhoto + 1);

    if (lightboxCount) {
        lightboxCount.textContent =
            (currentPhoto + 1) + " / " + photos.length;
    }

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


// Klik foto untuk memperbesar
document.querySelectorAll(".gallery-item").forEach(
    function (item, index) {
        item.addEventListener("click", function () {
            showPhoto(index);
        });
    }
);


// Menutup foto
function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


// Tombol X
const closeButton = document.getElementById("closeLightbox");

if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
}


// Foto sebelumnya
const prevButton = document.getElementById("prevPhoto");

if (prevButton) {
    prevButton.addEventListener("click", function () {
        showPhoto(currentPhoto - 1);
    });
}


// Foto berikutnya
const nextButton = document.getElementById("nextPhoto");

if (nextButton) {
    nextButton.addEventListener("click", function () {
        showPhoto(currentPhoto + 1);
    });
}


// Klik area luar foto untuk menutup
if (lightbox) {
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}


// Navigasi keyboard
document.addEventListener("keydown", function (event) {
    if (!lightbox || !lightbox.classList.contains("open")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        showPhoto(currentPhoto + 1);
    }

    if (event.key === "ArrowLeft") {
        showPhoto(currentPhoto - 1);
    }
});


// ==========================================
// 7. PENGATURAN VIDEO
// ==========================================

// Jika satu video diputar, video lainnya berhenti.

document.querySelectorAll(".video-card video").forEach(
    function (video) {
        video.addEventListener("play", function () {
            document.querySelectorAll(".video-card video").forEach(
                function (otherVideo) {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                }
            );
        });
    }
);


// ==========================================
// WEBSITE SELESAI DIMUAT
// ==========================================

console.log("Our Little Story berhasil dimuat!");
