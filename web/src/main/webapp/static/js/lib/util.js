define(["jquery"], function($){
    if (!Array.prototype.contains)
        Array.prototype.contains = function(callback) {
            for (var i = 0, len = this.length; i < len; i++) {
                if (callback.call(this, this[i], i, this)) {
                    return true;
                }
            }
            return false;
        };
        
    if (!Array.prototype.map)
        Array.prototype.map = function(callback) {
            var arr = [], i = 0, len = this.length;
            for (; i < len; i++) {
                arr.push(callback.call(this, this[i], i, this));
            }
            return arr;
        };
        
    if (!Array.prototype.each)
        Array.prototype.each = Array.prototype.forEach || function(callback) {
            var i = 0, len = this.length;
            for (; i < len; i++) {
                callback.call(this, this[i], i, this);
            }
            return this;
        };
        
     String.prototype.replaceAll = function String_replaceAll(match, rep) {
        var str = this;
        while (str.indexOf(match) > -1)
            str = str.replace(match, rep);
        return str;
    };

    String.prototype.trim = function String_trim() {
        return this.replace(/^(\s)*|(\s)*$/, '');
    };

    String.prototype.toNumber = function(options) {
        if (!options) options = {};
        var settings = { format: 'N2', intSymbol: '.', floatSymbol: ','};
        options = $.extend({}, settings, options);
        if (options.format.indexOf('N') !== 0) return parseFloat(this);
        var howManyDigits = parseInt(options.format.substr(1)), arrParts = this.split(options.floatSymbol),
        txtIntValue = arrParts[0], txtFloatValue = arrParts.length > 1 ? arrParts[1] : '0';
        if (howManyDigits > 9) return parseFloat(this);
        txtIntValue = txtIntValue.split('').map(function(item, index, arr){
            return (item == options.intSymbol) ? '' : item;
        }).join('');
        return parseFloat(txtIntValue + '.' + txtFloatValue);
    };

    Number.prototype.super_toString = function() {
        return (''+this);
    };

    Number.prototype.round = function(digits) {
        var adjust = '000000000000000000000000000000', factor, value;
        if (digits > adjust.length) throw 'It is not possible round to greater than ' + adjust.length + ' digits';
        factor = ('1' + adjust.substr(0, digits)).toNumber({ intSymbol: ',', floatSymbol: '.' });
        value = this * factor;
        value = Math.round(value);
        value = value / factor;
        return value;
    };

    Number.prototype.toFormattedString = function (options) {
        if (!options) return this.super_toString();
        var exceededFloatPart = '000000000000000000000000000000', settings = { format: 'N' + exceededFloatPart.length, intSymbol: '.', floatSymbol: ',' };
        options = $.extend({}, settings, options);
        if (options.format.indexOf('N') !== 0) return this.super_toString();
        var howManyDigits = parseInt(options.format.substr(1)),
        intValue = parseInt(this), floatPartValue = this % 1.0, 
        txtIntValue = intValue.super_toString(), arrInt, txtFloatValue;
        floatPartValue = floatPartValue.round(howManyDigits);
        if (howManyDigits > 9) return this.super_toString();
        arrInt = txtIntValue.split('');
        arrInt = arrInt.reverse();
        arrInt = arrInt.map(function(item, index, arr){
            return item + (index % 3 == 0 && index !== 0 ? options.intSymbol : '');
        });
        arrInt = arrInt.reverse();
        txtIntValue = arrInt.join('');
        txtFloatValue = floatPartValue.toFormattedString();
        txtFloatValue = txtFloatValue.indexOf('.') > -1 ? txtFloatValue.substr(2) : txtFloatValue;
        if (txtIntValue == "NaN" || txtFloatValue == "NaN") return NaN;
        return txtIntValue + (howManyDigits > 0 ? options.floatSymbol + (txtFloatValue + exceededFloatPart).substr(0, howManyDigits) : '');
    };
});


