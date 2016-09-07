'use strict';
function onSubmit(form){
    let data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);
    form.hidden=true;
    helloWorld.innerHTML = hello(data.user)+", Вы вошли на этом email "+ result +" "+ myplural(result);
    returnBackButton.style.display='block';
};

function onSubmitExit(){
    regForm.hidden=false;
    returnBackButton.style.display='none';
    helloWorld.innerHTML="Привет, залогинься!";
}

function hello(text) {
    return 'Hi, '+text;
}

function plural(val){
    switch (val){
        case 0:{
            return 'Здравствуй, дух';
            brake;
        }
        case 1:{
            return 'Рады приветствовать на нашем курсе!';
            brake;
        }
        case 2:{
            return 'Кликай дальше!! Еще осталось 13 раз(а)';
            brake;
        }
        case 13:{
            return 'Кликай дальше!! Еще осталось 2 раз(а)';
            brake;
        }
        case 15:{
            return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
            brake;
        }
        case 100:{
            return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
            brake;
        }
    }
}

/**
 *@see https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_.237_.283_forms.29
*/
function myplural(val){
    if(val%10!=2&&val%10!=3&&val%10!=4||(val==12||val==13||val==14)){
        return "раз";
    } else{
        return "раза";
    }
}
///////////////

if(typeof  exports==='object'){
    module.exports.hello=hello;
    module.exports.plural=plural;
    module.exports.myplural=myplural;
}
