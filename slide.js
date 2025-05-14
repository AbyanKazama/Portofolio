const slides = document.querySelectorAll('.carousel-img');
        const descriptions = document.querySelectorAll('.carousel-description .desc');
        let current = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
            });
            descriptions.forEach((desc, i) => {
                desc.classList.remove('active');
            });

            slides[index].classList.add('active');
            descriptions[index].classList.add('active');
        }

        function nextSlide() {
            current = (current + 1) % slides.length;
            showSlide(current);
        }

        function prevSlide() {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        }

        setInterval(nextSlide, 7000);

        showSlide(current);