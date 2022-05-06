
    class Key {
        constructor (value, lowKeyEn, upKeyEn, lowKeyLg, upKeyLg){
            this.value = value;
            this.lowKeyEn = lowKeyEn;
            this.upKeyEn = upKeyEn;
            this.lowKeyLg = lowKeyLg;
            this.upKeyLg = upKeyLg;
        }
    }


    function windowForm (){
        let body = document.getElementsByTagName ('body')[0];
        body.classList.add('body');
    
        let wrapper = document.createElement('wrapper');
        let header = document.createElement('header');
        let page = document.createElement('page');
        let footer = document.createElement('footer');
        let text_window = document.createElement('form');
        let text_area = document.createElement('textarea');
        let keyboard_area = document.createElement('div');
    
        wrapper.classList.add('wrapper');
        header.classList.add('header');
        footer.classList.add('footer');
        page.classList.add('page');
        text_window.classList.add('text_window');
        text_area.classList.add('text_area');
        keyboard_area.classList.add('keyboard_area');
        keyboard_area.setAttribute('onselectstart',"return false");
    
        body.append(wrapper);
        wrapper.append(header);
        wrapper.append(page);
        wrapper.append(footer);
        page.append(text_window);
        page.append(keyboard_area);
        text_window.append(text_area);
        text_area.autofocus;
        text_area.value = '';
    }

    windowForm();

        flag = {};
            flag.en_lang = JSON.parse(localStorage.getItem("flag.en_lang"));
            if (flag.en_lang == undefined) {
                flag.en_lang = true;
            }
            flag.lower_case = true;
            flag.ctrl = false;

    
    const KEYBOARD = document.querySelector ('.keyboard_area');
    const EN_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','&#5130;','&#8644;','q','w','e','r','t','y','u','i','o','p','[',']',"EN",'&#8682;','a','s','d','f','g','h','j','k','l',';','\'','\\','&#8629;','&#8679;','`','z','x','c','v','b','n','m',',','.','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const EN_UP_WORD_ARRAY = ['±','!','@','#','$','%','^','&','*','(',')','-','=','&#5130;','&#8644;','Q','W','E','R','T','Y','U','I','O','P','[',']',"EN",'&#8682;','A','S','D','F','G','H','J','K','L',';','\'','\\','&#8629;','&#8679;','`','Z','X','C','V','B','N','M ',',','.','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const LG_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','&#5130;','&#8644;','й','ц','у','к','е','н','г','i','щ','з','х','ъ',"BY",'&#8682;','ф','ы','в','а','п','р','о','л','д','ж','э','\\','&#8629;','&#8679;','`','я','ч','с','м','и','т','ь',',','.','/','&#8593;','&#8679;','control','option','command','MacOS','command','option','&#8592;','&#8595;','&#8594;'];
    const LG_UP_WORD_ARRAY = ['>','!','"','№','%',':',',','.',';','(',')','-','=','&#5130;','&#8644;','Й','Ц','У','К','Е','Н','Г','I','Щ','З','Х','Ъ',"BY",'&#8682;','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','\\','&#8629;','&#8679;','`','Я','Ч','С','М','И','Т','Ь','Б','Ю','/','&#8593;','&#8679;','control','Alt','Meta','MacOS','Meta','Alt','&#8592;','&#8595;','&#8594;'];
    const NAME_ARRAY = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','lng','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Backslash','Enter','ShiftLeft','IntlBackslash','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight','ControlLeft','AltLeft','MetaLeft','Space','MetaRight','AltRight','ArrowLeft','ArrowDown','ArrowRight'];

    keyboard_onload ();

    const KEY_LANG = document.querySelector ('.lng');
    const TEXTAREA = document.querySelector ('.text_area');
    const SHIFT_LEFT = document.querySelector ('[name=ShiftLeft]');
    const SHIFT_RIGHT = document.querySelector ('[name=ShiftRight]');
    const CAPS_LOCK = document.querySelector ('[name=CapsLock]');
    const META_RIGHT = document.querySelector ('[name=MetaRight]');
    const META_LEFT = document.querySelector ('[name=MetaLeft]');
    const ALT_RIGHT = document.querySelector ('[name=AltRight]');
    const ALT_LEFT = document.querySelector ('[name=AltLeft]');
    
    function keyboard_onload (){ 
        let keyArray = [];
        switch (flag.en_lang){
            case false:{
                if (flag.lower_case){
                    keyArray = LG_LOW_WORD_ARRAY;
                } else{
                    keyArray = LG_UP_WORD_ARRAY;
                }
                break;
            }
            default :{
                if (flag.lower_case){
                    keyArray = EN_LOW_WORD_ARRAY;
                } else{
                    keyArray = EN_UP_WORD_ARRAY;
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
}

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
                                flag.lower_case = true;
                                flag.ctrl = false;
                            } else {
                                flag.en_lang = true;
                                KEYBOARD.innerHTML = "";
                                keyboard_onload ();
                                flag.lower_case = true;
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
                    case  'ShiftLeft':
                    case  'ShiftRight':
                    case  'CapsLock': {                                       
                        if (flag.lower_case){
                            flag.lower_case = false;
                        } else{
                            flag.lower_case = true;
                        }
                        KEYBOARD.innerHTML = "";
                        keyboard_onload ();
                        flag.ctrl = false;
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
                    case  'lng': {
                        if(flag.en_lang){
                            flag.en_lang = false;
                        } else{
                            flag.en_lang = true;
                        }
                        KEYBOARD.innerHTML = "";
                        keyboard_onload ();
                        lower_case = true;
                        flag.ctrl = false;
                        localStorage.setItem("flag.en_lang",flag.en_lang);
                        break;
                    }
                    case  'Backspace' : {                                                                    
                        TEXTAREA.value =TEXTAREA.value.split('',TEXTAREA.value.length-1).join('');
                        break;
                    }
                    default : {
                        if (e.shiftKey || flag.lower_case == false){
                            TEXTAREA.value += e.target.attributes.value.nodeValue.toUpperCase();
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

    
    physical_keyboard();
    text_write();
    

