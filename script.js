
let localData = localStorage.getItem('keys')
let data = []
let ammount = []
let expense = 0
let income = 0
const list = document.getElementById('list')
if(data == null)
{
console.log('data is not present')
}
else{
    data =  localStorage.getItem('keys').split(',')
    data.map((key)=>{
       let value = localStorage.getItem(key)
       let amt = parseInt(value)
       ammount.push(amt)
       let li = document.createElement('li')
       li.setAttribute('class','plus')
       li.innerHTML = key +"   " +value
       list.appendChild(li)
    })
}
if(ammount.length>0)
{
    ammount.map((value)=>{
        if(value >0)
        {
            income += value
        }
        else{
            expense -=value
        }
    })
}
let sum = income - expense
document.getElementById('balance').innerHTML = '$'+sum
document.querySelector('#money-plus').innerHTML = '+$'+income
document.querySelector('#money-minus').innerHTML = '-$'+expense

console.log(sum)

expense=()=>{

    let key = document.getElementById('text').value;
    let val = document.getElementById('amount').value;
    localStorage.setItem(key,val);

    let keyArr=[]
    if(localStorage.getItem('keys')==null)
    {
     keyArr.push(key)
    }else{
        keyArr = localStorage.getItem('keys').split(',');
        if(keyArr.includes(key))
        {

        }
        else{
        keyArr.push(key)
        }
    }
   localStorage.setItem('keys',keyArr)
   let allKeys = localStorage.getItem('keys').split(',')
   console.log(allKeys)
}
