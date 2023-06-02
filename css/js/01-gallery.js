import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const createImages = createGalleryImages(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", createImages);

function createGalleryImages(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const onContainerClick = (e) => {
  e.preventDefault();

  const source = e.target.dataset.source;
  if (!source) return;

  const instance = basicLightbox.create(`
    <img src="${source}" width="1280" height="auto">
  `);

  instance.show();
};

galleryContainer.addEventListener("click", onContainerClick);
