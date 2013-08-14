<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
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
        
        <style>
            h1, h2, h3, h4, h5, h6{
                margin: 0; padding: 0;
            }
            body{
                background-color: red;
                color: blue;
                margin: 0;
                padding: 0;
            }
            header {
                border-bottom: 1px white solid;
                height: 36px;
            }
            #main{
                color: white;
            }
        </style>
    </head>
    <body>
        <header>
            <h2>Backfeed!</h2>
        </header>
        <div id="main">
            <ul data-bind="foreach:apresentacoes">
                <li data-bind="text:titulo"></li>                
            </ul>
        </div>
    </body>
</html>
