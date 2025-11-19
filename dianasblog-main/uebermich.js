function goToPage(page) {
  window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {
  const spalten = document.querySelectorAll(".bilder-spalte");

  spalten.forEach((spalte, s) => {
    const inner = document.createElement("div");
    inner.classList.add("inner");

    const bilder = Array.from(spalte.querySelectorAll("img"));

    // Bilder zufällig skalieren und positionieren
    bilder.forEach((img) => {
      const size = 120 + Math.random() * 50;
      img.style.width = `${size}px`;
      img.style.left = `${Math.random() * 30}px`;
      img.style.position = "relative";
    });

    // Originalbilder in inner verschieben
    bilder.forEach((b) => inner.appendChild(b));
    spalte.appendChild(inner);

    // Zwei Duplikate für nahtlose Endlosschleife
    const clone1 = inner.cloneNode(true);
    const clone2 = inner.cloneNode(true);
    spalte.appendChild(clone1);
    spalte.appendChild(clone2);

    // Geschwindigkeit + Delay je Spalte
    const duration = 10 + Math.random() * 3; // unterschiedliche Geschwindigkeit
    const delay = s * 0.2; // Spalten leicht versetzt

    // Animation für alle drei Container
    [inner, clone1, clone2].forEach((c) => {
      c.style.animation = `scrollDown ${duration}s linear infinite`;
      c.style.animationDelay = `${delay}s`;
    });
  });
});