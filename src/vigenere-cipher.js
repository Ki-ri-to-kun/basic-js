const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    #alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    cipherTable = [];

    constructor(direct = true) {
        this.cipher();
        this.direct = direct;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        let resultString = '';
        let i2 = 0;

        for (let i = 0; i < message.length; i++) {
            const messageLetter = message[i];
            if (this.#alphabet.indexOf(messageLetter.toLowerCase()) === -1) {
                resultString += messageLetter;
                continue;
            }
            const keyArray = key.split('');
            let keyLetter = '';
            if (i2 in keyArray) {
                keyLetter = keyArray[i2];
            } else {
                i2 = 0;
                keyLetter = keyArray[i2];
            }
            const rowNumber = this.#alphabet.indexOf(messageLetter.toLowerCase());
            const columnNumber = this.#alphabet.indexOf(keyLetter.toLowerCase());
            resultString += this.cipherTable[rowNumber][columnNumber];
            i2++;
        }
        return this.direct ? resultString.toUpperCase() : resultString.toUpperCase().split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        let originalMessage = '';
        let i2 = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            const encryptedMessageLetter = encryptedMessage[i];
            if (this.#alphabet.indexOf(encryptedMessageLetter.toLowerCase()) === -1) {
                originalMessage += encryptedMessageLetter;
                continue;
            }
            const keyArray = key.split('');
            let keyLetter = '';
            if (i2 in keyArray) {
                keyLetter = keyArray[i2];
            } else {
                i2 = 0;
                keyLetter = keyArray[i2];
            }

            const columnNumber = this.#alphabet.indexOf(keyLetter.toLowerCase());
            for (let rowNum = 0; rowNum < 26; rowNum++) {
                if (this.cipherTable[rowNum][columnNumber] === encryptedMessage[i].toLowerCase()) {
                    originalMessage += this.#alphabet[rowNum];
                    break;
                }
            }
            i2++;
        }
        return this.direct ? originalMessage.toUpperCase() : originalMessage.toUpperCase().split('').reverse().join('');
    }
    cipher() {
        for (let i = 0; i < 26; i++) {
            const alphabetWithOffset = this.#alphabet.slice(i).concat(this.#alphabet.slice(0, i));
            this.cipherTable.push(alphabetWithOffset);
        }
    }
}

module.exports = {
  VigenereCipheringMachine
};
