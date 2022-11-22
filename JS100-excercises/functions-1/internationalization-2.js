// Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. 
// The locale allows us to greet people from different countries differently also when they share the language, for example: 


function extractLanguage(locale) {
  return locale.split("_")[0];
}

function extractRegion(locale) {
  return locale.split("_")[1].split(".")[0];
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (lang) {
    case "en":
      switch (region) {
        case "US":
          console.log("Hey");
          break;
        case "GB":
          console.log("Hello!");
          break;
        case "AU":
          console.log("Howdy!");
          break
        }
      break;
    default:
      console.log("I don't know this place/language");
  }
}


localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
