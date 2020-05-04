'use strict';

class hashGenerator {
    constructor (hashLength){
        // посмотреть таблицу символов Юникода 
        this.startSymbolCode = 48;
        this.finishSymbolCode = 126;
        
        // parseInt приводит строку в число, isNaN в значении true означает не число!!!
        if( ! isNaN(parseInt(hashLength))) {
            
            this.hashLength = parseInt(hashLength);
            this.generateHash();
        }
        else {
            this.hash = false;
        }
    }

     randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }

      generateHash(){
          this.hash = '';
          for (let i=0; i<this.hashLength; i++){
              this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishSymbolCode));
          }

      }
}

let myHash = new hashGenerator(14);
console.log(myHash.hash);