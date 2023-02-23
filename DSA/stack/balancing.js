 function isValid(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        console.log(c);
        switch(c) {
            case '(': stack.push(')');
            // console.log(stack);
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

let s='(){}({[]})'
console.log(isValid(s));
