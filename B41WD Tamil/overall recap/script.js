var textarea=document.getElementById('textarea')

var uppcase = document.getElementById('uppcase')
uppcase.addEventListener('click',()=>{
    // textarea.innerHTML=""
    console.log(textarea.value)
    let upper = textarea.value.toUpperCase()
    console.log(upper)
    textarea.value=upper
})

var lowcase = document.getElementById('lowcase')
lowcase.addEventListener('click',()=>{
    // textarea.innerHTML=""
    console.log(textarea.value)
    let lower = textarea.value.toLowerCase()
    console.log(lower)
    textarea.value=lower
})

var clear = document.getElementById('clear')
clear.addEventListener('click',()=>{
    textarea.value=""
})

var copy = document.getElementById('copy')
copy.addEventListener('click',()=>{
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
})

var removespace = document.getElementById('removespace')
removespace.addEventListener('click',()=>{
    let textvalue = textarea.value.replace(/ /g,"")
    textarea.value=textvalue
})

