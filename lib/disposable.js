(function() {
  var Disposable;

  module.exports = Disposable = (function() {
    Disposable.prototype.disposed = false;


    /*
    Section: Construction and Destruction
     */

    function Disposable(disposalAction) {
      this.disposalAction = disposalAction;
    }

    Disposable.prototype.dispose = function() {
      if (!this.disposed) {
        this.disposed = true;
        if (typeof this.disposalAction === "function") {
          this.disposalAction();
        }
        return this.disposalAction = null;
      }
    };

    Disposable.prototype.off = function() {
      return this.dispose();
    };

    return Disposable;

  })();

}).call(this);
