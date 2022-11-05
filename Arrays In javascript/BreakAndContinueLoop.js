const negi = [
    'Sushant',
    'Negi',
    2022 - 1998,
    'teacher',
    ['Santosh', 'Vinay', 'Sachin'],
    true
];
const types = [];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < negi.length; i++) {
    if (typeof negi[i] !== 'string') {
        continue;
    }

    console.log(negi[i], typeof negi[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < negi.length; i++) {
    if (typeof negi[i] === 'number') break;

    console.log(negi[i], typeof negi[i]);
}

