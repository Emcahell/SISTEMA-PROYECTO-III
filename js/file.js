(function () {
  const InputF = document.getElementById("inputF");
  const Preview = document.getElementById("previewI");

  InputF.addEventListener("change", function () {
    const file = this.files[0];
    console.log(file);

    if (file) {
      const read = new FileReader();

      read.addEventListener("load", function () {
        Preview.setAttribute("src", this.result);
      });

      read.readAsDataURL(file);
    }
  });
})();
