
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
        text_area.classList.add('text_area')
        keyboard_area.classList.add('keyboard_area');
    
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

    let en_lang = true;
    let lower_case = true;
    let ctrl = false;
    const KEYBOARD = document.querySelector ('.keyboard_area');
    const EN_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','q','w','e','r','t','y','u','i','o','p','[',']',"EN",'CapsLock','a','s','d','f','g','h','j','k','l',';','\'','\\','Enter','Shift','`','z','x','c','v','b','n','m',',','.','/','ArrowUp','Shift','Control','Alt','Meta','Space','Meta','Alt','ArrowLeft','ArrowDown','ArrowRight'];
    const EN_UP_WORD_ARRAY = ['±','!','@','#','$','%','^','&','*','(',')','-','=','Backspace','Tab','Q','W','E','R','T','Y','U','I','O','P','[',']',"EN",'CapsLock','A','S','D','F','G','H','J','K','L',';','\'','\\','Enter','Shift','`','Z','X','C','V','B','N','M ',',','.','/','ArrowUp','Shift','Control','Alt','Meta','Space','Meta','Alt','ArrowLeft','ArrowDown','ArrowRight'];
    const LG_LOW_WORD_ARRAY = ['§','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','й','ц','у','к','е','н','г','ш','щ','з','[',']',"BY",'CapsLock','ф','ы','в','а','п','р','о','л','д',';','\'','\\','Enter','Shift','`','я','ч','с','м','и','т','ь',',','.','/','ArrowUp','Shift','Control','Alt','Meta','Space','Meta','Alt','ArrowLeft','ArrowDown','ArrowRight'];
    const NAME_ARRAY = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','lng','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Backslash','Enter','ShiftLeft','IntlBackslash','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight','ControlLeft','AltLeft','MetaLeft','Space','MetaRight','AltRight','ArrowLeft','ArrowDown','ArrowRight'];

    keyboard_onload ();

    const KEY_LANG = document.querySelector ('.lng');
    const TEXTAREA = document.querySelector ('.text_area');
    const SHIFT_LEFT = document.querySelector ('.ShiftLeft');
    const SHIFT_RIGHT = document.querySelector ('.ShiftRight');
    const META_RIGHT = document.querySelector ('.MetaRight');
    const META_LEFT = document.querySelector ('.MetaLeft');
    const ALT_RIGHT = document.querySelector ('.AltRight');
    const ALT_LEFT = document.querySelector ('.AltLeft');
    
    function keyboard_onload (){ 
        let keyArray = [];
        switch (en_lang){
            case false:{
                keyArray = LG_LOW_WORD_ARRAY;
                break;
            }
            default :{
                keyArray = EN_LOW_WORD_ARRAY;
            }
        }
        for (let i = 0; i < keyArray.length; i++){
            let div = document.createElement('div'); 
            let symbol = document.createElement('p');
            div.classList.add(`word`);
            div.classList.add(`${NAME_ARRAY[i]}`);
            symbol.classList.add('symbol'); 
            div.setAttribute('value_low_en', keyArray[i]);
            KEYBOARD.append(div);
            div.append(symbol);
            switch (keyArray[i]){
                case 'Backspace' :{
                    symbol.innerHTML = "&#5130;";
                    break;
                }
                case 'Enter' :{
                    symbol.innerHTML ="&#8629;";
                    break;
                }
                case 'Shift' :{
                    symbol.innerHTML = keyArray[i];
                    div.setAttribute('lower_case', true);
                    break;
                }
                case 'Tab' :{
                    symbol.innerHTML = "&#8644;";
                    break;
                }
                case 'CapsLock' :{
                    symbol.innerHTML = "&#8682;";
                    break;
                }
                case 'ArrowUp' :{
                    symbol.innerHTML = "&#8593;";
                    break;
                }
                case 'ArrowLeft' :{
                    symbol.innerHTML = "&#8592;";
                    break;
                }
                case 'ArrowDown' :{
                    symbol.innerHTML = "&#8595;";
                    break;
                }
                case 'ArrowRight' :{
                    symbol.innerHTML = "&#8594;";
                    break;
                }
                default :{
                    if (keyArray[i].length == 1){
                        symbol.innerHTML = keyArray[i].toUpperCase();
                    } else{
                        symbol.innerHTML = keyArray[i];
                    }
                    
                }
            } 
    };
}

    function physical_keyboard (){
        
        TEXTAREA.addEventListener('keydown', (e) => {
            try{
            if (!e.repeat){
                document.querySelectorAll(`.${e.code}`)[0].classList.add('touch');
            }
            } catch (error){
            console.log (`Press key ${e.code} + ${error}`);
        }
          });
          TEXTAREA.addEventListener('keyup', (e) => {
            try{
                document.querySelectorAll(`.${e.code}`)[0].classList.remove('touch');
            } catch (error){
                console.log (`Press key ${e.code} + ${error}`);
            }
            });
    }



    function text_write (){
        KEYBOARD.addEventListener('mousedown', (e) => {
            e.target.classList.add('touch');
                switch (e.target.attributes.value_low_en.nodeValue){
                    case  'Space' : {
                        TEXTAREA.value += " ";
                        break;
                    }
                    case  'Shift': {
                        e.target.classList.toggle('long_touch');
                        if (lower_case == true){
                            lower_case = false;
                        } else{
                            lower_case = true;
                        }
                        
                        break;
                    }
                    case  'CapsLock': {
                        e.target.classList.toggle('long_touch');
                        if (lower_case == true){
                            lower_case = false;
                        } else{
                            lower_case = true;
                        }
                        
                        break;
                    }
                    case  'ControlLeft': {
                        e.target.classList.toggle('long_touch');
                        if (ctrl == false){
                            ctrl = true;
                        } else{
                            ctrl = false;
                        }
                        
                        break;
                    }
                    case  'EN': {
                        e.target.classList.toggle('long_touch');
                        en_lang = false;
                        KEYBOARD.innerHTML = "";
                        keyboard_onload ();
                        
                        break;
                    }
                    case  'BY': {
                        e.target.classList.toggle('long_touch');
                        en_lang = true;
                        KEYBOARD.innerHTML = "";
                        keyboard_onload ();
                        
                        break;
                    }
                    case  'Backspace' : {
                        TEXTAREA.value =TEXTAREA.value.split('',TEXTAREA.value.length-1).join('');
                        break;
                    }
                    default : {
                        if (e.shiftKey || lower_case == false){
                            TEXTAREA.value += e.target.attributes.value_low_en.nodeValue.toUpperCase();
                        } else{
                            TEXTAREA.value += e.target.attributes.value_low_en.nodeValue;
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
    

