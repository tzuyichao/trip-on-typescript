interface LabeledValue {
    label: string;
}

function printLabel(labeledValue: LabeledValue) {
    console.log(labeledValue.label);
}

let myObj = { size: 10, label: 'Size 10 object' };

printLabel(myObj);