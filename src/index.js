const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decode="";
    
    for(let i=0;i<expr.length;i+=10){
        
        let temp="";
        for(let j=i;j<i+10;j+=2){
           switch(expr.slice(j,j+2)){
               case "10" : temp+=".";break;
               case "11":temp+="-";break;
               default : break;}}
               if(expr.slice(i,i+10)=="**********") {decode+=" ";
               continue;}
    decode+=MORSE_TABLE[temp];
    }
    return decode;
 
}

module.exports = {
    decode
}