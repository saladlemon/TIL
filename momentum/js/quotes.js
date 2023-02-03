const quotes = [
    {
        quote: "Ba-banana ba-ba-banana-nana.",
        author: "Power up",
    },
    {
        quote: "It's so tasty Come and chase me.",
        author: "Icecream cake",
    },
    {
        quote:"We play until the moon gets stuck in the jungle gym.",
        author: "Peek-A-Boo",
    },
    {
        quote:"Like the starlight in the sky, it's far away or closer than I thought, but it's all shining in my eyes.",
        author: "Campfire",
    },
    {
        quote:" We are beautiful and very sad, let each other shine.",
        author: "Psycho",
    },
    {
        quote:"Everything will be fine by the time you open your eyes.",
        author: "Like water",
    },
    {
        quote:"When you look at each other, you laugh.",
        author: "Best Friend",
    },
    {
        quote:"Following the glare, I draw the day.",
        author: "You better know",
    },
    {
        quote:"Let's blow away the pollen.",
        author: "Feel my rhythm",
    },
    {
        quote:"What I like the most is you in summer.",
        author: "Red flavor",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;