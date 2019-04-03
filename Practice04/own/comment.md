
## 完成度60%
## About coding
1. 功能感覺都有試著做到，但是在用filter的時候會crash，`this.state.mode`應該沒有辦法直接assign

```javascript
  82 | handleActive = () => {
  83 | 	this.btnClear("active");
  84 | 	this.state.mode = 1;
> 85 | 	this.setState(this.state.mode);
     | ^  86 | };
  87 | handleCompleted = () => {
  88 | 	this.btnClear("completed");
  ```
  改成`this.setState({ mode: 1 }); `
  也許可能可以work

2. 你的completed感覺記住的是array的位置，不是物件本身，因為如果刪掉某個完成的物件的時候下一個物件會變成complete，left的地方也會算錯，有時候會變成-1，應該在complete還有刪掉的地方有點問題，刪掉的時候應該要檢查是不是已經complete才不會重複扣。建議多亂用得自己的todo list才容易找到沒發現的bug，
3. 160行有一點多，感覺下面的那排按鈕也可以整理一下