/* eslint-disable */
module.exports = {
    languageData: {
        "plurals": function (n, ord) {
            if (ord) return "other";
            return n == 1 ? "one" : "other"
        }
    },
    messages: {
        "Hi people": "Hola gente"
    }
};