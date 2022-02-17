let mensagem = document.querySelectorAll("mensagem")
function enviar() {
    if (mensagem.length < 15) {
        window.alert('Sua mensagem precisa ter mais de 10 caracteres! Favor reenviar!')
    }
    else{
        window.alert('Agradecemos o seu envio, retornaremos em breve')
    }

}