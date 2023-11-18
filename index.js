function _(key) {
  return document.getElementById(key);
}

function container_move(callback) {
  const shell = _("shell");
  shell.style.transform = shell.style.transform === "translateX(0%)" ? "translateX(-50%)" : "translateX(0%)";
  setTimeout(callback, 500);
}

function open_card() {
  const container = _("container");
  const box1 = _("box1");
  const box1_back = _("box1_back");

  container.style.transform = container.style.transform === "rotateX(0deg)" ? "rotateX(40deg)" : "rotateX(0deg)";
  box1.style.transform = box1.style.transform === "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
  box1_back.style.transform = box1_back.style.transform === "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";

  const tnElement = _("tn");
  tnElement.innerHTML = tnElement.innerHTML === "text" ? "surprise" : "text";
}
