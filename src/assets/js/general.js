/*
  ------------------------- NavBar ---------------------------------
*/
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navBarLinks = document.getElementsByClassName("navbar-links");
toggleButton.addEventListener("click", () => {
    for (let i = 0; i < navBarLinks.length; i++) {
        navBarLinks[i].classList.toggle("active");
    }
});

/*
------------------------- General Functions ------------------------
*/
/**
 * scroll to specific id in DOM
 * @param {string} id: element id in DOM
 */
function scrollToID(id) {
    document.getElementById(id).scrollIntoView();
}

/**
 * hide element from the DOM with display:none;
 * @param {string} id: element id in DOM
 */
function hide(id) {
    document.getElementById(id).style.display = "none";
}

/**
 * check if mail is correct
 * @param {string} mailString
 * @returns true if email format is valid, and false otherwise
 */
function isMail(mailString) {
    var reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return reg1.test(mailString);
}