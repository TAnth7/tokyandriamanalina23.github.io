let toggleNavStatus = false;

let toggleNav = function() {
    let getsidebar = document.querySelector(".nav-sidebar");
    let getsidebarul = document.querySelector(".nav-sidebar ul");
    let getsidebarlinks = document.querySelectorAll(".nav-sidebar ul li a");

    //here I style the box that appears when I click on the burger menu button
    if (toggleNavStatus === false) {
        getsidebar.style.visibility = "visible";
        getsidebar.style.transition = "all  0.3s ease-in-out";
        getsidebarul.style.visibility = "visible";
        getsidebar.style.width = "200px";
        getsidebar.style.top = "60px";
        getsidebar.style.left = "0";
        getsidebar.style.height = "fit-content";
        getsidebar.style.padding = "0 5px";
        getsidebar.style.backgroundColor = "#1b1b1b"; // Changed from background-color to backgroundColor
        getsidebar.style.zIndex = "90000"; // Changed from z-index to zIndex

        getsidebarlinks.forEach(link => {
            link.style.opacity = "1";
        });

        toggleNavStatus = true;
    } else {
        getsidebar.style.visibility = "hidden";
        getsidebarul.style.visibility = "hidden";
        getsidebar.style.width = "10px";

        getsidebarlinks.forEach(link => {
            link.style.opacity = "0";
        });

        toggleNavStatus = false;
    }
}
