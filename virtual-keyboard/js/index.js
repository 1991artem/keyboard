

const KEY_OF_KEYBOARD = {
    EN_LOW_WORD_ARRAY : ['§','1','2','3','4','5','6','7','8','9','0','-','=',
                        '&#5130;','&#8644;','q','w','e','r','t','y','u','i','o','p','[',']',"EN",
                        '&#8682;','a','s','d','f','g','h','j','k','l',';','\'','\\','&#8629;',
                        '&#8679;','`','z','x','c','v','b','n','m',',','.','/','↑','&#8679;',
                        'control','option','command','MacOS','command','option','←','↓','→'],
    EN_UP_WORD_ARRAY : ['±','!','@','#','$','%','^','&','*','(',')','-','=','&#5130;',
                        '&#8644;','Q','W','E','R','T','Y','U','I','O','P','[',']',"EN",
                        '&#8682;','A','S','D','F','G','H','J','K','L',';','\'','\\','&#8629;',
                        '&#8679;','`','Z','X','C','V','B','N','M ',',','.','/','↑','&#8679;',
                        'control','option','command','MacOS','command','option','←','↓','→'],
    LG_LOW_WORD_ARRAY : ['§','1','2','3','4','5','6','7','8','9','0','-','=','&#5130;',
                        '&#8644;','й','ц','у','к','е','н','г','i','ў','з','х','ъ',"BY",
                        '&#8682;','ф','ы','в','а','п','р','о','л','д','ж','э','ё','&#8629;',
                        '&#8679;','`','я','ч','с','м','і','т','ь','б','ю','/','↑','&#8679;',
                        'control','option','command','MacOS','command','option','←','↓','→'],
    LG_UP_WORD_ARRAY : ['>','!','"','№','%',':',',','.',';','(',')','-','=','&#5130;',
                        '&#8644;','Й','Ц','У','К','Е','Н','Г','I','Ў','З','Х','Ъ',"BY",'&#8682;',
                        'Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Ё','&#8629;',
                        '&#8679;','`','Я','Ч','С','М','І','Т','Ь','Б','Ю','/','↑','&#8679;',
                        'control','option','command','MacOS','command','option','←','↓','→']

                    };

class Key {
    constructor(element, elClass, elName, value, children){
        this.element = element;
        this.elClass = elClass;
        this.elName = elName;
        this.value = value;
        this.children = children;
    }
init(){
    this.element.classList.add(this.elClass);
    this.element.setAttribute('name', this.elName);
    this.element.setAttribute('value', this.value);
    this.children.classList.add('symbol');
    this.element.append(this.children);
            if (this.value.length == 1){
                this.children.innerHTML = this.value.toUpperCase();
            } else{
                this.children.innerHTML = this.value;
            }
}
}

class Keyboard {

