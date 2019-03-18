// Function to be used in the reduce function //

const getSum = (sum, mark) => {
    let newNumber = Number(mark.mark);
    sum += newNumber;
    return sum;
}

// Combines the reduce function with getSum to find our results // 

const getAverage = (array) => {
    return Math.round(array.reduce(getSum,0)/array.length);
}

// given array // 

var marks = [
    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },
    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
]

// testing //

var finalResult = getAverage(marks);
console.log(finalResult);