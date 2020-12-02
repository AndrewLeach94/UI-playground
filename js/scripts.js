// -------------------------------- Dropdown Module ---------------------------------------------------
const DropdownMenu = (() => {
    const servicesList = document.querySelector("#list-services");
    const subMenu = document.querySelector("#dropdown_submenu");

    const makeVisible = () =>{
        subMenu.className = "dropdown_submenu-visible";
    }
    
    const makeInvisible = () =>{
        subMenu.className = "dropdown_submenu-hidden";

    };

    const hideMenu = () => {
        subMenu.className = "dropdown_submenu-removed";
    }

    const applyListener = (() => {
        servicesList.addEventListener("mouseover", makeVisible);
        servicesList.addEventListener("mouseout", makeInvisible);
    })();
})();

// -------------------------------- Mobile Nav --------------------------------------------------------
const MobileMenu = (() => {
    const navBar = document.querySelector(".mobile_nav-close");
    const menuButton = document.querySelector("#menu-button");
    
    const open = () =>{
        navBar.className = "mobile_nav-open";

        //change menu button styling
        menuButton.className = "fas fa-times";

        //swap listener
        menuButton.removeEventListener("click", open);
        menuButton.addEventListener("click", close);
    }
    
    const close = () =>{
        navBar.className = "mobile_nav-close";

        //change menu button styling
        menuButton.className = "fas fa-bars";

        //swap listener
        menuButton.removeEventListener("click", close);
        menuButton.addEventListener("click", open);
        

    };

    const applyListener = (() => {
        menuButton.addEventListener("click", open);
    })();

})();

//--------------------------------IMAGE SLIDER ------------------------------------------------------
const ImageSlider = (() => {
    const forwardArrow = document.querySelector("#slider_forward");
    const backArrow = document.querySelector("#slider_back");

    //the actual movement of images is done with CSS using grid. Not much here besides swapping classes around
    const cycleForward = () => {
        const previousImage = document.querySelector(".slider_image-inactive-left");
        const featuredImage = document.querySelector(".slider_image");
        const nextImage = document.querySelector(".slider_image-inactive-right");
    
        
    
        featuredImage.className = "slider_image-inactive-left";
        nextImage.className = "slider_image";
        previousImage.className = "slider_image-inactive-right";

        //update the buttons
        const updateNavButtons = updateButtons();

        const resetIntervalTimer = (() => {
            clearInterval(timer);
            timer = setInterval(cycleForward, 5000);
        })();
        
        return updateNavButtons;
    };
    
    const cycleBackward = () => {
        const previousImage = document.querySelector(".slider_image-inactive-left");
        const featuredImage = document.querySelector(".slider_image");
        const nextImage = document.querySelector(".slider_image-inactive-right");
    
        
    
        featuredImage.className = "slider_image-inactive-right";
        nextImage.className = "slider_image-inactive-left";
        previousImage.className = "slider_image";

        //update the buttons
        const updateNavButtons = updateButtons();

        const resetIntervalTimer = (() => {
            clearInterval(timer);
            timer = setInterval(cycleForward, 5000);
        })();
        
        return updateNavButtons;

    };

    //automatically cycle through every 5 seconds
    let timer = setInterval(cycleForward, 5000);

    const updateButtons = () => {
        const image1 = document.querySelector("#image_1");
        const image2 = document.querySelector("#image_2");
        const image3 = document.querySelector("#image_3");

        const button1 = document.querySelector("#button_1");
        const button2 = document.querySelector("#button_2");
        const button3 = document.querySelector("#button_3");
        
        if (image2.className == "slider_image") {
            button2.className = "slider_button";

            //change other buttons
            button1.className = "slider_button-inactive";
            button3.className = "slider_button-inactive";
        }

        else if (image3.className == "slider_image") {
            button3.className = "slider_button";
            
            
            button1.className = "slider_button-inactive";
            button2.className = "slider_button-inactive";
        }

        else {
            button1.className = "slider_button";

            button2.className = "slider_button-inactive";
            button3.className = "slider_button-inactive";
        }
    }

    //tie the buttons with the images

    const buttonNavListeners = (() => {
        const image1 = document.querySelector("#image_1");
        const image2 = document.querySelector("#image_2");
        const image3 = document.querySelector("#image_3");

        const button1 = document.querySelector("#button_1");
        const button2 = document.querySelector("#button_2");
        const button3 = document.querySelector("#button_3");

        button2.addEventListener("click", () => {
            image2.className = "slider_image";

            image1.className = "slider_image-inactive-left";
            image3.className = "slider_image-inactive-right";
        })
        
        button1.addEventListener("click", () => {
            image1.className = "slider_image";

            image2.className = "slider_image-inactive-right";
            image3.className = "slider_image-inactive-left";
        })

        
        button3.addEventListener("click", () => {
            image3.className = "slider_image";

            image2.className = "slider_image-inactive-left";
            image1.className = "slider_image-inactive-right";
        })


    })();



    const addEventListener = (() => {
        forwardArrow.addEventListener("click", cycleForward);
        backArrow.addEventListener("click", cycleBackward);
    })();
})();