document.addEventListener("DOMContentLoaded", async function() {
    /* Dark mode toggle button on header */
    var themeToggleButton = document.querySelector("header .theme_toggle_btn");
    const {icon} = getThemeIcon();
    themeToggleButton.innerHTML = icon;

    themeToggleButton.addEventListener("click", function() {
        const {icon} = toggleTheme();
        themeToggleButton.innerHTML = icon;
    });

    var generateQuoteBtn = document.getElementById("generate_quote_btn");
    generateQuoteBtn.addEventListener("click", async function() {
        generateQuoteBtn.disabled = true;
        var btnLabel = generateQuoteBtn.querySelector("p");
        btnLabel.innerText = "Loading...";
        var btnIcon = generateQuoteBtn.querySelector("svg");
        btnIcon.classList.add("spin");
        
        await renderQuote();
        
        btnLabel.innerText = "New Quote";
        btnIcon.classList.remove("spin");
        generateQuoteBtn.disabled = false;
    });

    renderQuote();
});

async function renderQuote() {
    const {content, author} = await generateQuote();
    var contentElement = document.getElementById("quote_content");
    var authorElement = document.getElementById("quote_author");
    contentElement.innerText = content;
    authorElement.innerText = "— " + author;
}