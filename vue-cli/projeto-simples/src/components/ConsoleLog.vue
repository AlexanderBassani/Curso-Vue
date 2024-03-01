<template class="card m-3" id="console">
    <div class="card-body">
        <h5>Console Messages</h5>
        <ul class="messages list-group"></ul>
    </div>
</template>


<script>
export default {
    name: 'ConsoleLog',
    mounted() {
        console.log('Antes de Montar (DOM)')

        document.addEventListener("DOMContentLoaded", function () {
            console.log('You should know...');
            console.error('Something went wrong...');
            console.warn('Look out for this...');
        });

        function verificaTipoMensagem(mensagem) {
            if (mensagem instanceof HTMLElement) {
                const myHtmlString = mensagem.outerHTML
                const htmlDom = new DOMParser().parseFromString(myHtmlString, 'text/html');
                const htmlString = `<div style="white-space: break-spaces;">${htmlDom.body.innerHTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</div>`
                return htmlString
            } else if (mensagem instanceof Object) {
                const msgCompacta = JSON.stringify(mensagem);
                const msgExpandida = JSON.stringify(mensagem, null, 4);
                const msg = `
                        <a class="text-decoration-none" data-bs-toggle="collapse" href="#ob_${Date.now()}" role="button" aria-expanded="false" aria-controls="ob_${Date.now()}"><i class="bi bi-caret-right-fill"></i> ${msgCompacta}</a>
                        <div class="collapse ms-3" id="ob_${Date.now()}" style="white-space: break-spaces;">${msgExpandida}</div>
                        `
                return msg
            } else {
                return mensagem
            }
        }

        var native = window;
        var originalConsole = native.console;
        native.console = {
            log: function (message) {
                document.querySelector('ul.messages').insertAdjacentHTML("beforeEnd", '<li class="list-group-item list-group-item-primary p-1"><b>Log:</b> ' + verificaTipoMensagem(message) + '</li>')
                // $('ul.messages').append('<li>Log: ' + message + '</li>');
                originalConsole.log(message);
            },
            error: function (message) {
                document.querySelector('ul.messages').insertAdjacentHTML("beforeEnd", '<li class="list-group-item list-group-item-danger p-1"><b>Error:</b> ' + verificaTipoMensagem(message) + '</li>')
                // $('ul.messages').append('<li>Error: ' + message + '</li>');
                originalConsole.error(message);
            },
            warn: function (message) {
                document.querySelector('ul.messages').insertAdjacentHTML("beforeEnd", '<li class="list-group-item list-group-item-warning p-1"><b>Warn:</b> ' + verificaTipoMensagem(message) + '</li>')
                // $('ul.messages').append('<li>Warn: ' + message + '</li>');
                originalConsole.warn(message);
            }
        }
    },
}

</script>