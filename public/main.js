'use strict';
function onSubmit(form){
    let data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);
    form.hidden=true;
    helloWorld.innerHTML = hello(data.user)+", Вы вошли на этом email "+ result +" "+ plural(result);
    returnBackButton.style.display='block';
};

function onSubmitExit(){
    console.log("+");
    regForm.hidden=false;
    returnBackButton.style.display='none';
    helloWorld.innerHTML="Привет, залогинься!";
}

function hello(text) {
    return 'Hi, '+text;
}

/**
 *@see https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_.237_.283_forms.29
*/
function plural(val){
    if(val%10!=2&&val%10!=3&&val%10!=4||(val==12||val==13||val==14)){
        return "раз";
    } else{
        return "раза";
    }
}

if(typeof  exports==='object'){
    module.exports.hello=hello;
    module.exports.plural=plural;
}
