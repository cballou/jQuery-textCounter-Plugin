/**
 * textCounter is a minimal jQuery plugin for handling input, textarea,
 * or contentEditable countdowns. It handles either word lengths or
 * string lengths.
 */
(function($) {
    /**
     * Plugin to add support for a textarea countdown.
     */
    $.fn.textCounter = function(options) {
        // get options
        var options = $.extend($.fn.textCounter.defaults, options),
            $countContainer;
            
        // get the container for updating the count
        if (options.countContainer) {
            if (options.countContainer instanceof jQuery) {
                $countContainer = options.countContainer;
            } else if (options.countContainer.length) {
                $countContainer = $(options.countContainer);
            }
        }
    
        return this.each(function() {
            var $obj = $(this);
            
            // watch for keyup
            $obj.bind('keyup input paste', function() {
                return _count($obj, $countContainer);
            });
            
            // trigger initial state
            _count($obj, $countContainer);
        });
        
        /**
         * Private method handling counts.
         */
        function _count($obj, $countContainer) {
            var text = $obj.val(),
                textCount,
                trimStr,
                wording;
            
            // determine if handling words or characters
            if (options.countWords === true) {
                trimStr = $.trim(text).split(' ');
                textCount = (text === '') ? 0 : trimStr.length;
                wording = options.countWordStr;
            } else {
                trimStr = text;
                textCount = trimStr.length - 1;
                wording = options.countLengthStr;
            }
            
            // ensure not exceeding limit
            if (textCount > options.maxLength) {
                // add error class
                $countContainer.addClass(options.errorClass);
                
                // don't allow overage
                if (options.preventNegative) {
                    if (options.countWords === true) {
                        $obj.val(trimStr.slice(0, options.maxLength - 1).join(' '));
                    } else {
                        $obj.val(trimStr.substring(0, options.maxLength));
                    }
                }
            } else {
                $countContainer.removeClass(options.errorClass);
            }
            
            // if counting down (showing remaining)
            if (options.countDown) {
                textCount = options.maxLength - textCount;
            }
            
            // update the text
            $countContainer.text(textCount + ' ' + wording);
        }
    };
    
    /**
     * Default config values. Can be overridden globally.
     *
     * maxLength [int] - The maximum length of the input, textarea, or editable field
     * countWords [bool] - Whether to count by word or by length
     * countContainer [jQuery element | DOM selector string] - The container to display the count and message
     * countDown [bool] - Whether the counter displays a remaining count or current count
     * errorClass [string] - The class to apply to countContainer when an overage occurs
     * countWordStr [string] - The string to use after the word length
     * countLengthStr [string] - The string to use after the length
     */
    $.fn.textCounter.defaults = {
        maxLength: 140,
        countWords: true,
        preventNegative: false,
        countContainer: null,
        countDown: true,
        errorClass: 'error',
        countWordStr: 'words remaining',
        countLengthStr: 'characters remaining'
    };
})(jQuery);