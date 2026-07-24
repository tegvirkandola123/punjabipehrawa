// Punjabi Pehrawa Website

document.addEventListener("DOMContentLoaded", () => {

    // Buy Now buttons
    const buttons = document.querySelectorAll(".product button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for shopping with Punjabi Pehrawa!\nPlease place your order on WhatsApp: +91 82649 93080");
            window.open("https://wa.me/918264993080", "_blank");
        });
    });

    // Smooth scroll for menu links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation on scroll
    const items = document.querySelectorAll(".card, .product");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.6s ease";
        observer.observe(item);
    });

});
