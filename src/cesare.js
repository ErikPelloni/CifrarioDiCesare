/**
 * Autore: Erik Pelloni
 * Data Creazione: 20.04.2021
 * Data ultima modifica: 04.05.2021
 */

// pos == numero di posizioni
function getValue() {
    var pos = Number.parseInt(document.querySelector("#num").value);
    return pos;
}

function cesare() {
    var output = document.querySelector("#in").value;
    while (output.match(/\d+/)) {
        num = output.match(/\d+/)
        output = output.replace(num, romanize(num));
    }
    output = caesarShift(output, getValue());
    document.querySelector("#out").innerHTML = output.replace(/\s/g, '');
}


// https://gist.github.com/EvanHahn/2587465
var caesarShift = function (str, amount) {
    // Wrap the amount
    if (amount < 0) {
        return caesarShift(str, amount + 26);
    }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        var c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            var code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }

        // Append
        output += c;
    }

    return output;
};
/*
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php
function roman_to_Int(str1) {
    if (str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;

    for (var i = 1; i < str1.length; i++) {
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i - 1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
}
function char_to_int(c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}*/


function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

