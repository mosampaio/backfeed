define(["jquery"], function($) {
    var plugin = {
        set: function(value) {
            var obs = this;
            return function(){
                return obs(value);
            }
        },
        page: {
            update: function(element, valueAccessor) {
                $(element).find(".page").hide();
                var value = valueAccessor();
                if (typeof function(){} === typeof value) {
                    value = value();
                }
                $(element).find(value).show();
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