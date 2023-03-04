var registros = localStorage.getItem("registros");
registros = JSON.parse(registros)

function registrar() {

    var nuevo = document.getElementById("alias").value;

    for (var i = 0; i < registros.length; i++) {
        var aux = JSON.parse(registros[i]);

        if (nuevo != aux) {
            var registro = JSON.stringify({
                alias: nuevo,
                puntos: 0,
                mejor: 0
            });

            registros.push(registro);
            localStorage.setItem("registros", JSON.stringify(registros));
            alert("nuevo jugar añadido");
        }
    }


}