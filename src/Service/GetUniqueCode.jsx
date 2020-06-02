import {isCodeNew} from './FirebaseModule';
export const GetUniqueCode = () => {
    const v = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "E", "F", "H", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Z"];
    const l = v.length;
    for (var i=0; i<200; i++) {
        var a = Math.floor(Math.random() * l);
        var b = Math.floor(Math.random() * l);
        var c = Math.floor(Math.random() * l);

        var code = v[a] + v[b] + v[c];
        if (isCodeNew(code)) return code;
    }
};