    constructor(){  
        try{
        this.KEY_OF_KEYBOARD = KEY_OF_KEYBOARD;}
        catch (e){console.log ("Error load /js/key.js" + e);}
        this.flag = {
            lang : JSON.parse(localStorage.getItem("flag.leng")),
            up_case : false,
            ctrl : false,
            shift : false,
        };
        
        if (this.flag.lang != undefined){ this.flag.lang == true };

        this.KEYBOARD = null;
        this.TEXTAREA = null;
        this.NAME_ARRAY = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace',
                            'Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','lng',
                            'CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Backslash','Enter',
                            'ShiftLeft','IntlBackslash','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight',
                            'ControlLeft','AltLeft','MetaLeft','Space','MetaRight','AltRight','ArrowLeft','ArrowDown','ArrowRight'];
}
windowForm (){
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
    
    keyboard_onload (){ 
        this.TEXTAREA = document.querySelector ('.text_area');
        this.KEYBOARD = document.querySelector ('.keyboard_area');
        let keyArray = [];
        switch (this.flag.lang){
            case false:{
                if (this.flag.up_case || this.flag.shift){
                    keyArray = this.KEY_OF_KEYBOARD.LG_UP_WORD_ARRAY;
                } else{
                    keyArray = this.KEY_OF_KEYBOARD.LG_LOW_WORD_ARRAY;
                }
                break;
            }
            default :{
                if (this.flag.up_case || this.flag.shift){
                    keyArray = this.KEY_OF_KEYBOARD.EN_UP_WORD_ARRAY;
                } else{
                    keyArray = this.KEY_OF_KEYBOARD.EN_LOW_WORD_ARRAY;
                }
            }
        }
        for (let i = 0; i < keyArray.length; i++){
            let div = document.createElement('div'); 
            let symbol = document.createElement('p');
            new Key(div,'word', this.NAME_ARRAY[i], keyArray[i], symbol).init();
            this.KEYBOARD.append(div);
    };

    let country = document.createElement('img');
    let space = document.querySelector ('[name=Space]')
    space.append(country);
    if (this.flag.lang){
        country.src = 'icon/EN.png';
    } else{
        country.src = 'icon/BY.jpeg';
    }

    if (this.flag.up_case){
        document.querySelector ('[name=CapsLock]').classList.add('long_touch');
    }
    if (this.flag.shift){
        document.querySelector ('[name=ShiftLeft]').classList.add('long_touch');
        document.querySelector ('[name=ShiftRight]').classList.add('long_touch');
    }
}

physical_keyboard (){
        
        this.TEXTAREA.addEventListener('keydown', (e) => {
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
          this.TEXTAREA.addEventListener('keyup', (e) => {
            try{
                document.querySelectorAll(`[name=${e.code}]`)[0].classList.remove('touch');
            } catch (error){
                console.log (`Press key ${e.code} + ${error}`);
            }
            });
    }

text_write (){
    this.KEYBOARD.addEventListener('mousedown', (e) => {
            e.target.classList.add('touch');
                switch (e.target.attributes.name.nodeValue){
                    case  'Space' : {
                        if (this.flag.ctrl){
                            if (this.flag.lang == true){
                                this.flag.lang = false;
                            } else {
                                this.flag.lang = true;
                            }
                            this.reload_keyboard ();
                            localStorage.setItem("flag.leng",this.flag.lang);
                        } else {
                            this.TEXTAREA.value += " ";
                        }
                        break;
                    }
                    case  'Enter' : {
                        this.TEXTAREA.value += "\n";
                        break;
                    }
                    case  'Tab' : {
                        this.TEXTAREA.value += '    ';
                        break;
                    }
                    case  'ShiftLeft':
                    case  'ShiftRight':{
                        e.target.classList.toggle('long_touch');
                        if (this.flag.shift){
                            this.flag.shift = false;
                        } else{
                            this.flag.shift = true;
                        }
                        this.reload_keyboard ();
                        break;
                    }
                    case  'CapsLock': {                                       
                        if (this.flag.up_case){
                            this.flag.up_case = false;
                        } else{
                            this.flag.up_case = true;
                        }
                        this.reload_keyboard ();
                        break;
                    }
                    case  'ControlLeft': {
                        e.target.classList.toggle('long_touch');
                        if (this.flag.ctrl){
                            this.flag.ctrl = false;
                        } else{
                            this.flag.ctrl = true;
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
                        if(this.flag.lang){
                            this.flag.lang = false;
                        } else{
                            this.flag.lang = true;
                        }
                        this.KEYBOARD.innerHTML = "";
                        this.keyboard_onload ();
                        this.flag.up_case = false;
                        this.flag.ctrl = false;
                        localStorage.setItem("flag.leng",this.flag.lang);
                        break;
                    }
                    case  'Backspace' : {                                                                    
                        this.TEXTAREA.value =this.TEXTAREA.value.split('',this.TEXTAREA.value.length-1).join('');
                        break;
                    }
                    default : {
                        if (e.shiftKey || this.flag.up_case || this.flag.shift){
                            this.TEXTAREA.value += e.target.attributes.value.nodeValue.toUpperCase();
                            if (this.flag.shift){
                                this.flag.shift = false;
                                this.reload_keyboard ();
                            }
                        } else{
                            this.TEXTAREA.value += e.target.attributes.value.nodeValue;
                        }
                        
                    break;
                    };
                    }
        });

        this.KEYBOARD.addEventListener('mouseup', (e) => {
            e.target.classList.remove('touch');
          });
    }
reload_keyboard (){
    this.KEYBOARD.innerHTML = "";
    this.keyboard_onload ();
        this.flag.ctrl = false;
    }

}

window.onload = () =>{
let KEYBOARD = new Keyboard (KEY_OF_KEYBOARD);
KEYBOARD.windowForm();
KEYBOARD.keyboard_onload ();
KEYBOARD.physical_keyboard();
KEYBOARD.text_write();  
}
