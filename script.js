// menu collapse change with screen size

    if($(window).width() > 700) {
        $('#demo2').addClass('collapse-show');
        $('#demo2').removeClass('collapse');
        $('#demo3').addClass('collapse-show');
        $('#demo3').removeClass('collapse');
    }

// modal

let body = document.getElementsByTagName("body")[0]
let largeModal = document.getElementById("exampleModal")
let modal = document.getElementsByClassName("modal-body")[0];


body.addEventListener("click", (event) => {

    if (event.target.hasAttribute("src") && window.innerWidth > 600) {
        modal.innerHTML = `<img src="${event.target.getAttribute("src")}">`;
        let img = modal.querySelector("img");
        img.style.width = "80%"
        img.style.margin = "0 auto"
        
    } else if (window.innerWidth < 600) {
        largeModal.style.display = "none";
        console.log("hello")
    }
    
    
})
