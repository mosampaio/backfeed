define(function(){
    if (!Array.prototype.contains)
        Array.prototype.contains = function(callback) {
            for (var i = 0, len = this.length; i < len; i++) {
                if (callback.call(this, this[i], i, this)) {
                    return true;
                }
            }
            return false;
        };
});


