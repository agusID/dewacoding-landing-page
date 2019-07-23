window.onload = function(){
    
    let dropdown = document.querySelector('.dropdown-menu')
    let dropdownLink = document.querySelector('.dropdown-menu > .link');
    dropdown.onmouseover = function(){
        dropdownLink.classList.add('active')
    }
    dropdown.onmouseleave = function(){
        dropdownLink.classList.remove('active')
    }

    // Check current URL (index)
    let checkIndexPage =  (window.location.href.indexOf("index") > -1) ? true : false;
    if(checkIndexPage) {

        // Image Slider
        let idx = 0;
        imageSlider();
        function imageSlider() {
            
            let arrImage = document.getElementsByClassName("image-slider")
            for (let i = 0; i < arrImage.length; i++) {
                arrImage[i].classList.add('hide')
            }
            idx++
            if (idx > arrImage.length) idx = 1
            arrImage[idx-1].classList.remove('hide')

            setTimeout(imageSlider, 9000)  
        }

        // Image Slider
        let idCaption = 0
        captionSlider()
        function captionSlider() {
            
            let arrCaption = document.getElementsByClassName("caption");
            for (let i = 0; i < arrCaption.length; i++) {
                arrCaption[i].classList.add('hide')
            }
            idCaption++
            if (idCaption > arrCaption.length) idCaption = 1
            arrCaption[idCaption-1].classList.remove('hide')

            setTimeout(captionSlider, 9000) 
        }

    }
    // Check Screen Width
    let 
    win = window,
    doc = document,
    docElement = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    screenWidth = win.innerWidth || docElement.clientWidth || body.clientWidth;

    // random (-6 to 6)
    if(screenWidth > 500 && checkIndexPage == true){
        for(let i = 1; i <= 4; i++){
            let rand = Math.floor((Math.random() * 12) - 6);
            let varName = '.rotate-'+i
            document.querySelector(varName).style.transform = "rotate("+rand+"deg)"
        }
    }
}