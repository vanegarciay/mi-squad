function MiembroSquad(nombre,edad,hobbies){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbies = hobbies;
}
var arrChicas= [
    new MiembroSquad("Fernanda Zamora", "30", ["Escuchar música", "Hacer fotografías", "Pensar en el existencialismo"]),
    new MiembroSquad("Valentina Miranda", "26", ["Dibujar","ver anime y series", "Cocinar"]),
    new MiembroSquad("Cindialy Berrios", "23", ["Trekking","Escuchar música", "Deporte"]),
    new MiembroSquad("Esperanza Lucero", "25", ["Fotografía", "Leer", "Dormir"]),
    new MiembroSquad("Natalia Villalobos","30", ["Tocar batería"]),
    new MiembroSquad("Diana Villasmil","29", ["Ver series Coreanas", "Cantar", "Escuchar música"])
];

arrChicas.forEach(function(chica){
    var htmlListaHobbies = '';
    chica.hobbies.forEach(function(hobby){
        htmlListaHobbies += '<li>' + hobby + '</li>';
    });

    var htmlChica =
        '<div class="chica">' +
            '<p><strong>Nombre: </strong>' + chica.nombre + '</p>' +
            '<p><strong>Edad: </strong>' + chica.edad + '</p>' +
            '<p><strong>Hobbies: </strong></p>' +
            '<ul>' +
                htmlListaHobbies +
            '</ul>' +
        '</div>';

    document.getElementById("chicas").innerHTML += htmlChica; 
});