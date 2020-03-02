let count = 0;
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const target = document.createElement("div");
  body.appendChild(target);

  setInterval(() => {
    target.innerHTML = count;
    count++;
  }, 1000);
});
