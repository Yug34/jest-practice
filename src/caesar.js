const caesar = (s, k) => {
    if(!k && k !== 0) {
        return null;
    }

    if(typeof s === "string") {
        if (k%26 === 0) {
            return s;
        } else {
            k = k%26;
            k = k<0?k+26:k;

            let cipher = "";
            for(let i=0; i < s.length; i++) {
                let charCode = s.charCodeAt(i);
                if(65 <= charCode && charCode <= 90) {
                    charCode = charCode+k>90?charCode+k-26:charCode+k;
                }
                else if(97 <= charCode && charCode <= 122) {
                    charCode = charCode+k>122?charCode+k-26:charCode+k;
                }

                cipher = cipher.concat(String.fromCharCode(charCode));
            }

            return cipher;
        }
    } else {
        return null;
    }
}

module.exports = caesar;