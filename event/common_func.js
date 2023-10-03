// Credit: george/kingbore
//input Float, return Hex'd Decimal. 
//for use with event parameters, which require float hex'd decimals for certain commands because that's how darkscript 3 interprets them.
//code derived from Nina Scholz on stackoverflow.
export function float2dec(float_i){
    
    var view
    var result
    var getHex

    getHex = i => ('00' + i.toString(16)).slice(-2);

    view = new DataView(new ArrayBuffer(4)),
        result;

    view.setFloat32(0, float_i);

    result = Array
        .apply(null, { length: 4 })
        .map((_, i) => getHex(view.getUint8(i)))
        .join('');

    return parseInt(result,16)
};