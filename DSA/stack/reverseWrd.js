// function reverseWords(str) {
//     let st = [];
 
//     // Traverse given string and push all characters
//     // to stack until we see a space.
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != ' ')
//             st.unshift(str[i]);
 
//         // When we see a space, we print contents
//         // of stack.
//         else {
//             while (st.length != 0) {
//                 console.log(st[0]);
//                st.shift();
//             }
//         }
//     }
 
//     // Since there may not be space after
//     // last word.
//     while (st.length != 0) {
//         console.log(st[0]);
//         st.shift();
//     }
// }
 
// // Driver program to test function
// let str = "bad boy";
// reverseWords(str);





// function reverseWords(str){
//     let stack=[]
//     for(i=0;i<str.length;i++){
//         if(str[i]!=' '){
//         stack.unshift(str[i])
//         }else{
//             while(stack.length>0){
//                 console.log(stack[0]);
//                 stack.shift()
//             }
//         }
//     }
//     while(stack.length>0){
//         console.log(stack[0]);
//         stack.shift()
//     }
// }

// let str='hey jishnu hello'
// reverseWords(str)



function reverseWrd(str){
    let stack=[]

    for(i=0;i<str.length;i++){
        if(str[i]!=' '){
            stack.unshift(str[i])
        }else{
            while(stack.length>0){
                console.log(stack[0]);
                stack.shift()
            }
        }
    }
    while(stack.length>0){
        console.log(stack[0]);
        stack.shift()
    }
}

let str='ho ah hey hoo'
reverseWrd(str)
