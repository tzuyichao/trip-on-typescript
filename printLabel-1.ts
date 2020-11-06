function printLabel(labeledObj: {label: string}) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
// interface只檢查滿足interface有定義的，多的properties沒關係
// 一般的type多的properties是不行的
printLabel(myObj);