'use strict';
function onSubmit(form){
    let data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);
    //form.hidden=true;
    helloWorld.innerHTML = hello(data.user)+", your email loggined "+ result + " times";
};

function hello(text) {
    return 'Hi, '+text;

}

if(typeof  exports==='objects'){
    exports.hello=hello;
}
