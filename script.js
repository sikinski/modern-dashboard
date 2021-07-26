const toggleEl = document.querySelector('.toggle');
const navigationEl = document.querySelector('.navigation');
const avatar = document.querySelector('.avatar');
const mainContent = document.querySelector('.main');
const topbar = document.querySelector('.topbar')
const cardBox = document.querySelector('.cardBox');
const updatesCardsEl = document.querySelector('.updates-cards');
console.log(navigationEl);

console.log(toggleEl);

/*toggleEl.addEventListener('click', function () {
    if(!!profilePic.classList.contains('big-prof-pic')) {
        profilePic.classList.add('small-prof-pic');
    }
    if (!!navigationEl) {
    navigationEl.style.width = (navigationEl.style.width=='240px')?'60px':'240px';
    return false;
    }
   
})*/
console.log(topbar);
console.log(document.querySelector('.search'));


console.log(document.documentElement.clientWidth );

if (document.documentElement.clientWidth > 700) {
    toggleEl.addEventListener('click', function() {
        navigationEl.classList.toggle('hide-navigation');
        mainContent.classList.toggle('main-content_large');
        avatar.classList.toggle('small-avatar');
        topbar.classList.toggle('topbar-full');
    })
} /*else {
    navigationEl.classList.add('non-display');
    toggleEl.addEventListener('click', function() {
        if(navigationEl.classList.contains('hide-navigation')) {
            navigationEl.classList.toggle('non-display');
        } else {
            navigationEl.classList.toggle('hide-navigation');
        }
    });
}*/



