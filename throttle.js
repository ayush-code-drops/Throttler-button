let i = 0;
let btn=document.getElementById('myBtn')
let getData = () => {
    btn.disabled=false
    console.log('button clicked ',i++);
}
let id;
let throttler = (fn,delay) => {
    return () => {
    btn.disabled=true
        setTimeout(() => {
          fn()
      },delay)  
    }
}

let betterFunction=throttler(getData,5000)