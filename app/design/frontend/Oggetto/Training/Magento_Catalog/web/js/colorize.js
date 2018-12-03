define([
    'jquery'
], function (
    $
) {
    'use strict';

    function colorize($element, color) {
        $element.css('color',color);
    }

    return function(config, element) {
        var $element = $(element),
            color = config.color;
        $element.on('click', function() {
            colorize($element, color);
        });
    };
});
