define([], function() {
    var plugin = {
        set: function(value) {
            var obs = this;
            return function(){
                return obs(value);
            }
        },
        page: {
            update: function(element, valueAccessor) {
                var position = plugin.ko.unwrap(valueAccessor());
                element.style.left = position * -100 + "%";
            }
        },
        ko: null
    };
    return {
        setPlugin:function(ko){
            plugin.ko = ko;
            ko.observable.fn.set = plugin.set;
            ko.bindingHandlers.page = plugin.page;
        }
    };
});