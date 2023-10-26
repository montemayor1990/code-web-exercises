const createPairs = (arr) => {
    // your code here
    let randomPair = students
        for (let i = randomPair.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomPair[i], randomPair[j]] = [randomPair[j], randomPair[i]];
        }
        pairs = [];
        let currentIndex = 0;
        while (currentIndex < randomPair.length) {
            let groupSize = 2
            if (currentIndex + groupSize > randomPair)
        }
        return pairs;
};

const students = [
    "Amanda",
    "Bianca",
    "Cameron",
    "Chris",
    "Dany",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Jonathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Luis",
];

console.log(createPairs(students));
// Expected output (pairs will be different each time):
/*
[
    [ 'Amanda', 'Bianca' ],
    [ 'Cameron', 'Chris' ],
    [ 'Dany', 'David' ],
    [ 'Diana', 'Drew' ],
    [ 'Evan', 'Hassan' ],
    [ 'Jack', 'Jason' ],
    [ 'John', 'Jonathan' ],
    [ 'Jordan', 'Joshua' ],
    [ 'Katie', 'Luis' ]
]
*/