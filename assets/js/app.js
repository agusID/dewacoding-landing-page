window.onload = function(){
    
    var dropdown = document.querySelector('.dropdown-menu');
    var dropdownLink = document.querySelector('.dropdown-menu > .link');
    dropdown.onmouseover = function(){
        dropdownLink.classList.add("active");
    }
    dropdown.onmouseleave = function(){
        dropdownLink.classList.remove("active");
    }

    // Check current URL (index)
    var checkIndexPage =  (window.location.href.indexOf("index") > -1) ? true : false;
    if(checkIndexPage) {

        // Image Slider
        var idx = 0;
        imageSlider();
        function imageSlider() {
            
            var arrImage = document.getElementsByClassName("image-slider");
            for (let i = 0; i < arrImage.length; i++) {
                arrImage[i].classList.add('hide'); 
            }
            idx++;
            if (idx > arrImage.length) idx = 1;
            arrImage[idx-1].classList.remove('hide');

            setTimeout(imageSlider, 9000);    
        }

        // Image Slider
        var idCaption = 0;
        captionSlider();
        function captionSlider() {
            
            var arrCaption = document.getElementsByClassName("caption");
            for (let i = 0; i < arrCaption.length; i++) {
                arrCaption[i].classList.add('hide'); 
            }
            idCaption++;
            if (idCaption > arrCaption.length) idCaption = 1;
            arrCaption[idCaption-1].classList.remove('hide');

            setTimeout(captionSlider, 9000);    
        }

    }
    // Check Screen Width
    var 
    win = window,
    doc = document,
    docElement = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    screenWidth = win.innerWidth || docElement.clientWidth || body.clientWidth;

    // random (-6 to 6)
    if(screenWidth > 500 && checkIndexPage == true){
        for(let i = 1; i <= 4; i++){
            let rand = Math.floor((Math.random() * 12) - 6);
            let varName = '.rotate-'+i;
            document.querySelector(varName).style.transform = "rotate("+rand+"deg)";
        }
    }

    // FORM VALIDATION

    /* Initialization Field */
    var productName = document.getElementById("ProductName"),
        qty = document.getElementById("Quantity"),
        name = document.getElementById("Name"),
        email = document.getElementById("Email"),
        phone = document.getElementById("PhoneNumber"),
        address = document.getElementById("Address"),
        agree = document.getElementById("Agreement"),
        btnOrder = document.getElementById("btnOrder");
    var errorMessage = "";
    btnOrder.onclick = function(event){
        event.preventDefault();
        
        /* Product Field */
        if(productName.value == "") errorMessage = "Product Name must be filled."; 
        else if(qty.value < 1) errorMessage = "Quantity must greater than zero.";
        
        /* User Field - Name */
        else if(name.value == "") errorMessage = "Name must be filled.";
        else if(name.value.length <= 3) errorMessage = "Name must be greater than 3 characters.";
        
        /* User Field - E-Mail */
        else if(email.value == "") errorMessage = "Email must be filled.";
        else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) errorMessage = "Email must contain '@' and '.'";
        else if(email.value.substring(email.value.indexOf('@')+1, email.value.length).indexOf('@') > -1 ) errorMessage = "Email must consist only one '@'.";
        
        /* User Field - Phone */
        else if(isNaN(phone.value)) errorMessage = "Phone must be numeric characters.";
        else if(phone.value.length < 10) errorMessage = "Phone must be greater than 10 digits.";

        /* User Field - Address */
        else if(address.value == "") errorMessage = "Address must be filled.";
        else if(address.value.length < 10) errorMessage = "Address must be greater than 10 characters.";
        else if(address.value.trim().split(' ').length < 3) errorMessage = "Address minimal contains 3 words.";
        else if(!address.value.includes('street')) errorMessage = "Address must contain 'street'.";

        /* Confirmation Field - Agreement */
        else if(agree.checked == false) errorMessage = "Agreement must be checked.";
        else {
             
            errorMessage = "Address must contain 'street'.";
            alert('Thank you for ordering!.');
            document.location.href = 'order.html';
        }

        document.getElementById("ErrorMessage").innerHTML = errorMessage;


    }

}