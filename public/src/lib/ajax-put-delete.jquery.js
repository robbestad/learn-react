(function($){
  /*
   * Thanks to Stepan Suvorov
   * http://stepansuvorov.com/blog/2014/04/jquery-put-and-delete/
   */
  $.each( [ "put", "delete" ], function( i, method ) {
    $[ method ] = function( url, data, callback, type ) {
      if ( $.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      return $.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
})(jQuery);