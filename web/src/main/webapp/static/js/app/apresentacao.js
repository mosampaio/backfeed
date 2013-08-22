require(["jquery", "ko", "ko.page"], function($, ko, pagePlugin) {
    pagePlugin.setPlugin(ko);
    var Model = function() {
        var model = this;
        this.tela = ko.observable(0);
        this.apresentacaoSelecionada = ko.observable();
        this.irParaApresentacao = function(data){ 
            model.apresentacaoSelecionada(data);
            model.tela(1);
        };
        this.irParaPalestras = function () { 
            model.tela(0); 
        };
        
        this.votarVerde = function(){
            alert('Verde');
        };
        
        this.votarAmarelo = function(){
            alert('Amarelo');
        };
        
        this.votarVermelho = function(){
            alert('Vermelho');
        };
        
        this.apresentacoes = ko.observableArray(),
        this.buscarApresentacoes = function() {
            $.getJSON('/backfeed/apresentacao/lista.json', this.apresentacoes);
        };
        this.init = function() {
            ko.applyBindings(this);
            this.buscarApresentacoes();
        };
    };
    new Model().init();
});