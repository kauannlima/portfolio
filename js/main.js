(function () {
    var $body = document.querySelector("body")
    $body.classList.remove("no-js")
    $body.classList.add("js")


    var menu = new Menu({
        container: ".header__nav",
        toggleBtn: ".header__btnMenu",
        widthEnabled: 750
    })
    window.addEventListener('scroll', setupNav)

    function setupNav() {

        var posYScroll = getYscroll()

        if (posYScroll > 1390 && !hasClassFx()) {
            document.body.classList.add("scroll-animation")
        } if (posYScroll > 2399|| posYScroll<698 && !hasClassFx()) {
            document.body.classList.remove("scroll-animation")

        }
        function getYscroll() {
            return window.pageYOffset;
        }
        function hasClassFx() {
            return !!document.querySelector(".fx")
        }
    }

})()