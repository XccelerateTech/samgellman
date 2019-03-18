function getELementsByID (IDName) {
    document.getElementById(IDName).innerHTML = '';
}


buttonLearn = document.getElementById('learn-more');

buttonLearn.addEventListener('click', function() {
    buttonLearn.innerHTML = "Buy Flowers";
    titleVar = document.getElementById('byootiful');
    titleVar.innerHTML = "Welcome to my flowershop";
    headingWidth = document.getElementById('firstHeading');
    headingWidth.style.width = "600px";
});


icons = document.getElementsByClassName("icon");

/*
title = document.getElementsByClassName("title-page");
learnButton = document.getElementById('learn-more');
learnButton.innerHTML = "Buy Some Flowers";
*/

for (let icon of icons) {
    let thisImage = icon.firstChild.nextSibling;
    console.log(thisImage);
    thisImage.addEventListener('mouseover', function() {
        console.log('happy!');
        thisImage.style.width = "148px";
        thisImage.style.height = "148px";
        thisImage
    });

    thisImage.addEventListener('mouseleave', function() {
        console.log('happy!');
        thisImage.style.width = "112px";
        thisImage.style.height = "112px";
        thisImage
    });
}