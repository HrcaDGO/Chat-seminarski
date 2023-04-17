const adjectives = ['Crni', 'Plavi', 'Zeleni'];
const nouns = ['Hrvoje', 'Hrca', 'Dumba'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
