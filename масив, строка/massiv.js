  let massiv = [];
//Рекомендують Math.floor (Math.random () * (max - min + 1)) замість Math.round (Math.random () * (max - min)) для отримання цілих випадкових чисел.Через що виходить нерівномірний розподіл в другому випадку
        function random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)); 
        }

// Функція задає і-ту кількість значення в діапазоні від 1 до 20 в масиві А
        function randomMassiv (A) {
            var i = 10;
            for(let j = 0; j < i; j++) {
                var value = random(1, 500);
                A.push(value);
                console.log(value);
            }
        }
        randomMassiv(massiv);
        