let lang=prompt("choose a language code(es, de, en, fr):");
let translatedVersion;
if (lang === "es"){
    translatedVersion = "Hola Mundo";
}else if (lang ==="de"){
    translatedVersion = "Hallo Welt";
}else if (lang ==="en"){
    translatedVersion = "Hello World";
}else if (lang ==="fr"){
    translatedVersion = "Bonjour le monde";
}else{
    translatedVersion = "Hello World";
}
console.log("Hello World translated in " + lang +" is " + translatedVersion);