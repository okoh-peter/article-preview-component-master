'strict';



const btn = document.getElementById('sharebtn');
const footers = document.querySelector('footer');


btn.addEventListener('click', function(){
    footers.style.display = 'block';

    console.log('click')
})