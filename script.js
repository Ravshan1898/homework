
class HarakatlanuvchiBlok {
  constructor(element) {
    this.element = element;
    this.maxX = window.innerWidth - element.clientWidth;
    this.maxY = window.innerHeight - element.clientHeight;
    this.init();
  }

  tasodifiyPozitsiya(max) {
    return Math.floor(Math.random() * max);
  }

  tasodifiyHarakat() {

    const marginTop = this.tasodifiyPozitsiya(this.maxY);

    const marginLeft = this.tasodifiyPozitsiya(this.maxX);

    this.element.style.marginTop = `${marginTop}px`;

    this.element.style.marginLeft = `${marginLeft}px`;
  }

  init() {
    this.element.addEventListener("mouseover", () => this.tasodifiyHarakat());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".header__content");
  new HarakatlanuvchiBlok(h1);
});
