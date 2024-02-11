let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}
function teleport() {
  var teleportButton = document.getElementById('botao2');
  var randomX = Math.random() * window.innerWidth;
  var randomY = Math.random() * window.innerHeight;

  teleportButton.style.position = 'absolute';
  teleportButton.style.left = randomX + 'px';
  teleportButton.style.top = randomY + 'px';
}
