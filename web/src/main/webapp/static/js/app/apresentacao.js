require(["jquery", "ko", "lib/knockoutjs.page"], function($, ko, page) {
    var Model = function() {
        var model = this;
        this.tela = ko.observable("palestras");
        this.apresentacaoSelecionada = ko.observable();
        this.trocarTela = function(data){ 
            model.apresentacaoSelecionada(data);
            model.tela(model.tela() == "palestras" ? "detalhes" : "palestras");
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