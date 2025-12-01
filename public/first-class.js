//returning a fx within another fx
const greet = function (salutation) {
  return function (name) {
    return `${salutation} ${name}`;
  };
};

const howdy = greet("How do you do");
const hello = greet(`Hello`);

console.log(howdy("Alf"), howdy("Joy"), hello("Jim"));

//imperative programming

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    numbers[i];
  //console.log(numbers[i]);
}

//declarative programmming
// uses fx

/* --numbers.forEach(function(item){
    console.log(item);
}
) --*/

// lets improve it
const output = item => console.log(item);
numbers.forEach(output);

// let improve it even more
//tenary operations 
const value = true? "this value" : "that value"