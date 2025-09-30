document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  if (!form) return console.error("form#form not found");

  const nipInput = form.querySelector(".nip-input");
  const phoneInput = form.querySelector(".phone-input");
  const nipErrorTag = form.querySelector(".nip-error");
  const phoneErrorTag = form.querySelector(".phone-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nipVal = (nipInput?.value || "").trim();
    const phoneVal = (phoneInput?.value || "").trim();

    const nipRegex = /^\d{10}$/;
    const phoneRegex = /^\+?\s*\d[\d\s]{8,15}$/;

    let ok = true;

    if (!nipRegex.test(nipVal)) {
      nipErrorTag?.classList.remove("hide");
      nipInput?.focus();
      ok = false;
    } else {
      nipErrorTag?.classList.add("hide");
    }

    if (!phoneRegex.test(phoneVal)) {
      phoneErrorTag?.classList.remove("hide");
      phoneInput?.focus();
      ok = false;
    } else {
      phoneErrorTag?.classList.add("hide");
    }

    if (ok) {
      // proceed with real submit
      form.submit();
    }
  });
});
