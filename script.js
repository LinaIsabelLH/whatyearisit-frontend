
fetch('https://whatyearisit-backend-three-gamma.vercel.app/years')
     .then(response => response.json())
     .then(data => {
        document.querySelector('#year').textContent = data.years; 
     });