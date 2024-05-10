$(document).ready(function() {
    // Función para activar las animaciones cuando los elementos están en el viewport
    function activateAnimations() {
        $('.animate__animated').each(function() {
            var elementTop = $(this).offset().top;
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if (elementTop < viewportBottom) {
                $(this).addClass('animate__fadeInUp');
            }
        });
    }

    // Animar al cargar la página
    activateAnimations();

    // Animar al hacer scroll
    $(window).scroll(function() {
        activateAnimations();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const faqCard = this.parentElement;
            const faqAnswer = faqCard.querySelector(".faq-answer");

            if (faqCard.classList.contains("active")) {
                faqCard.classList.remove("active");
                faqAnswer.style.display = "none";
            } else {
                faqCard.classList.add("active");
                faqAnswer.style.display = "block";
            }
        });
    });
});
