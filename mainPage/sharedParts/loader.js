async function loadContent() {
    const response = await fetch("../sharedParts/topbar.html");
    const html = await response.text();
    document.getElementById('topbar').innerHTML = html;
    const response2 = await fetch("../sharedParts/footer.html");
    const html2 = await response2.text();
    document.getElementById('footer').innerHTML = html2;
}
document.addEventListener('DOMContentLoaded',loadContent);