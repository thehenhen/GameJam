class GlitchChars {
    constructor() {
        this[0] = [" ", "O", "Ω", "@", "Ø", "Q", "ɸ", "Θ", "θ"];
        this[1] = [" ", "l", "I", "i", "j", "¡", "∤", "⌠"];
        this[2] = [" ", "Z", "շ", "Ձ", "↊"];
        this[3] = [" ", "E", "ӡ", "£", "Ʃ", "Ց", "Ξ", "€"];
        this[4] = [" ", "A", "Ⴏ", "կ", "ϥ", "Կ", "Վ", "♃"];
        this[5] = [" ", "$", "S", "§", "ϛ", "Ѕ", "Ṥ", "Ṣ", "Ƽ", "Ƨ", "Ş"];
        this[6] = [" ", "b", "G", "Ϭ", "Б", "Ъ", "∂", "₲"];
        this[7] = [" ", "T", "֏", "Դ", "Γ"];
        this[8] = [" ", "ß", "ẞ", "B", "&", "฿", "∞", "&"];
        this[9] = [" ", "ϥ", "¶"];
        this["A"] = ["∆", "4", "ʎ", "λ", "Ӓ", "₳", "Ӑ", "Ӕ", "Ᾱ"];
        this["B"] = this[8];
        this["C"] = ["₵", "(", "ʗ", "Ƈ", "Ɔ", "₡", "Ç"];
        this["D"] = ["Ɗ", "Ḋ", "Đ", "Ƿ", "Д"];
        this["E"] = this[3];
        this["F"] = ["Ƒ", "ʎ", "Ғ", "Ϝ", "₣", "ƒ"];
        this["G"] = this[6];
        this["H"] = ["Ḫ", "Ḩ", "Ḣ", "ῌ", "Ή"];
        this["I"] = this[1];
        this["M"] = ["M", "Ṁ", "Ṃ", "Ḿ", "Ṁ", "Ṃ"];
        this["N"] = ["N", "Ṅ", "₦", "Π", "Ѝ", "И", "Ṉ"];
        this["O"] = this[0];
        this["P"] = ["P", "Ῥ", "℗", "Ƿ", "ρ", "þ"];
        this["P"] = ["Q", "Ϙ", "Ω"];
        this["R"] = ["R", "®", "Ŕ", "Ř", "Ʀ", "Ṟ", "я", "Я"];
        this["S"] = this[5];
        this["T"] = ["Ⱦ", "Ϯ", "τ", "↑", "₸", "Ҭ", "Ţ", "Ƭ", "†", "Ŧ", "Ť"];
        this["'"] = ["`", "’", "˟", "˺", "͆"];
    }
    get(char, frame, chance, period) {
        if (this[char] == undefined) return char;
        let r = new Math.seedrandom(floor(frame / period));
        let t = r();
        return (t*chance < 1 ? this[char][floor(r()*this[char].length) % this[char].length] : char);
    }
    glitch(chars, f, chance=30, period=7) {
        let s = "";
        for (let char in chars) {
            s += this.get(chars[char], f + period**char, chance, period);
        }
        return s;
    }
}

/*

ΩØɸΘ
¡∤⌠
շՁ२↊टટ
ӡ£ƩՑਤᙒΞ€
૫ႯկਪϥԿՎ♃
§ϛફಽ
ϬБᑾᖚᏀ♭
֏Դ
ẞ&୫฿
ရप੧વ୭୨୬
123456789

ΩØɸΘ ¡∤ շՁ२↊टટ ӡ£ƩՑਤᙒΞ€ ૫ႯկਪϥԿՎ §ϛફಽ БᑾᖚᏀ♭ ẞ&୫฿ प੧વ୭୨୬
ΩØɸΘ ¡∤ ↊ટ ӡ£ƩΞ€ ૫ϥԿՎ § БᏀ♭ &୫฿
ΩØɸΘ ¡∤ ↊ટ ӡ£ƩΞ€ ϥԿՎ § БᏀ♭ &୫฿
ΩØɸΘ ¡∤ ӡ£Ʃ€ § G♭ &

*/