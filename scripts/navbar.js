let itemsContainer;
let navbarItems = [];
let myName;
let closeButton;

function preload() { }

function setup() {
    noCanvas();
    vw = windowWidth / 100;
    vh = windowHeight / 100;
    closeButton = select("#closeButton");
    closeButton.mouseClicked(hideMenu);
    itemsContainer = select("#navbarItemsContainer");
    itemsContainer.mouseClicked(showMenu);
    navbarItems = selectAll(".navbarItem");
    myName = select("#myName");
}

function draw() {

}

function hideMenu() {
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].addClass("collapsedNavbarItem");
    }
    myName.removeClass("collapsedNavbarItem");
    closeButton.removeClass("visibleCloseButton");
}

function showMenu() {
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].removeClass("collapsedNavbarItem");
    }
    myName.addClass("collapsedNavbarItem");
    setTimeout(function() {closeButton.addClass("visibleCloseButton")}, 200);
}
