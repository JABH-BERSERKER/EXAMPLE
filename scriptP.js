function calificar() {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        let respuesta = document.querySelector(`input [name="p` + i + `"]:checked`);

            if (respuesta && respuesta.value === "1") {
                total++;
            }
    }
    
    document.getElementById("resultado").innerText=
        "Tu calificación es: " + total + "/10";
}