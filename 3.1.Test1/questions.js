
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let concat= texte1 + texte2
    return concat
}
let afficherCar5 =  (texte) => {
    return texte [4]
}
let afficher9Car =  (texte) => {
    return texte.substr(0,9);
    
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
}
let IsString =  (texte) => {
    return typeof "" === 'string';
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return (Math.pow(x, y));
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let map = array.map (i=> Math.abs(i))
    return map ;
}
let sufaceCercle =  (rayon) => {
    return Math.round ((rayon**2)*Math.PI);
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt ((ab**2)+(ac**2));
}
let calculIMC =  (poids, taille) => {
    let imc = poids  / (taille*taille);
    return Math.round (imc*100)/100
    
    

}
