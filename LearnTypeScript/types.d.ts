declare module 'qs';

interface StringifyOptions {
    addQueryPrefix?: boolean;
}

interface ParseOptions {
    ignoreQueryPrefix? : boolean;
}

function stringify(object : any , options?: StringifyOptions) : string;
function parse<T = any>(str:string,options?: ParseOptions) : T;

// 이후 App컴포넌트에서 qs. 으로하면 타입스크립트 적용됨