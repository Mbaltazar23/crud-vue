import Swal from "sweetalert2"
import axios from "axios"

export function show_alerta(mensaje, icono, foco = '') {
    if (foco !== '') {
        document.getElementById(foto).focus()
    }
    Swal.fire({
        title: mensaje,
        icon: icono,
        customClass: {
            confirmButton: 'btn btn-rrimary',
            popup: 'animated soomIn'
        },
        buttonsStyling: false
    })
}

export function confirmar(id, name) {
    var url = 'http://laraproducts.test/api/products/' + id
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success m-2', // Agrega clases de Bootstrap y margen
            cancelButton: 'btn btn-danger m-2' // Agrega clases de Bootstrap y margen
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Seguro que desea eliminar el producto " + name,
        text: 'Se perdera la informacion del producto',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, Eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            enviarSolicitud("DELETE", {
                id: id
            }, url, "Producto Eliminado !!")
        } else {
            show_alerta("Operacion Cancelada", 'info')
        }
    })
}

export function enviarSolicitud(metodo, parametros, url, mensaje) {
    axios({method: metodo, url: url, data: parametros}).then(function (respuesta) {
        var status = respuesta.data[0]['status'];
        if (status === 'success') {
            show_alerta(mensaje, status)
            window.setTimeout(function () {
                window.location.href = "/"
            }, 1000)
        } else {
            var listado = ""
            var errores = respuesta.data[1]["errors"]
            Object.keys(errores).forEach(key => listado += errores[key][0] + ",")
            show_alerta(listado, 'error')
        }
    }).catch(function (error) {
        show_alerta("Error en la solicitud", 'error')
    })
}
