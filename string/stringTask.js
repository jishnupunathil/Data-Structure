

function replace(){
    let str='jishnu'
    let str2=''
    for(i=0;i<str.length;i++){
        if(str[i]=='j'){
            str2+='k'
        }
        else{
            str2+=str[i]
        }
    }
    console.log(str2);
}

replace()