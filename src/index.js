module.exports = function toReadable(number) {
    if (!number) return "zero";

    const digit1 = number % 10;
    const digits21 = number % 100;
    const digit2 = (digits21 - digit1) / 10;
    const digits321 = number % 1000;
    const digit3 = (digits321 - digits21) / 100;

    let strDigit3 = "";
    if (digit3) {
        strDigit3 = toReadable(digit3) + " hundred";
    }

    let strDigits21 = "";
    if (digits21) {
        switch (digits21) {
            case 1:
                strDigits21 = "one";
                break;
            case 2:
                strDigits21 = "two";
                break;
            case 3:
                strDigits21 = "three";
                break;
            case 4:
                strDigits21 = "four";
                break;
            case 5:
                strDigits21 = "five";
                break;
            case 6:
                strDigits21 = "six";
                break;
            case 7:
                strDigits21 = "seven";
                break;
            case 8:
                strDigits21 = "eight";
                break;
            case 9:
                strDigits21 = "nine";
                break;
            case 10:
                strDigits21 = "ten";
                break;
            case 11:
                strDigits21 = "eleven";
                break;
            case 12:
                strDigits21 = "twelve";
                break;
            case 13:
                strDigits21 = "thirteen";
                break;
            case 14:
                strDigits21 = "fourteen";
                break;
            case 15:
                strDigits21 = "fifteen";
                break;
            case 16:
                strDigits21 = "sixteen";
                break;
            case 17:
                strDigits21 = "seventeen";
                break;
            case 18:
                strDigits21 = "eighteen";
                break;
            case 19:
                strDigits21 = "nineteen";
                break;
            case 20:
                strDigits21 = "twenty";
                break;
            case 30:
                strDigits21 = "thirty";
                break;
            case 40:
                strDigits21 = "forty";
                break;
            case 50:
                strDigits21 = "fifty";
                break;
            case 60:
                strDigits21 = "sixty";
                break;
            case 70:
                strDigits21 = "seventy";
                break;
            case 80:
                strDigits21 = "eighty";
                break;
            case 90:
                strDigits21 = "ninety";
                break;
            default:
                strDigits21 = toReadable(digit2 * 10);
                if (digit1) {
                    strDigits21 = strDigits21 + " " + toReadable(digit1);
                }
        }
    }

    result = strDigit3;
    if (strDigits21) {
        result = result + (result ? " " : "") + strDigits21;
    }
    return result;
};

console.log(module.exports(120));
