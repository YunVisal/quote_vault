document.addEventListener("DOMContentLoaded", function() {
    /* Dark mode toggle button on header */
    var themeToggleButton = document.querySelector("header .theme_toggle_btn");
    const {icon} = getThemeIcon();
    themeToggleButton.innerHTML = icon;

    themeToggleButton.addEventListener("click", function() {
        const {icon} = toggleTheme();
        themeToggleButton.innerHTML = icon;
    });
});