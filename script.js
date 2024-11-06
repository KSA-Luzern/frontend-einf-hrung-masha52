 function go(){
    let text =  String(document.getElementById("eingabe").value); 
    
    if(text.includes("müde")){
        document.getElementById("linkesAuge").innerHTML = "o"
        document.getElementById("rechtesAuge").innerHTML = "o"
    }

    if(text.include("hässig")){
        document.getElementById("gesicht").style.backgroundColor = "red";
    }

    if(text.include("zwinkern")){
        document.getElementById("linkesAuge").innerHTML = "-"
    }

    if(text.include("schmollen")){
        document.getElementById("mund").innerHTML = "-"
        document.getElementById("mund").style.width = "25%"; 
        document.getElementById("mund").style.marginLeft = "35%"; 
    }
 }

