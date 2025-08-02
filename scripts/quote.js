async function generateQuote() {
    const res = await fetch(QUOTE_API_URL);
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