let numberAndString: number & string;

// 型別永遠不可能發生也會推導出never
// Type 'number' is not assignable to type 'never'.ts(2322)
//numberAndString = 123;
