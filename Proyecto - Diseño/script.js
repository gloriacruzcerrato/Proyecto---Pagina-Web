let estado = 0;

window.onload = function() {

    document.getElementById('cambiar').addEventListener('click', modo);

    function modo() {
        if (estado == 0) {
            estado = 1;
            document.getElementById('body').style.backgroundColor = 'black';
            document.getElementById('cambiar').textContent = 'Modo Diurno';
            document.getElementById('cambiar').style.borderColor = '#b69142';
            document.getElementById('cambiar').style.color = '#b69142';
        } else if (estado == 1) {
            estado = 0;
            document.getElementById('cambiar').textContent = 'Modo Nocturno';
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('cambiar').style.borderColor = 'black';
            document.getElementById('cambiar').style.color = 'black';
        } else {
            estado = 0;
            document.getElementsByTagName('body').style.backgroundColor = 'white';
        }
    }


}