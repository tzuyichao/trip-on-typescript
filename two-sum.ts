type TWO_SUM_RESULT = [number, number];

function two_sum(data: number[], target: number): TWO_SUM_RESULT {
    let temp: {[key: number]: number} = {};
    for(let i=0; i<data.length; i++) {
        let left = target - data[i];
        if(temp[left] !== undefined) {
            return [temp[left], i];
        }
        if(temp[data[i]] === undefined) {
            temp[data[i]] = i;
        }
    }
}

let r = two_sum([2, 7, 11, 15], 9);
console.log(r);