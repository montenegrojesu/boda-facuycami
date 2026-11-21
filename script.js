// Cambiá los nombres y las rutas para usar tus propias fotos.
// Guardá las imágenes en una carpeta llamada "media".

const photos = [
  { src: "img/_MG_4694.JPG", caption: "La ceremonia" },
  { src: "img/_MG_5057.JPG", caption: "Un sí para siempre" },
  { src: "img/_MG_5472.JPG", caption: "Brindis y abrazos" },
  { src: "img/_MG_5761.png", caption: "La celebración" },
  { src: "img/_MG_5539.JPG", caption: "Pura felicidad" },
  { src: "img/_MG_5198.JPG", caption: "Una noche mágica" }
];

const gallery = document.getElementById("gallery");

photos.forEach(({ src, caption }) => {
  const tile = document.createElement("div");
  tile.className = "tile";

  const image = document.createElement("img");
  image.src = src;
  image.alt = caption;
  image.loading = "lazy";

  // Si falta una foto, se muestra el recuadro decorativo.
  image.onerror = () => {
    image.style.display = "none";
  };

  const fallback = document.createElement("span");
  fallback.className = "tile-fallback";
  fallback.textContent = caption;

  const label = document.createElement("span");
  label.className = "tile-label";
  label.textContent = caption;

  tile.append(image, fallback, label);

  tile.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const fullImage = lightbox.querySelector("img");

    fullImage.src = src;
    fullImage.alt = caption;
    lightbox.classList.add("open");
  });

  gallery.append(tile);
});

// Cerrar la foto ampliada con el botón o haciendo clic en el fondo.
document.querySelector("#lightbox .close").onclick = () => {
  document.getElementById("lightbox").classList.remove("open");
};

document.getElementById("lightbox").onclick = event => {
  if (event.target.id === "lightbox") {
    event.currentTarget.classList.remove("open");
  }

const DRIVE_URL = "https://drive.google.com/drive/folders/1eltFKtIBT7gE5NRq6krHVDx6RQ_CdVzt?usp=sharing";    
};