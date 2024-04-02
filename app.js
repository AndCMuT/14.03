let inc_btn = document.getElementById('increment')
let dec_btn = document.getElementById('decrement')
let input = document.querySelector("input[type='number']")

function increment() {
    input.value++
}
function decrement() {
    input.value--
}

function checkForIncrement(){
    if (Number(input.value) >= Number(input.max)){ 
        inc_btn.setAttribute('disabled', '')
    }
    else {
        inc_btn.removeAttribute('disabled', '')
    }
}
function checkForDecrement(){
    if (Number(input.value) <= Number(input.min)){ 
        dec_btn.setAttribute('disabled', '')
    }
    else {
        dec_btn.removeAttribute('disabled', '')
    }
}


inc_btn.addEventListener("click", increment)
inc_btn.addEventListener('click', checkForIncrement)
inc_btn.addEventListener('click', checkForDecrement)
dec_btn.addEventListener("click", decrement)
dec_btn.addEventListener('click', checkForIncrement)
dec_btn.addEventListener('click', checkForDecrement)

input.addEventListener('blur', function(){
    if (Number(input.value) >= Number(input.max)){
        input.value = input.max
    }
    else {
        if(Number(input.value) <= Number(input.min)){
            input.value = input.min
        }
    }
})

input.addEventListener('blur', checkForDecrement)
input.addEventListener('blur', checkForIncrement)


function removeEvent(){
    input.addEventListener('blur', checkForIncrement)
}