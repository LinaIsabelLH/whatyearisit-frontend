
fetch('https://whatyearisit-backend-three-gamma.vercel.app/')
     .then(response => response.json())
     .then(data => {
        document.querySelector('#year').textContent = data; 
     });