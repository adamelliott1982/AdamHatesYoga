var imageNumber = 1;

var timer = setInterval(nextPicture, 5000)


function previousPicture() {
    imageNumber -=1;
    if(imageNumber < 1) {
        imageNumber = 10;
    }
    document.getElementById('yoga-pic').src = './media/gallery' + imageNumber + '.JPG'
}

function nextPicture(){
    imageNumber += 1;
    if (imageNumber > 10) {
        imageNumber = 1;
    }
    document.getElementById('yoga-pic').src = './media/gallery' + imageNumber + '.JPG'
}
