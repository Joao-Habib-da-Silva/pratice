var type = new Typed("#type",{
strings: ['<h1>Welcome to <span>DevFlow</span></h1>'],
typeSpeed: 60,
})
var navbar = window.document.getElementById("navbar")
function Open() {
    navbar.classList.toggle("open")
}
anime({
    targets: '#firstbar',
    width: '80%',
    loop: true,
    direction: 'alternate', 
    duration: 1000,
    easing: 'easeInOutQuad'
})
anime({
    targets: '#secondbar', 
    width: '50%',
    loop: true,
    direction: 'alternate', 
    duration: 1000,
    easing: 'easeInOutQuad'
})
anime({
    targets: '#thirdbar', 
    width: '70%',
    loop: true,
    direction: 'alternate', 
    duration: 1000,
    easing: 'easeInOutQuad'
})