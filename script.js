function toggleMenu(){
    const nav = document.getElementById("navlinks");
    nav.classList.toggle("show");
}
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
  })
fetch("footer.html")
.then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })


