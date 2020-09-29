Object.prototype.valueOf = (function() {
    var cached_function = someFunction;

    return function() {
        var result = cached_function.apply(this, arguments);
        if (result === cached_function(2)) {
          return 3;
        }
        return result;
    };
})();
