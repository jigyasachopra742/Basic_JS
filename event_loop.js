console.log("start");
setTimeout(function cb(){
    console.log("callback func is called");
}, 5000)

console.log("end");
//this is how event loop works. First, a call stack is made in which a GEC is made of the whole 
//code them the first line is pushed in stack that is "start" then it is pushed into the console
//window then after that GEC encounters setTimeout() which has a cb func is pushed in 
//the task queue or callback queue after that it's time starts after that last statement that
//is "end" is pushed in the call stack which is then in pushed in console window and then 
//after the 5 seconds have finished cb func from task queue is taken out by event loop, 
//then the event loop pushes the cb func into the call stack for further execution and then
//the code inside the func is executed which then consoles and prints on window

//if along with setTimeout() or setInterval(), there are promises then promises are given priority
//by pushing them in the priority queue or microtask queue which are taken out of event loop which is then pushed into 
//the call stack and then the data is fetched from the api. After fetching of data, setTimeout()
//or setInterval() are executed