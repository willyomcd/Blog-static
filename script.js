// Keep the 1440 x 900 artwork aligned while covering the window at any zoom.
const hero = document.querySelector(".hero");

if (hero) {
  const fitScene = () => {
    const { width, height } = hero.getBoundingClientRect();
    const scale = Math.max(1, width / 1440, height / 900);
    hero.style.setProperty("--scene-scale", String(scale));
  };

  fitScene();
  new ResizeObserver(fitScene).observe(hero);
}
