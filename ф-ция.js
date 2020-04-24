let arg = [1,2,3,4,5,6,7,8,9,10];
//        function declaration
        function amount(x, y, z=10) { return x + y * z; }; //фу-ция x+y*10
//        function expression
        let arrayFunc = function(x) {
            
                for (i=0; i <= arg.length; i++) { //перебираем массив
                    if (x == arg[i]) { //проверяем есть ли значение в массиве
                        console.log(`Значение ${x} входит в данный массив`);
                    } else {
                        console.log(arg[i]);
                        
                    }
                }

                

                
             };
//        вывод информации в консоль
        console.log(amount(10, 5)); 
        arrayFunc(7);