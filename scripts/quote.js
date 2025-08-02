async function generateQuote() {
    const res = await fetch(QUOTE_API_URL, {
        method: "GET",
        headers: {
            "x-rapidapi-host": QUOTE_API_HOST,
            "x-rapidapi-key": QUOTE_API_KEY
        }
    });
    const data = await res.json();

    // handle too many request error from API
    if(data.author == "zenquotes.io") {
        const quotes = BACKUP_QUOTE;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        return selectedQuote;
    }
    return {content: data.quote, author: data.author};
}