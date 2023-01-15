       // ele = document.getElementById("ele1")
       // function pintar(color) {
       //     ele.style.backgroundColor = 'yellow'
       // }
       // ele.addEventListener("click", pintar);
       ele = document.getElementById("ele1")
        function pintar(color = 'green') {
            ele.style.backgroundColor = color
        }
        ele.addEventListener("click", () => { pintar('yellow') } );