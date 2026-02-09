//Theme Switch
const toggleSwitch = document.getElementById('modeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Wait for page to fully load
window.addEventListener('load', function() {
    // Load header into #header-placeholder
    const headerStack = document.getElementById('header-placeholder');
    if (headerStack) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                headerStack.innerHTML = data;
            });
    }

    // Load footer into #footer-placeholder
    const footerStack = document.getElementById('footer-placeholder');
    if (footerStack) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerStack.innerHTML = data;
            });
    }
});