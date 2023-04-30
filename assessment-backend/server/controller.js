module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },



    getFortune: (req, res) => { 
        const fortunes = [
        'good times are coming your way',
        'Friendship is key for lifetime happiness',
        'having sound mind does not equal a sound heart',
        `Keep on truck'n friend!`,
        'Is money really worth your time'
]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
},
    getCard: (req, res) => {
        const cards = ['Doom Blade', 'Emrakul, Promised End', 'Teferis protection', 'Thalai and the Gitrog Monster', 'Wrenn and Six']

        let randomIndex = Math.floor(Math.random() * cards.length);
        let randomCard = cards[randomIndex];

        res.status(200).send(randomCard)
    }


}