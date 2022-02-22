const formulario = document.getElementById("form");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const valores = {
        nome: formulario['nome'].value,
        mensagem: formulario["mensagem"].value
    }

    if (valores.mensagem.length < 10) {

      window.alert('Sua mensagem precisa ter mais de 10 caracteres! Favor reenviar!')

    } else if(!valores.nome){

       window.alert('Favor, insira seu nome!')

    }
    else{

       window.alert('Agradecemos o seu envio, retornaremos em breve')
       return formulario.reset();
    }
})


