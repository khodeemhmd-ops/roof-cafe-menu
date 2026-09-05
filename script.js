document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".categories button");
    const sections = document.querySelectorAll(".menu-section");
    const backToTop = document.getElementById("backToTop");


    // Category Buttons

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            if (sections[index]) {

                const headerOffset = 70;

                const sectionPosition =
                    sections[index].getBoundingClientRect().top +
                    window.pageYOffset -
                    headerOffset;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    // Back To Top

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});