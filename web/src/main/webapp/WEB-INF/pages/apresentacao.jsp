<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="pt-br"> <!--<![endif]-->
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> :: ContAgil :: </title>
    <link rel="icon" href="${pageContext.request.contextPath}/img/favicon.ico">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/estilo.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/cores.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/pages.css">
    <script>
        var require = {
            baseUrl: "${pageContext.request.contextPath}/js/",
            paths: {
                'jquery': './lib/jquery-ui-1.10.3.custom.min',
                'jqueryCore': './lib/jquery-1.10.2.min',
                'ko': './lib/knockout-2.3.0',
                'ko.page': './lib/knockout.page',
                'modernizr': './lib/modernizr-2.6.2.min'
            },
            shim: { 
                jquery: {
                    deps: ['jqueryCore'],
                    exports: 'jQuery'
                },
                ko: { exports: 'ko' },
                modernizr: { exports: 'Modernizr' }
            }
        };
    </script>
    <script data-main="app/apresentacao" src="${pageContext.request.contextPath}/js/lib/require.js"></script>
</head>
<body>
    <header>
        <div class="logo">
            <h1>
                IV Workshop de GP da TIC-BA
                <!--
                <span class="logoDestaque1">Conta</span>
                <span class="logoDestaque2">Agil</span>
                -->
            </h1>
        </div>
    </header>
    <section id="tela" data-bind="page: tela" class="pages">
        <div id="palestras" class="page">
            <h2>Palestras</h2>
            <ul class="palestras" data-bind="foreach:$root.apresentacoes">
                <li class="palestra" data-bind="click: function () { $root.irParaApresentacao($data); } ">
                    <h3 data-bind="text:titulo"></h3>
                    <p data-bind="text:apresentador"></p>
                </li>
                <li class="bloco-percentual" data-bind="visible: status == 'ENCERRADA'">
                    <div>
                        <image src="${pageContext.request.contextPath}/img/verde-mini.png" />
                        <span class="verde" data-bind="text: percentualVerde"></span>
                    </div>
                    <div>
                        <image src="${pageContext.request.contextPath}/img/amarelo-mini.png" />
                        <span class="amarelo" data-bind="text: percentualAmarelo"></span>
                    </div>
                    <div>
                        <image src="${pageContext.request.contextPath}/img/vermelho-mini.png" />
                        <span class="vermelho" data-bind="text: percentualVermelho"></span>
                    </div>
                </li>
            </ul>
        </div>
        <div id="votacao" class="page">
            <div data-bind="with:apresentacaoSelecionada">
                <h3 data-bind="text:titulo"></h3>
                <p data-bind="text:apresentador"></p>
            </div>
            <div id="votacao-playground" class="votacao">
                <img id="item-verde" class="item-votacao" src="${pageContext.request.contextPath}/img/verde.png" />
                <img id="item-amarelo" class="item-votacao" src="${pageContext.request.contextPath}/img/amarelo.png" />
                <img id="item-vermelho" class="item-votacao" src="${pageContext.request.contextPath}/img/vermelho.png" />
                <div class="caminhos">
                    <div id="caminho-verde" class="caminho">
                        <img src="${pageContext.request.contextPath}/img/seta1.png"/>
                    </div>
                    <div id="caminho-amarelo" class="caminho">
                        <img src="${pageContext.request.contextPath}/img/seta2.png"/>
                    </div>
                    <div id="caminho-vermelho" class="caminho">
                        <img src="${pageContext.request.contextPath}/img/seta3.png"/>
                    </div>
                </div>
                <div class="caixa">
                    <img src="${pageContext.request.contextPath}/img/caixafeedback.png"/>
                </div>
            </div>
            <!--<button data-bind="click: votarVerde">Verde</button>
            <button data-bind="click: votarAmarelo">Amarelo</button>
            <button data-bind="click: votarVermelho">Vermelho</button>-->
            <button data-bind="click: irParaPalestras">Voltar</button>
        </div>
    </section>
    <footer>
        <p>Contando com sua ajuda para ser cada vez melhor.</p>
    </footer>
    
    
</body>
</html>
