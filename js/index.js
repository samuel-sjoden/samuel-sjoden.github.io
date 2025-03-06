document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const openBtns = document.querySelectorAll('.btn-custom');

    openBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modalId = this.id;
            document.getElementById(`modal${modalId}`).style.display = "block";
            showSlides(1, modalId); 
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modalId = this.id.replace('close', '');
            document.getElementById(`modal${modalId}`).style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    });

  
    const slideIndices = {
        PCB: 1,
        LCC: 1,
        Smokeshow: 1
    };

    window.plusSlides = function(n, modalId) {
        showSlides(slideIndices[modalId] += n, modalId);
    }

    function showSlides(n, modalId) {
        const slides = document.querySelectorAll(`#modal${modalId} .mySlides`);

        if (n > slides.length) { slideIndices[modalId] = 1; }
        if (n < 1) { slideIndices[modalId] = slides.length; }

        slides.forEach((slide) => slide.style.display = "none");
        slides[slideIndices[modalId] - 1].style.display = "block";
    }

    
    Object.keys(slideIndices).forEach((key) => showSlides(slideIndices[key], key));
});