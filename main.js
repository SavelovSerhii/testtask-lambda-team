function calculateDots(string, length) {
	let newCombinations = [];

  for (let letter = 1; letter <= length; letter++) {
    if (string[letter] !== "." && string[letter - 1] !== ".") {
      newCombinations.push(string.slice(0, letter) + "." + string.slice(letter));
    }
  }

  return newCombinations;
}

function getAllPossibleDots() {
  const string = document.getElementById("message").value;
  let result = [];

  for (let letter = 1; letter < string.length; letter++) {
    result.push(string.slice(0, letter) + "." + string.slice(letter));
  }

  for (let word = 0; word < result.length; word++) {
  	if (result.some(element => element.length === (string.length * 2 - 1))) {
    	break;
    }

    let newCombinations = calculateDots(result[word], string.length);

    if (newCombinations.length) {
    	result.push(...newCombinations);
    }
  }

  result.sort();

  result.push(string);

  console.log(result.filter((word, index) => word !== result[index - 1]));
}

//	abc

//	a.bc
//	ab.c
//	a.b.c

//true



//	abcd

//	a.bcd
//	ab.cd
//	abc.d
//	a.b.cd
//	ab.c.d
//	a.bc.d
//	a.b.c.d

// true



//	a.bcde
//	ab.cde
//	abc.de
//	abcd.e
//	a.b.cde
//	ab.c.de
//	a.bc.de
//	a.bcd.e
//	a.b.c.de
//	a.b.cd.e
//	a.b.c.d.e

//	ab.cd.e
//	abc.d.e
//	ab.c.d.e




//	a.bcde
//	ab.cde
//	abc.de
//	abcd.e
//	a.b.cde
//	a.bc.de
//	a.bcd.e
//	ab.c.de
//	ab.cd.e
//	abc.d.e
//	a.b.c.de
//	a.b.cd.e
//	a.bc.d.e
//	ab.c.d.e
//	a.b.c.d.e

// TRUE