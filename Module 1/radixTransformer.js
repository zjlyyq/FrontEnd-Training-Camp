// 64进制码表
let bits64 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',  
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z', '@', '?'
]

class radixTransformer {
    transInt2(num) {
        let binarys = [];
        while(num) {
            binarys.push(num%2);
            num = num >> 1;
        }
        return binarys.reverse();
    }       
    
    transDec2(num) {
        let binarys = [];
        let _count = 52;
        while(_count --) {
            num *= 2;
            binarys.push(num > 1 ? '1' : '0');
            num = parseFloat('0.' + ('' + num).split('.')[1]);
        }
        return binarys;
    }

    transInt64(num) {
        let binarys = [];
        while(num) {
            binarys.push(bits64[num%64]);
            num = num >> 6;
        }
        return binarys.reverse();
    } 
    
    transDec64(num) {
        let binarys = [];
        let _count = 10;
        while(_count --) {
            num *= 64;
            binarys.push(num > 1 ? bits64[parseInt(num)] : '0');
            num = parseFloat('0.' + ('' + num).split('.')[1]);
        }
        return binarys;
    }   

    // 十进制浮点转二进制
    decimal2binary(num) {
        let [_int, _dec] = ('' + num).split('.');
        _int = parseInt(_int);
        _dec = parseFloat('0.'+_dec);
        return this.transInt2(_int).join('') + '.' + this.transDec2(_dec).join('');
    }

    // 十进制浮点转64进制
    encode64(num) {
        let [_int, _dec] = ('' + num).split('.');
        _int = parseInt(_int);
        _dec = parseFloat('0.'+_dec);
        return this.transInt64(_int).join('')  + '.' + this.transDec64(_dec).join('');
    }
}

module.exports = radixTransformer;