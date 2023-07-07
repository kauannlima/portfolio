function Menu(config) {
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn
    this.widthEnabled = config.widthEnabled || false

    var _opened = false
    var _this = this

    this.btn.removeAttribute("style")

    if(this.widthEnabled){
        window.addEventListener("resize", e =>{
            if(window.innerWidth > _this.widthEnabled){
                _this.nav.removeAttribute("style")
            } else if(!this.nav.getAttribute("style")){
                closeMenu()
            }
        })
        if(window.innerWidth <= _this.widthEnabled){
            
        }
    }

    this.btn.addEventListener("click", openOrClose)

    function openOrClose() {
        if (!_opened) {
            openMenu()
        } else {
            closeMenu()
        }
    }
    function openMenu() {
        var _top = _this.nav.getBoundingClientRect().top + "px"

        var _style = {
            maxHeight: "calc(100vh - " + _top + " )",
            overflow: "hidden"
        }
        applyStyleToNav(_style)

         _opened = true;
    }
    function applyStyleToNav(_style) {
        Object.keys(_style).forEach(stl => {
            _this.nav.style[stl] = _style[stl]
        })
    }
    function closeMenu() {
        var _style = {
            maxHeight: "0px",
            overflow: "hidden"
        }
        applyStyleToNav(_style)
         _opened = false;
    }
}