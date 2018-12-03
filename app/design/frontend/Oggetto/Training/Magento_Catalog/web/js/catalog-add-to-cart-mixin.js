define([
    'jquery',
    'modal'
], function (
    $
) {
    'use strict';

    var mixin = {
        enableAddToCartButton: function() {
            this._super();
            $('<p>Nice choice!</p>').modal().modal('openModal');
        }
    };

    return function(target) {
        return $.widget('mage.catalogAddToCart', target, mixin)
    }
});
