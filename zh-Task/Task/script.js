// This function is used to toggle the visibility of navigation drawer
function toggleDrawer() {
    var drawer = document.querySelector('.tk-drawer');
    var menuIcon = document.querySelector('.tk-hamburger-menu');
    menuIcon.classList.toggle('change');
    if (drawer.style.width === '100%') {
        drawer.style.width = '0';
    } else {
        drawer.style.width = '100%';
    }
}
$('document').ready(function () {

// This function is used to toggle the visibility of navigation drawer
    // function toggleDrawer() {
    //     var drawer = $('.tk-drawer');
    //     var menuIcon = $('.tk-hamburger-menu');
    //     menuIcon.toggleClass('change');
        
    //     if (drawer.width() === 100) {
    //         drawer.animate({ width: '0%' });
    //     } else {
    //         drawer.animate({ width: '100%' });
    //     }
    // }

    // card-menu animation
    $(".menu-card-1").addClass("card-active");
    if ($(window).resize()) {

        $(".menu-card").click(function () {
            $(".menu-card.card-active").removeClass(
                "card-active");
            $(this).addClass("card-active");
        });
    }

    // const year = new Date().getFullYear();
    // $('.copyright').append('<p> © ' + year + ' nurseryplant Pvt. Ltd. All Rights Reserved.</p>');


    // Our service carousel 
    const gridContainers = $('.grid-container');
    const paginationDotsContainer = $('#paginationDots');

    // Dynamically create pagination dots
    gridContainers.each(function (i) {
        const dot = $('<div/>').addClass('dot');
        dot.click(() => {
            showGrid(i);
            activeIndex = i;
        });
        paginationDotsContainer.append(dot);
    });

    // Show the initial grid
    showGrid(0);

    function showGrid(index) {
        gridContainers.each((i, container) => {
            if (i === index) {
                $(container).removeClass('hide').addClass('fadein');
            } else {
                $(container).addClass('hide').removeClass('fadein');
            }
        });

        // Update active state for pagination dots
        const dots = $('.dot');
        dots.each((i, dot) => {
            if (i === index) {
                $(dot).addClass('active');
            } else {
                $(dot).removeClass('active');
            }
        });
    }

    let activeIndex = 0;

    $('.grid-container, #paginationDots').mouseover(() => {
        clearInterval(autoSlideInterval);
    });

    $('.grid-container, #paginationDots').mouseleave(() => {
        startAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(function () {
            if (activeIndex < gridContainers.length) {
                if (activeIndex == 0) {
                    showGrid(1);
                } else {
                    showGrid(activeIndex);
                }
                activeIndex++;
            } else {
                activeIndex = 0;
                showGrid(activeIndex);
            }
        }, 2500);
    }

    startAutoSlide();

// Testimonial Slider
    const scrollContainer = document.querySelector('.slider-container');
    const scrollContent = document.querySelector('.slider');
    const totalWidth = scrollContent.scrollWidth - scrollContainer.clientWidth;

    document.querySelector('.left-arrow').addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: -370, 
            behavior: 'smooth'
        });
    });

    document.querySelector('.right-arrow').addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: 370,
            behavior: 'smooth'
        });
    });

    function handleScroll(event) {

        const scrollPos = scrollContainer.scrollLeft;
        const normalizedScrollPos = scrollPos / totalWidth;
        // const normalizedScrollPos = Math.ceil(scrollPos / totalWidth);
        console.log(normalizedScrollPos);

        // if (normalizedScrollPos == 0) {
        //     $('.left-arrow').css('display', 'none')
        //     $('.right-arrow').css('display', 'block')
        // }
        // else if (normalizedScrollPos == 1) {
        //     console.log("End");
        //     $('.right-arrow').css('display', 'none')
        //     $('.left-arrow').css('display', 'block')
        // }
    }

    scrollContainer.addEventListener('scroll', handleScroll);
});
