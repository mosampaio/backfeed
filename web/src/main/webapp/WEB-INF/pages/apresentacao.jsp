<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title> :: Cont¡gil :: </title>
        <link rel="icon" href="${pageContext.request.contextPath}/img/favicon.ico">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/estilo.css">
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
    
    </head>
    <body>
        <header>
            <div class="marcaSistema"></div>
        </header>
        <section>
            <h1>Consulta</h1>
            <div id="main">
                <h2>Palestras</h2>
                <ul data-bind="foreach:apresentacoes">
                    <li data-bind="text:titulo"></li>                
                </ul>
            </div>
        </section>
        <footer></footer>
    </body>
</html>
