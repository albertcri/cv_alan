document.getElementById("boton").onclick= function() {
    document.getElementById("demo").innerHTML="5125432167"
    }
    document.getElementById("botone").onclick= function() {
        document.getElementById("email").innerHTML="alan.robinson@example.com"
    }
    document.getElementById("botondire").onclick= function() {
    document.getElementById("domicilio").innerHTML="7680 Shady Ln Dr, Milan, Italia"
    }
    document.getElementById("columna").addEventListener("mouseover", mouseOver);
    document.getElementById("columna").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("fn").innerHTML= "Fecha de nacimiento: 21/01/1981";
    }
    
    function mouseOut() {
      document.getElementById("fn").innerHTML = "";
    }