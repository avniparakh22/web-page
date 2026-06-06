const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'black' ? '#f0f0f0' : 'black';
});