## Usage ##

```javascript
$('#my-target-elem').textCounter([options]);
```

## Options ##

You can override any of the following default options by either globally modifying the following or passing them in as the first `options` paramater:

```javascript
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
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cballou/jquery-textcounter-plugin/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

