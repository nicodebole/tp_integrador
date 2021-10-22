const getTotal = () => {
    const cantidad = document.getElementById("cantidad").value
    const categoria = document.getElementById("categoria").value
    let total = 0
    const precioTicket = 200

    switch (categoria) {
        case "estudiante": total = cantidad * 20 * precioTicket / 100
            break
        case "trainee": total = cantidad * 50 * precioTicket / 100
            break
        default: total = cantidad * 85 * precioTicket / 100
    }

    document.getElementById("total").innerText = total
}

const borrar = () => {
    document.getElementById("nombre").value = null
    document.getElementById("apellido").value = null
    document.getElementById("correo").value = null
    document.getElementById("cantidad").value = null
    document.getElementById("categoria").value = null
    document.getElementById("total").innerText = null
}