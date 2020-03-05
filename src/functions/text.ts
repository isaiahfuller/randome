export function textLimit(text: String){
    if(text.length > 175)
        return text.substring(0,175);
    else
        return text;
}

export function removeSpaces(text: String){
    if(text)
        return text.replace(/\s/g, '');
}