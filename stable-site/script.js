// Переводы. Русский текст берётся прямо из index.html,
// здесь только английский и турецкий — правьте при необходимости.
const I18N = {
  en: {
    "nav.about": "About", "nav.services": "Services", "nav.gallery": "Gallery", "nav.contacts": "Contacts",
    "hero.eyebrow": "Horse stable · Türkiye",
    "hero.lead": "Horseback rides through the mountains and along the sea, riding lessons and a warm welcome from our horses",
    "hero.cta": "Book a ride", "hero.cta2": "See photos",
    "about.eyebrow": "About us",
    "about.title": "A place where horses are family",
    "about.p1": "Our stable is located in a beautiful corner of Türkiye. We care for every horse and tailor each route to your experience — from your very first meeting with a horse to long rides along mountain trails.",
    "about.p2": "Our instructors speak Russian, English and Turkish. Suitable for kids and adults, beginners and experienced riders.",
    "about.s1": "horses", "about.s2": "routes", "about.s3": "days a week",
    "services.eyebrow": "What we do", "services.title": "Services",
    "services.c1t": "Horseback rides", "services.c1d": "Routes through forest, mountains and down to the sea. 1 to 3 hours, guided by an instructor.",
    "services.c2t": "Riding lessons", "services.c2d": "Private lessons in the arena for adults and kids — from scratch or to level up.",
    "services.c3t": "Photo sessions", "services.c3d": "Beautiful shots at sunset, in the fields or by the water. Feel free to bring your own photographer.",
    "services.c4t": "Kids' first meeting", "services.c4d": "Feed, groom and ride a calm horse — gentle and safe.",
    "gallery.eyebrow": "Gallery", "gallery.title": "Life at the stable",
    "contacts.eyebrow": "Contacts", "contacts.title": "Come visit us",
    "contacts.lead": "Message the owner — we'll find the right time and route for you. We reply quickly.",
    "contacts.phone": "Phone", "contacts.address": "Address", "contacts.addressValue": "Antalya, Türkiye",
    "contacts.hours": "Opening hours", "contacts.hoursValue": "Daily, 8:00 – 20:00",
  },
  tr: {
    "nav.about": "Hakkımızda", "nav.services": "Hizmetler", "nav.gallery": "Galeri", "nav.contacts": "İletişim",
    "hero.eyebrow": "At çiftliği · Türkiye",
    "hero.lead": "Dağlarda ve deniz kenarında at gezileri, binicilik dersleri ve atlarımızla sıcak bir karşılama",
    "hero.cta": "Rezervasyon", "hero.cta2": "Fotoğraflar",
    "about.eyebrow": "Hakkımızda",
    "about.title": "Atların ailenin bir parçası olduğu yer",
    "about.p1": "Çiftliğimiz Türkiye'nin pitoresk bir köşesinde yer alıyor. Her atımıza özenle bakıyor, rotayı deneyiminize göre seçiyoruz — atla ilk tanışmadan dağ patikalarındaki uzun gezilere kadar.",
    "about.p2": "Eğitmenlerimiz Rusça, İngilizce ve Türkçe konuşuyor. Çocuklar ve yetişkinler, yeni başlayanlar ve deneyimli biniciler için uygundur.",
    "about.s1": "at", "about.s2": "rota", "about.s3": "gün açık",
    "services.eyebrow": "Neler yapıyoruz", "services.title": "Hizmetler",
    "services.c1t": "At gezileri", "services.c1d": "Orman, dağ ve deniz rotaları. 1–3 saat, eğitmen eşliğinde.",
    "services.c2t": "Binicilik dersleri", "services.c2d": "Yetişkinler ve çocuklar için manejde özel dersler — sıfırdan veya seviye atlamak için.",
    "services.c3t": "Atlarla fotoğraf çekimi", "services.c3d": "Gün batımında, tarlada veya su kenarında güzel kareler. Kendi fotoğrafçınızla da gelebilirsiniz.",
    "services.c4t": "Çocuklar için tanışma", "services.c4d": "Sakin bir atı beslemek, tımar etmek ve binmek — özenli ve güvenli.",
    "gallery.eyebrow": "Galeri", "gallery.title": "Çiftlikte hayat",
    "contacts.eyebrow": "İletişim", "contacts.title": "Bizi ziyaret edin",
    "contacts.lead": "Sahibine yazın — size uygun zamanı ve rotayı birlikte seçelim. Hızlı yanıt veriyoruz.",
    "contacts.phone": "Telefon", "contacts.address": "Adres", "contacts.addressValue": "Antalya, Türkiye",
    "contacts.hours": "Çalışma saatleri", "contacts.hoursValue": "Her gün, 8:00 – 20:00",
  },
};

// ---------- language ----------
const nodes = document.querySelectorAll("[data-i18n]");
I18N.ru = {};
nodes.forEach((el) => (I18N.ru[el.dataset.i18n] = el.textContent));

function setLang(lang) {
  const dict = I18N[lang] || I18N.ru;
  nodes.forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === lang)
  );
  try { localStorage.setItem("lang", lang); } catch {}
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const browser = (navigator.language || "ru").slice(0, 2);
setLang(saved || (["ru", "en", "tr"].includes(browser) ? browser : "en"));

// ---------- nav ----------
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
document.querySelectorAll("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
  })
);

// ---------- reveal on scroll ----------
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---------- lightbox ----------
const box = document.getElementById("lightbox");
const boxImg = box.querySelector("img");
let current = 0;
const photos = () => [...document.querySelectorAll(".grid__item img")];

function show(i) {
  const list = photos();
  if (!list.length) return;
  current = (i + list.length) % list.length;
  boxImg.src = list[current].src;
  boxImg.alt = list[current].alt;
  box.hidden = false;
  document.body.style.overflow = "hidden";
}
function hide() { box.hidden = true; document.body.style.overflow = ""; }

document.querySelector(".grid").addEventListener("click", (e) => {
  const img = e.target.closest(".grid__item")?.querySelector("img");
  if (img) show(photos().indexOf(img));
});
box.querySelector(".lightbox__close").addEventListener("click", hide);
box.querySelector(".lightbox__prev").addEventListener("click", () => show(current - 1));
box.querySelector(".lightbox__next").addEventListener("click", () => show(current + 1));
box.addEventListener("click", (e) => { if (e.target === box) hide(); });
document.addEventListener("keydown", (e) => {
  if (box.hidden) return;
  if (e.key === "Escape") hide();
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

document.getElementById("year").textContent = new Date().getFullYear();
