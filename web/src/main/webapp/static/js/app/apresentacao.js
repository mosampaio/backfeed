require(["jquery", "ko", "ko.page", "modernizr", "lib/util"], function($, ko, pagePlugin, mz) {
    pagePlugin.setPlugin(ko);
    
    var Model = function() {
        var model = this;
        this.mensagem = ko.observable(null);
        this.tela = ko.observable("#palestras");
        this.apresentacaoSelecionada = ko.observable();
        this.hashVotacoes = [];
        this.mensagem.subscribe(function(val){
            if (val != null) {
                setTimeout(function(){ model.mensagem(null); }, 6000);
            }
        });
        this.irParaApresentacao = function(apresentacao){ 
            if (model.obterApresentacoesVotadas().contains(function(item){ return apresentacao.id == item; }) || apresentacao.status == 'ENCERRADA') {
                apresentacao.votada = true;
                return;
            }
            model.apresentacaoSelecionada(apresentacao);
            model.tela("#votacao");
        }; 
        
        this.irParaPalestras = function () { 
            model.tela("#palestras"); 
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
            $.ajax({
                url: '/backfeed/apresentacao/lista.json',
                type: 'GET',
                dataType:'json',
                contentType: "application/json; charset=UTF-8",
                success: function(lista){
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
                }
            });
        };
        this.init = function() {
            ko.applyBindings(this);
            this.hashVotacoes["item-verde"] = this.votarVerde;
            this.hashVotacoes["item-amarelo"] = this.votarAmarelo;
            this.hashVotacoes["item-vermelho"] = this.votarVermelho;
            this.buscarApresentacoes();
        };
    };
    
    $(function(){
        var model = new Model();
        model.init();
        if (mz.draganddrop && $.draggable) {
            $(".item-votacao").draggable({
                cursor: "move", 
                containment: "#votacao", 
                scroll: false,
                revert: true
            });
            $( ".caixa" ).droppable({
                accept: ".item-votacao",
                hoverClass: "dd-decorado",
                drop: function(evt, ui) {
                    model.hashVotacoes[ui.draggable.attr('id')].call(model);
                    alert("Obrigado por votar!");
                }
            });
        } else {
            $(".item-votacao").click(function(){
                model.hashVotacoes[$(this).attr('id')].call(model);
                alert("Obrigado por votar!");
            });
        }
    });
});