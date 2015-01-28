var Loader = function (image, success, error) {
  var $img = $(image)
  img = $img.get(0);

  if (typeof (img) === 'undefined') {
    throw new Error("image could not be resolved.");
  }

  var handled = false,

  checkComplete = function () {
    if (img.complete && handled === false) {
      handled = true;

      if (typeof (success) === 'function') {
        success.call(img);
      }
    }
  },

  handleError = function () {
    if (typeof (error) === 'function' && handled == false) {
      handled = true;

      error.call(img);
    }
  },

  removeHandlers = function () {
    $img.unbind('.jcloader');
  }

  $img
  .bind('load.jcloader', checkComplete)
  .bind('error.jcloader', handleError)
  .bind('load.jcloader', removeHandlers)
  .bind('error.jcloader', removeHandlers);

  checkComplete();
};

module.exports = Loader;
