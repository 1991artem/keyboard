
    class Keyboard {
        constructor (e){
            this.value = e.key;
            this.shiftKey = e.shiftKey;
            this.name = e.code;
            this.ctrl = e.ctrlKey;
            this.location = e.location;;
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
        text_area.cols = 36;
        text_area.autofocus;
        text_area.value = '';
    }

    windowForm();

    const KEYBOARD = document.querySelector ('.keyboard_area');
    const TEXTAREA = document.querySelector ('.text_area');
    const SHIFTLEFT = document.querySelector ('.ShiftLeft');
    const SHIFTRIGHT = document.querySelector ('.ShiftRight');

    async function keyboard_onload (){
        try{ 
            let response = await fetch('json/key.json');
            console.log (response);
              if (response.ok){
                const EN_ARRAY = await response.json();
                console.log (EN_ARRAY);
                EN_ARRAY.forEach(element => {
                    if (!element.display){
                        let key = document.createElement('div'); 
                        let symbol = document.createElement('p');
                        key.classList.add(`word`);
                        key.classList.add(`${element.name}`);
                        symbol.classList.add('symbol'); 
                        key.setAttribute('keyCodeEN', element.keyCodeEN);
                        key.setAttribute('name', element.name);
                        KEYBOARD.append(key);
                        key.append(symbol);
                        symbol.innerHTML = String.fromCharCode(element.keyCodeEN);

                    } else{
                        let key = document.createElement('div'); 
                        let symbol = document.createElement('p');
                        key.classList.add(`word`);
                        symbol.classList.add('symbol'); 
                        key.classList.add(`${element.name}`);
                        KEYBOARD.append(key);
                        key.append(symbol);
                        if (element.keyCodeEN){
                        key.setAttribute('keyCodeEN', element.keyCodeEN);
                        }
                        key.setAttribute('name', element.name);
                        symbol.innerHTML = element.display;
                    };

                });

              } else{
                console.log("Ошибка HTTP: " + response.status);
              }
            } catch (error){
                console.log("Error response:   " + error)
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
            if (e.target.attributes.keyCodeEN == undefined) {
                switch (e.target.attributes.name.nodeValue){
                    case  'Quote' : {
                        TEXTAREA.value += "'";
                        break;
                    }
                        default : {
                            TEXTAREA.value += e.target.children[0].innerHTML;
                        break;
                        };
                }
            } else{
                 switch (e.target.attributes.keyCodeEN.nodeValue){
                    case  '0x08' : {
                        TEXTAREA.value = TEXTAREA.value.split('',TEXTAREA.value.length-1).join('');
                        break;
                    };
                    default : {
                        if (!e.shiftKey){
                            TEXTAREA.value += String.fromCharCode(e.target.attributes.keyCodeEN.nodeValue).toLowerCase();
                        } else {
                            TEXTAREA.value += String.fromCharCode(e.target.attributes.keyCodeEN.nodeValue);
                        }
                        break;
                    };
                }
            }
            
        });

          KEYBOARD.addEventListener('mouseup', (e) => {
            e.target.classList.remove('touch');
          });
    }

    keyboard_onload ();
    physical_keyboard();
    text_write();

