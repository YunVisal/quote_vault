async function generateQuote() {
    const res = await fetch(QUOTE_API_URL);
    const data = await res.json();
    const quote = data[0];

    // handle too many request error from API
    if(quote.a == "zenquotes.io") {
        const quotes = BACKUP_QUOTE;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        return selectedQuote;
    }
    return {content: quote.q, author: quote.a};
}