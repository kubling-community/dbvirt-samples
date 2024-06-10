export function isNull(obj) {
    return (obj === null);
}

export function isUndefinedOrNull(obj) {
    return ((obj === null) || (obj === undefined));
}

export function isNotUndefinedOrNull(obj) {
    return !isUndefinedOrNull(obj);
}

export function callFunc(f) {
    if (isNotUndefinedOrNull(f)) f();
}

export function callFuncP(f, p) {
    if (isNotUndefinedOrNull(f)) f(p);
}
export function returnFuncP(f, p) {
    if (isNotUndefinedOrNull(f))
        return f(p);
    else
        return null;
}

export function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}

export function isArrayEmpty(value) {
    if (!isNull(value) && isArray(value))
        return (value.length === 0);
    return true;
}

export function isMapEmpty(value) {
    if (!isNull(value) && isMap(value))
        return (value.size === 0);
    return true;
}

export function cloneArray(a) {
    return [...a];
}

export function getFieldValue(fieldValuesJsonObj, fieldName) {
    var filtered = fieldValuesJsonObj.filter(function(f) {
        return f.fieldName === fieldName;
    });
    if (filtered.length === 0) return null;
    return filtered[0].value;
}

export function toUTF8Array(str) {
    let utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

export function incrementBasedOnAPIResponseOrFail(response) {
    if (response.statusCode !== 200 && response.statusCode !== 201 && response.statusCode !== 204)
        throw new Error(`Error calling service API: ${response.content}`);
    affectedRows.increment();
}

export function extractFilterField(filter, fieldName) {
    if (filter.field === fieldName)
        return filter.value.toString();
    else
        return null;
}

export function removeEnclosingDoubleQuote(text) {
    return text.replace(/^"(.*)"$/, '$1');
}