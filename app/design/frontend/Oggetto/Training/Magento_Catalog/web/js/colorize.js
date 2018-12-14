define([
    'jquery',
    'jquery/ui'
], function (
    $
) {
    'use strict';

    $.widget('mage.colorize', {
        _create: function() {
            this.$element = $(this.element);
            this.color = this.$element.data('color');
            this._events();
        },

        _events: function() {
            this.$element.on('click', this._changeColor.bind(this));
        },

        _changeColor: function() {
            this.$element.css('color',this.color);
        }
    });

    return $.mage.colorize;
});
