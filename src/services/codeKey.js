import {encode, decode} from 'js-base64';



export const encodeKey = (key) =>  {
    return encode(key);
}

export const decodeKey = (key) =>  {
    return decode(key)
}