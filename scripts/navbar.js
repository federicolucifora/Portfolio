let itemsContainer;
let navbarItems = [];
let myName;
let closeButton;
let titleColor;
let navbar;

function preload() { }

function setup() {
    noCanvas();
    let url = window.location.href;
    vw = windowWidth / 100;
    vh = windowHeight / 100;
    navbar = select("#navbar");
    closeButton = select("#closeButton");
    closeButton.mouseClicked(hideMenu);
    itemsContainer = select("#navbarItemsContainer");
    itemsContainer.mouseClicked(showMenu);
    navbarItems = selectAll(".navbarItem");
    myName = select("#myName");
    let m = match(url, "work/");
    print(m);
    if (m == null) {
        titleColor = select("#pageTitle").style("color");
    }
    
    

}

function draw() {
    if (document.documentElement.scrollTop > 0) {
        navbar.style("border-color", titleColor);
    } else { navbar.style("border-color", "#FFFCEE") };
}

function hideMenu() {
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].addClass("collapsedNavbarItem");
    }
    myName.removeClass("collapsedNavbarItem");
    itemsContainer.style("margin-right", "2vw");
    closeButton.removeClass("visibleCloseButton");
}

function showMenu() {
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].removeClass("collapsedNavbarItem");
    }
    myName.addClass("collapsedNavbarItem");
    itemsContainer.style("margin-right", "0vw");
    setTimeout(function () { closeButton.addClass("visibleCloseButton") }, 200);
}
