// clase constructora de objetos
class Persona{
    constructor(nombre,apellido,documento){
        this.nombre=nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

// clase con el metodo
class Interfaz{
    anadirPersona(persona){
        // licalizar el contenedor
        const lista = document.getElementById('perosnas-list');
        // agregar al contenedor
            // crea un div
        const elemento = document.createElement('div') 
        elemento.innerHTML+=`
        <div class="card text-center mb-4 ">
                        <div class="card-body "> 
                            <p><strong>Nombre</strong>: ${persona.nombre} </p>
                            <p><strong>Apellido</strong>:  ${persona.apellido} </p>
                            <p><strong>Documento</strong>:  ${persona.documento} </p>
                            <a href="#" class="btn btn-danger" name="eliminar" >Eliminar</a>
                        </div>
                    </div>`;
                // agrega el elemento como hijo a lista
        lista.appendChild(elemento);    
        // llama a al la funcion dejarblanco
        this.dejarblanco()
    }
    // funcion dejar blanco limpia el formulario
    dejarblanco(){
        document.getElementById('perosnas-form').reset()
    }
    // la funcions eliminarPersonas elimina la persona en el  html 
    eliminarPersonas(elemento){
        if(elemento.name == 'eliminar'){
            console.log('eliminar')
            elemento.parentElement.parentElement.parentElement.remove()
        }
    }
    // alerta de mensajes
    mostrarMensaje(mensaje,tipo){
        // crea contenedor 
        const div = document.createElement('div');
        div.className= `alert alert-${tipo}`;
        div.appendChild(document.createTextNode(mensaje));
        // constntes para posicionamiento de contenedor 
        const contenedor= document.getElementsByClassName('container');
        const app = document.getElementById('app')
        // se inserta entre el .container y el .app
        contenedor[0].insertBefore(div,app)
        setTimeout(()=>{
            document.querySelector('.alert').remove();
            // se deshabilita el boton mientras se muestra la alerta
            document.querySelector('.btn').disabled= false
        },(2000))
    }
}

// acceder a los metodos de Interfaz
const interfaz = new Interfaz

document.getElementById('perosnas-form').addEventListener('submit',event=>{
    // detiene la funcion por defecto  delk submit
    event.preventDefault();
    document.querySelector('.btn').disabled= true

    // captura los datos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const documento = document.getElementById('documento').value;

    // verifica que los campos no esten vacios
    if(nombre=== ''|| apellido ==='' || documento===''){
        // alert(`tiene campos vacios, revise e intente nuevamente`)
        const msg = 'tiene campos vacios, revise e intente nuevamente'
        interfaz.mostrarMensaje(msg, 'warning')
    }else{
        // crea persona
        const persona =new Persona(nombre,apellido,documento);
        interfaz.anadirPersona(persona)
        const msg = 'añadido correctanmento'
        interfaz.mostrarMensaje(msg, 'success')
    }
})

document.getElementById('perosnas-list').addEventListener('click',evento=>{
    interfaz.eliminarPersonas(evento.target)
})
