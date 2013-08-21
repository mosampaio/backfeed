<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title> :: Cont�gil :: </title>
        <link rel="icon" href="${pageContext.request.contextPath}/img/favicon.ico">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/estilo.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/cores.css">
        <script>
            var require = {
                baseUrl: "${pageContext.request.contextPath}/js/",
                paths: {
                    'jquery': './lib/jquery-1.10.2.min',
                    'ko': './lib/knockout-2.3.0'
                },
                shim: { 
                    ko: { exports: 'ko' }
                }
            };
        </script>
        <script data-main="app/apresentacao" src="${pageContext.request.contextPath}/js/lib/require.js"></script>
        <script type="text/html" id="palestras">
        <h2>Palestras</h2>
        <ul class="palestras" data-bind="foreach:apresentacoes">
            <li class="palestra" data-bind="click: function () { $root.trocarTela($data); } ">
                <h3 data-bind="text:titulo"></h3>
                <p data-bind="text:apresentador"></p>
            </li>                
        </ul>
    </script>
    <script type="text/html" id="detalhes">
        <h2>Vota��o</h2>
        <div data-bind="with:apresentacaoSelecionada">
            <h3 data-bind="text:titulo"></h3>
            <p data-bind="text:apresentador"></p>
        </div>
        <button data-bind="click: function(){$root.votarVerde();}">Verde</button>
        <button>Amarelo</button>
        <button>Vermelho</button>
        <button data-bind="click: function(){$root.trocarTela();}">Voltar</button>
    </script>
</head>
<body>
    <header>
        <div class="logo">
            <h1>
                <span class="logoDestaque1">Conta</span>
                <span class="logoDestaque2">�gil</span>
            </h1>
        </div>
    </header>
    <section id="tela" data-bind="template: { name: tela }">
    </section>
    <footer>
    </footer>
</body>
</html>
