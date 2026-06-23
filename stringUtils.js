//Start
const capitalize = str => {
    if (typeof str !== 'string') {
        return '';
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverse = str => {
    if (typeof str !== 'string') {
        return '';
    }

    return str.split('').reverse().join('');
};

const contains = (str, substr) => {
    if (typeof str !== 'string' || typeof substr !== 'string') {
        return '';
    }

    return str.includes(substr);
};

module.exports = {
capitalize, reverse, contains
}