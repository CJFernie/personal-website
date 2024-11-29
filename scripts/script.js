document.addEventListener("scroll", () => {
    const contentItems = document.querySelectorAll(".content-item");
    const titleElement = document.getElementById("left-title");

    contentItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const updateTitle = item.getAttribute("data-title");
            titleElement.textContent = updateTitle;
        }
    });
});
