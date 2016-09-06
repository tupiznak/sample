'use strict';
function onSubmit(form){
    let data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);
    if (result === '0'){
        form.hidden=true;
        helloWorld.innerHTML = hello(data.user);
    }
};

function hello(text) {
    return 'Hi, '+text;

}

if(typeof  exports==='objects'){
    exports.hello=hello;
}
