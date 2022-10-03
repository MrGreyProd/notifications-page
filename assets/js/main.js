let markButton = document.querySelector('.mark-btn');
let notificationDots = document.querySelectorAll('.dot-new');
let notificationCounter = document.querySelector('.header-counter');

markButton.addEventListener('click', (e) => {
    for (let i = 0; i < notificationDots.length; i++){
        notificationDots[i].style.animation = "shrimp 0.1s"
        notificationDots[i].style.width = "0";
    }
    notificationCounter.innerHTML = "<span>0</span>";
});