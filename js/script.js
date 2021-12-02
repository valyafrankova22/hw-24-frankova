const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

function generateID() {
    const array = [];

    function generateNum() {
        const randomNum = getRandomNum();
        if (array.length === 100) return array;

        if (array.includes(randomNum)) {
            return generateNum();
        }

        array.push(randomNum);

    }

  return generateNum;
}

const idGenerator = generateID();
let foo;

for(let i = 0; i <= 100; i++) {
    foo = idGenerator();
}

foo = foo.sort((a, b) => a - b);
console.log(foo);

