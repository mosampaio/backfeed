require(["jquery", "ko"], function($, ko) {
    var model = {
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
