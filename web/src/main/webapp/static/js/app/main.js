requirejs.config({
    baseUrl: "js/",
    paths: {
        'jquery': './lib/jquery-1.10.2.min',
        'knockout': './lib/knockout-2.3.0'
    },
    shim: { 
        knockout: { exports: 'ko' }
    }
});
