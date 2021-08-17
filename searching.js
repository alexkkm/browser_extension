document.getElementById("buttonForChangingHTMLContent").addEventListener("click", function changeingHTMLContent() {
    document.getElementById("text").innerHTML = "New Content";
  });

  document.getElementById("buttonForRecoveringHTMLContent").addEventListener("click", function recoveringHTMLContent() {
    document.getElementById("text").innerHTML = "Old Content";
  });