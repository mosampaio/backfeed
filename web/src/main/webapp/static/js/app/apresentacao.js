require(["jquery", "ko", "ko.page", "modernizr", "lib/util"], function($, ko, pagePlugin, mz) {
    pagePlugin.setPlugin(ko);
    var Model = function() {
        var model = this;
        this.tela = ko.observable(0);
        this.apresentacaoSelecionada = ko.observable();
        
        this.irParaApresentacao = function(apresentacao){ 
            if (model.obterApresentacoesVotadas().contains(function(item){ return apresentacao.id == item; }) || apresentacao.status == 'ENCERRADA') {
                return;
            }
            model.apresentacaoSelecionada(apresentacao);
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
        
        this.obterApresentacoesVotadas = function() {
            var localStore = window.localStorage;
            return JSON.parse(localStore.getItem("apresentacoesVotadas")) || [];
        };
        
        this.bloquearVotacao = function(){
            if (mz.localstorage) {
                var localStore = window.localStorage;
                var votadas = this.obterApresentacoesVotadas();
                votadas.push(model.apresentacaoSelecionada().id);
                localStore.setItem("apresentacoesVotadas", JSON.stringify(votadas));
            } else {
                console.log("Já era!");
            }            
        };
        
        this.votar = function(url) {
            $.post(url.replace("{id}", model.apresentacaoSelecionada().id), null, function () {
                model.bloquearVotacao();
                model.irParaPalestras();
                model.buscarApresentacoes();
            });
        };
        
        this.encerrar = function() {
            $.post('/backfeed/apresentacao/encerrar', null, function(){
                alert('Votação Encerrada!');
                model.buscarApresentacoes();
            });
        };
        
        this.apresentacoes = ko.observableArray(),
        this.buscarApresentacoes = function() {
            $.getJSON('/backfeed/apresentacao/lista.json', function(lista){
                var total;
                lista.each(function(item){
                    total = (parseInt(item.verde) + parseInt(item.amarelo) + parseInt(item.vermelho));
                    if (total) {
                        item.percentualVerde = (parseInt(item.verde)*100.0 / total).toFormattedString({format:"N2"}) + " %";
                        item.percentualAmarelo = (parseInt(item.amarelo)*100.0 / total).toFormattedString({format:"N2"}) + " %";
                        item.percentualVermelho = (parseInt(item.vermelho)*100.0 / total).toFormattedString({format:"N2"}) + " %";
                    } else {
                        item.percentualVerde = "0,00 %";
                        item.percentualAmarelo = "0,00 %";
                        item.percentualVermelho = "0,00 %";
                    }
                });
                model.apresentacoes(lista);
            });
        };
        this.init = function() {
            ko.applyBindings(this);
            this.buscarApresentacoes();
        };
    };
    new Model().init();
});