let string='hi i am jish nus  ss'

function length(string){
    let len=0
    let started=false
    for(i=string.length-1;i>=0;i--)
    {
        if(string[i]!==' '){
            started=true
        }
        if(started){
            if(string[i]===' ') break;
            len++
        }
    }
    return len;
}
console.log(length(string));

