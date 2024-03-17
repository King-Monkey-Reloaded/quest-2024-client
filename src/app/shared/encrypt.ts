export function encrypt(text: string, key: number): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
  }

  export function decrypt(ciphertext: string, key: number): string {
    let result = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - key + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - key + 26) % 26 + 97);
        } else {
            result += ciphertext.charAt(i);
        }
    }
    return result;
  }