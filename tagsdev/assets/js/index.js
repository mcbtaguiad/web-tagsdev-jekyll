const d = 40;

document.querySelectorAll('.rocket-button').forEach(elem => {

    elem.querySelectorAll('.default, .success > div').forEach(text => {
        charming(text);
        text.querySelectorAll('span').forEach((span, i) => {
            span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
            span.style.setProperty('--d', i * d + 'ms');
            span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });
    elem.addEventListener('click', e => {
        e.preventDefault();
        if(elem.classList.contains('animated')) {
          // elem.classList.remove('animated');
          return;
        }
        elem.classList.add('animated');
        elem.classList.toggle('live');
        // elem.classList.remove('animated');
        setTimeout(function(){
          elem.classList.remove('animated');
          window.open('https://moonlanding.tagsdev.click/');
        },3500);
        setTimeout(function(){
          elem.click()
        },5000);

      
    }, {once : true});

    // }, {once : true}); pwede to, cool concept

});