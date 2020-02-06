   let s = "uhuuuuuuu";
   let symb = `N`;

        function counterSymbol(str) {
            let counter = 0;
            for (let i = 0; i <= str.length; i++) {
                if (str[i] == symb) counter++; 
            }
            console.log(`Кількість збігів: ${counter}`);
        }
        
    
    counterSymbol(s);