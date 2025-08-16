'strict';



const btn = document.getElementById('sharebtn');
const footers = document.querySelector('footer');


btn.addEventListener('click', function(e){
     e.stopPropagation();
    footers.style.display = 'block';

    console.log('click')
})




document.querySelector('body').addEventListener('click', function(){
   footers.style.display = 'none';

    console.log('click remove')
})

