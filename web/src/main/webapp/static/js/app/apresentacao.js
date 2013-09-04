require(["jquery", "ko", "ko.page", "modernizr"], function($, ko, pagePlugin, mz) {
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
            this.votar('/backfeed/apresentacao/{id}/votarVerde');
        };
        
        this.votarAmarelo = function(){
            this.votar('/backfeed/apresentacao/{id}/votarAmarelo');
        };
        
        this.votarVermelho = function(){
            this.votar('/backfeed/apresentacao/{id}/votarVermelho');
        };
        
        this.bloquearVotacao = function(){
            if (mz.localstorage) {
                var localStore = window.localStorage;
                localStore.setItem(model.apresentacaoSelecionada().id, "True");
            } else {
                console.log("Já era!");
            }            
        };
        
        this.votar = function(url) {
            $.post(url.replace("{id}", model.apresentacaoSelecionada().id), null, 
                function () {
                    model.bloquearVotacao();
                    model.irParaPalestras();
                    model.buscarApresentacoes();
                }
            );
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