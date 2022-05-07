
window.onload = () =>{

    function windowForm (){
        let body = document.getElementsByTagName ('body')[0];
        body.classList.add('body');

        let wrapper = document.createElement('wrapper');
        wrapper.classList.add('wrapper');
        body.append(wrapper);
    
        let header = document.createElement('header');
        header.classList.add('header');
        wrapper.append(header);

        let page = document.createElement('page');
        page.classList.add('page');
        wrapper.append(page);

        let footer = document.createElement('footer');
        footer.classList.add('footer');
        wrapper.append(footer);

        let text_window = document.createElement('form');
        text_window.classList.add('text_window');
        page.append(text_window);

        let text_area = document.createElement('textarea');
        text_area.classList.add('text_area');
        text_window.append(text_area);
        text_area.autofocus;
        text_area.value = '';

        let keyboard_area = document.createElement('div');
        keyboard_area.classList.add('keyboard_area');
        page.append(keyboard_area);
        keyboard_area.setAttribute('onselectstart',"return false");

        let headerText = document.createElement('h1');
        headerText.innerHTML = 'Виртуальная клавиатура RSS'
        header.append(headerText);

        let footerText = document.createElement('h3');
        footerText.innerHTML = 'Для переключения языка ввода необходимо нажать клавишу (EN/BY) в правом верхнем углу или последовательную комбинацию клавишь "control" + "space (MacOS)".'
        footer.append(footerText);
        let footerText2 = document.createElement('h5');
        footerText2.innerHTML = '©1991artem'
        footer.append(footerText2);
    }

    windowForm();

        flag = {};
            flag.en_lang = JSON.parse(localStorage.getItem("flag.en_lang"));
            if (flag.en_lang == undefined) {
                flag.en_lang = true;
            }
            flag.up_case = false;
            flag.ctrl = false;
            flag.shift = false;

    
    const KEYBOARD = document.querySelector ('.keyboard_area');
    const TEXTAREA = document.querySelector ('.text_area');
    const NAME_ARRAY = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','lng','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Backslash','Enter','ShiftLeft','IntlBackslash','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight','ControlLeft','AltLeft','MetaLeft','Space','MetaRight','AltRight','ArrowLeft','ArrowDown','ArrowRight'];
    const EN_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','&#5130;','&#8644;','q','w','e','r','t','y','u','i','o','p','[',']',"EN",'&#8682;','a','s','d','f','g','h','j','k','l',';','\'','\\','&#8629;','&#8679;','`','z','x','c','v','b','n','m',',','.','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const EN_UP_WORD_ARRAY = ['±','!','@','#','$','%','^','&','*','(',')','-','=','&#5130;','&#8644;','Q','W','E','R','T','Y','U','I','O','P','[',']',"EN",'&#8682;','A','S','D','F','G','H','J','K','L',';','\'','\\','&#8629;','&#8679;','`','Z','X','C','V','B','N','M ',',','.','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const LG_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','&#5130;','&#8644;','й','ц','у','к','е','н','г','i','ў','з','х','ъ',"BY",'&#8682;','ф','ы','в','а','п','р','о','л','д','ж','э','ё','&#8629;','&#8679;','`','я','ч','с','м','і','т','ь','б','ю','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const LG_UP_WORD_ARRAY = ['>','!','"','№','%',':',',','.',';','(',')','-','=','&#5130;','&#8644;','Й','Ц','У','К','Е','Н','Г','I','Ў','З','Х','Ъ',"BY",'&#8682;','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Ё','&#8629;','&#8679;','`','Я','Ч','С','М','І','Т','Ь','Б','Ю','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];

    keyboard_onload ();
    
    function keyboard_onload (){ 
        let keyArray = [];
        switch (flag.en_lang){
            case false:{
                if (flag.up_case || flag.shift){
                    keyArray = LG_UP_WORD_ARRAY;
                } else{
                    keyArray = LG_LOW_WORD_ARRAY;
                }
                break;
            }
            default :{
                if (flag.up_case || flag.shift){
                    keyArray = EN_UP_WORD_ARRAY;
                } else{
                    keyArray = EN_LOW_WORD_ARRAY;
                }
            }
        }
        for (let i = 0; i < keyArray.length; i++){
            let div = document.createElement('div'); 
            let symbol = document.createElement('p');
            div.classList.add(`word`);
            div.setAttribute('name', NAME_ARRAY[i]);
            div.setAttribute('value', keyArray[i]);
            symbol.classList.add('symbol');   
            KEYBOARD.append(div);
            div.append(symbol);
                    if (keyArray[i].length == 1){
                        symbol.innerHTML = keyArray[i].toUpperCase();
                    } else{
                        symbol.innerHTML = keyArray[i];
                    }
    };
    if (flag.up_case){
        document.querySelector ('[name=CapsLock]').classList.add('long_touch');
    }
    if (flag.shift){
        document.querySelector ('[name=ShiftLeft]').classList.add('long_touch');
        document.querySelector ('[name=ShiftRight]').classList.add('long_touch');
    }
}

    const SHIFT = document.querySelector ('[name=ShiftLeft]');

    function physical_keyboard (){
        
        TEXTAREA.addEventListener('keydown', (e) => {
            try{
            if (!e.repeat){
                if (e.code == 'Tab') {
                    e.preventDefault();
                } else{
                    document.querySelectorAll(`[name=${e.code}]`)[0].classList.add('touch');
                }
            }
            } catch (error){
            console.log (`Press key ${e.code} + ${error}`);
        }
          });
          TEXTAREA.addEventListener('keyup', (e) => {
            try{
                document.querySelectorAll(`[name=${e.code}]`)[0].classList.remove('touch');
            } catch (error){
                console.log (`Press key ${e.code} + ${error}`);
            }
            });
    }



    function text_write (){
        KEYBOARD.addEventListener('mousedown', (e) => {
            e.target.classList.add('touch');
                switch (e.target.attributes.name.nodeValue){
                    case  'Space' : {
                        if (flag.ctrl){
                            if (flag.en_lang == true){
                                flag.en_lang = false;
                                KEYBOARD.innerHTML = "";
                                keyboard_onload ();
                                flag.up_case = true;
                                flag.ctrl = false;
                            } else {
                                flag.en_lang = true;
                                KEYBOARD.innerHTML = "";
                                keyboard_onload ();
                                flag.up_case = true;
                                flag.ctrl = false;
                            }
                            localStorage.setItem("flag.en_lang",flag.en_lang);
                        } else {
                            TEXTAREA.value += " ";
                        }
                        break;
                    }
                    case  'Enter' : {
                        TEXTAREA.value += "\n";
                        break;
                    }
                    case  'Tab' : {
                        TEXTAREA.value += '    ';
                        break;
                    }
                    case  'ArrowUp' : {
                        TEXTAREA.value += '↑';
                        break;
                    }
                    case  'ArrowLeft' : {
                        TEXTAREA.value += '←';
                        break;
                    }
                    case  'ArrowDown' : {
                        TEXTAREA.value += '↓';
                        break;
                    }
                    case  'ArrowRight' : {
                        TEXTAREA.value += '→';
                        break;
                    }
                    case  'ShiftLeft':
                    case  'ShiftRight':{
                        e.target.classList.toggle('long_touch');
                        if (flag.shift){
                            flag.shift = false;
                        } else{
                            flag.shift = true;
                        }
                        change_reg ();
                        break;
                    }
                    case  'CapsLock': {                                       
                        if (flag.up_case){
                            flag.up_case = false;
                        } else{
                            flag.up_case = true;
                        }
                        change_reg ();
                        break;
                    }
                    case  'ControlLeft': {
                        e.target.classList.toggle('long_touch');
                        if (flag.ctrl){
                            flag.ctrl = false;
                        } else{
                            flag.ctrl = true;
                        }
                        
                        break;
                    }
                    case  'AltLeft':
                    case  'AltRight': {

                        break;
                    }
                    case  'MetaRight':
                    case  'MetaLeft': {

                        break;
                    }
                    case  'lng': {
                        if(flag.en_lang){
                            flag.en_lang = false;
                        } else{
                            flag.en_lang = true;
                        }
                        KEYBOARD.innerHTML = "";
                        keyboard_onload ();
                        up_case = true;
                        flag.ctrl = false;
                        localStorage.setItem("flag.en_lang",flag.en_lang);
                        break;
                    }
                    case  'Backspace' : {                                                                    
                        TEXTAREA.value =TEXTAREA.value.split('',TEXTAREA.value.length-1).join('');
                        break;
                    }
                    default : {
                        if (e.shiftKey || flag.up_case || flag.shift){
                            TEXTAREA.value += e.target.attributes.value.nodeValue.toUpperCase();
                            if (flag.shift){
                                flag.shift = false;
                                change_reg ();
                            }
                        } else{
                            TEXTAREA.value += e.target.attributes.value.nodeValue;
                        }
                        
                    break;
                    };
                    }
        });

          KEYBOARD.addEventListener('mouseup', (e) => {
            e.target.classList.remove('touch');
          });
    }
    function change_reg (){
        KEYBOARD.innerHTML = "";
        keyboard_onload ();
        flag.ctrl = false;
    }

    
    physical_keyboard();
    text_write();
    
}
