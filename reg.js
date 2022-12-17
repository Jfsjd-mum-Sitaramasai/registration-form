const buttonCalled=document.getElementById("bt1");
buttonCalled.addEventListener('click',submit_info)
function submit_info(){
    
    
const context={
    name:document.getElementById("name1").value,
    aadhar:document.getElementById("user-aadhar").value,
    mobile:document.getElementById("user-mobile").value,
    pannumber:document.getElementById("user-pan").value,
    address:document.getElementById("address").value,
}

    
    
   

const source=document.getElementById("info").innerHTML
const template=Handlebars.compile(source)
const compiledHtml=template(context)
document.getElementById("para").innerHTML=compiledHtml
}
