const hashTagRegex = /#\w+/;

export const makeHashtag = (cb, text) => {

    cb(text)

    return text.split(" ").map((word, index) => {

        if (hashTagRegex.test(word)) {
            return (
                <a key={index} href={"/related/" + word} title={word} className="link">
                    {word + " "}
                </a>
            );
        }
        return word + " ";

    });
} 
