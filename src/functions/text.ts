export function textLimit(text: String){
  if(text){
    if(text.length > 175)
      return text.substring(0,175) + "...";
    else
      return text;
  } else {
    return "No description given.";
  }
}

export function removeSpaces(text: String){
  if(text)
    return text.replace(/\s/g, '');
}

export function fixFormat(text: String){
  text = text.trim().replace(/<br>/g,"");
  return text;
}

export function capitalize(text: String) {
  if(text)
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  else
    return "";
}