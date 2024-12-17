const urlRegex = /\b((https?:\/\/)?((www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)([\/\w\-?=%&.]*)?))\b/;




export const makeClickable = (text) => {

  return text.split(" ").map((word, index) => {
    if (urlRegex.test(word)) {
      return (
        <a key={index} href={word} title="link" className="link" target="_blank" rel="noopener noreferrer">
          {word}
        </a>
      );
    }
    return word + " "; // Preserve spaces
  });
};