require(["jquery", "ko"], function($, ko) {
    var model = {
        tela: ko.observable("palestras"),
        apresentacaoSelecionada:ko.observable(),
        trocarTela: function(data){ 
            model.apresentacaoSelecionada(data);
            model.tela(model.tela() == "palestras" ? "detalhes" : "palestras");
        },
        votarVerde: function(){
          
        },
        
        apresentacoes: ko.observableArray(),
        buscarApresentacoes: function() {
            $.getJSON('/backfeed/apresentacao/lista.json', this.apresentacoes);
        },
        init: function() {
            ko.applyBindings(this);
            this.buscarApresentacoes();
        }
    };
    model.init();
});
