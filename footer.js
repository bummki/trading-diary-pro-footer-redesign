document.addEventListener("DOMContentLoaded", function() {
    const langSelect = document.getElementById("lang-select");

    // Load saved language from localStorage or default to Korean
    let currentLang = localStorage.getItem("selectedLang") || "ko";
    langSelect.value = currentLang;
    applyLanguage(currentLang);

    langSelect.addEventListener("change", function() {
        currentLang = this.value;
        localStorage.setItem("selectedLang", currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        const elements = document.querySelectorAll("[data-lang-key]");
        elements.forEach(element => {
            const key = element.getAttribute("data-lang-key");
            if (langData[lang] && langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });
    }

    // Accordion functionality for mobile
    const sectionTitles = document.querySelectorAll(".footer-section .section-title");

    sectionTitles.forEach(title => {
        title.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                const parentSection = this.closest(".footer-section");
                parentSection.classList.toggle("active");
            }
        });
    });

    // Initial check for mobile to hide content
    if (window.innerWidth <= 768) {
        document.querySelectorAll(".footer-section p, .footer-section ul, .footer-section ol").forEach(content => {
            content.style.display = "none";
        });
    }
});

