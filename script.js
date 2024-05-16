

    let size = document.getElementById("size")
    size.style.maxHeight = "0px";

    function toggleMenu() {
        if(size.style.maxHeight == "0px"){
            size.style.maxHeight = "300px";
        }
        else{
            size.style.maxHeight = "0px";

        }
    }
