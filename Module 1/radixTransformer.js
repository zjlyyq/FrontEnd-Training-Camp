const transInt2 = Symbol('transInterger');
const transDec2 = Symbol('transDec');

class radixTransformer {
    [transInt2](num) {
        let binarys = [];
        while(num) {
            binarys.push(num%2);
            num = num >> 1;
        }
        return binarys.reverse();
    }       
    
    [transDec2](num) {
        let binarys = [];
        let _count = 52;
        while(_count --) {
            num *= 2;
            binarys.push(num > 1 ? '1' : '0');
            num = parseFloat('0.' + ('' + num).split('.')[1]);
        }
        return binarys;
    }

    // 十进制浮点转二进制
    decimal2binary(num) {
        let [_int, _dec] = ('' + num).split('.');
        _int = parseInt(_int);
        _dec = parseFloat('0.'+_dec);
        return this[transInt2](_int).join('') + '.' + this[transDec2](_dec).join('');
    }

    decimal2base64(num) {

    }
}

module.exports = radixTransformer;