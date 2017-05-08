var arrChicas= [
    new MiembroSquad("fer", "Fernanda Zamora", "30", ["Escuchar música", "Hacer fotografías", "Pensar en el existencialismo"]),
    new MiembroSquad("vale", "Valentina Miranda", "26", ["Dibujar","ver anime y series", "Cocinar"]),
    new MiembroSquad("cindy","Cindialy Berrios", "23", ["Trekking","Escuchar música", "Deporte"]),
    new MiembroSquad("espe","Esperanza Lucero", "25", ["Fotografía", "Leer", "Dormir"]),
    new MiembroSquad("nata","Natalia Villalobos","30", ["Tocar batería", "Dormir", "Hacer queques"]),
    new MiembroSquad("diana","Diana Villasmil","29", ["Ver series Coreanas", "Cantar", "Escuchar música"]),
    new MiembroSquad("vann", "Vanessa Pellegrini", "25", ["Jugar lol", "Ver series", "Visitar parques"])
];

arrChicas.forEach(function(chica){
    var htmlListaHobbies = '';
    chica.hobbies.forEach(function(hobby){
        htmlListaHobbies += '<li>' + hobby + '</li>';
    });

    var htmlChica =
        '<div class="chica">' +
            '<p><img class="foto" src="assets/img/' + chica.id + '.jpg" alt="' + chica.nombre + '"></p>' +
            '<p><strong>Nombre: </strong>' + chica.nombre + '</p>' +
            '<p><strong>Edad: </strong>' + chica.edad + '</p>' +
            '<p><strong>Hobbies: </strong>' +
                '<ul>' +
                    htmlListaHobbies +
                '</ul>' +
            '</p>' +
            '<textarea id="nuevo_comentario_' + chica.id + '"></textarea>' +
            '<button onclick="dejarComentario(\'' + chica.id + '\')">Dejar comentario</button>' +
            '<div id="comentarios_' + chica.id + '"></div>' +
        '</div>';

    document.getElementById("chicas").innerHTML += htmlChica; 
});

function dejarComentario(id_miembro){
    chica = arrChicas.filter(function(chica){
        return chica.id == id_miembro;
    })[0];

    var nuevo_comentario = document.getElementById("nuevo_comentario_" + id_miembro).value;
    comentario = new Comentario(id_miembro, nuevo_comentario, "like");

    chica.comentarios.push(comentario);
    document.getElementById("comentarios_" + id_miembro).innerHTML += 
        '<li>' + 
            nuevo_comentario + 
            '<i id="like_' + id_miembro + '" class="fa fa-heart" aria-hidden="true"></i>' +
        '</li>'; 
}

function MiembroSquad(id,nombre,edad,hobbies){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.hobbies = hobbies;
    this.comentarios = [];
}

function Comentario(id_miembro,comentario,likes){
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = likes;    
}

