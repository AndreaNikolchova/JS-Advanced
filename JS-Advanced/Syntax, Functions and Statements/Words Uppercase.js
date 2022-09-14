function uppercase(phrase)
{
    let words = phrase.match(/\w+/g).join(", ").toUpperCase();
    console.log(words);
}
uppercase('Hi, how are you?');