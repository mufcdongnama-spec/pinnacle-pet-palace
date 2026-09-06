(function () {
  var idx = 0;
  var slides = document.querySelectorAll(".js-rotate");
  if (slides.length) {
    setInterval(function () {
      slides.forEach(function (s) { s.style.display = "none"; });
      idx = (idx + 1) % slides.length;
      slides[idx].style.display = "block";
    }, 2500);
  }
  document.querySelectorAll("[data-click]").forEach(function (el) {
    el.addEventListener("click", function () { alert(el.getAttribute("data-click")); });
  });
  var trap = document.getElementById("help-trap");
  if (trap) {
    var focusables = trap.querySelectorAll("input, button, a, select");
    trap.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var list = Array.prototype.slice.call(focusables);
      if (!list.length) return;
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email-unlabeled");
      if (email) email.className += " error-border";
      var msg = document.getElementById("color-error");
      if (msg) msg.style.display = "block";
    });
  }
})();
