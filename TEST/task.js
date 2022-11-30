



const  countdown = (value) => {
    console.log(value);
    const newValue = value - 1;  
    if(newValue > 0) {
         countdown(newValue);
    }
}
function calculator(a,b, callback1, callback2) {
    let result = a + b;
    result = callback2(countdown);
    callback1(result);
    countdown(10);
}
calculator(1,2, countdown);
