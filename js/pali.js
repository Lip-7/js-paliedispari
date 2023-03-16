document.getElementById('btnPaliCheck').addEventListener('click', () => {
    if (palindromCheck(document.querySelector('input').value)) {
        document.querySelector('h2').innerHTML = `Congrats!! ${document.querySelector('input').value} is a PALINDROM!!`;
        return
    }else {
        document.querySelector('h2').innerHTML = `No sorry! "${document.querySelector('input').value}" is NOT a PALINDROM!!`;
    }
});