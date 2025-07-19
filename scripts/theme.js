document.addEventListener("DOMContentLoaded", function() {
    var currentTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
    setCurrentTheme(currentTheme || LIGHT_MODE_VALUE)
})

function setCurrentTheme(theme) {
    var html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
}

function toggleTheme() {
    var currentTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
    if(currentTheme == null) {
        currentTheme = LIGHT_MODE_VALUE
    }
    else {
        currentTheme = currentTheme == LIGHT_MODE_VALUE ? DARK_MODE_VALUE : LIGHT_MODE_VALUE;
    }
    setCurrentTheme(currentTheme);
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, currentTheme);
    return getThemeIcon();
}

function getThemeIcon() {
    var currentTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
    if(currentTheme == null) {
        return {icon: MOONICON};
    }
    else {
        return {icon: currentTheme == LIGHT_MODE_VALUE ? MOONICON : SUNICON};
    }
}