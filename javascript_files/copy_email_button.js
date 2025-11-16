document.addEventListener("DOMContentLoaded", () => {
  const email = "andriamana[at]uni-potsdam.de";
  const button = document.getElementById("copyEmailButton");

  if (button) {
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
      }).catch(err => console.error(err));
    });
  }
});
