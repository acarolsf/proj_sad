// window.localStorage.setItem('ano', ano);


window.onkeypress = function() {
    
    var ano = document.getElementById("ano").value;
    var curso = document.getElementById("curso").value;

    if(ano != null || curso != "Selecione um curso"){
        document.getElementById("buscar").disabled=false;
    } else {
        document.getElementById("buscar").disabled=true;
    }

};    

function aparecer() {

    var curso = document.getElementById("curso").value;
    var estado = document.getElementById("estado").value;
    var instituicao = document.getElementById("instituicao").value;
    var ano = document.getElementById("ano").value;
    
    // document.getElementById("curso").reset();
    // document.getElementById("estado").reset();
    // document.getElementById("instituicao").reset();
    // document.getElementById("ano").reset();

    document.getElementById("curso-div").innerHTML = curso;
    document.getElementById("titulo-card").innerHTML = "Principais resultados de " + ano;
    document.getElementById("titulo-card2").innerHTML = "Conclusões por ano";
    document.getElementById("titulo-card3").innerHTML = "Desistências por ano";
    document.getElementById("total").innerHTML = "Total de alunos de " + curso;
    document.getElementById("desistiram").innerHTML = "Total de Alunos que desistiram de " + curso;
    document.getElementById("concluiram").innerHTML = "Total de Alunos que concuíram " + curso;
    var x = document.getElementById("graficos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
function desaparecer () {
    var x = document.getElementById("graficos");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}