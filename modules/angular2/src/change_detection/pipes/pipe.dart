library angular2.src.change_detection.pipes.pipe;

export "package:angular2/src/change_detection/pipes/wrapped_value.dart" show WrappedValue;

/**
 * An interface for extending the list of pipes known to Angular.
 *
 * If you are writing a custom {@link Pipe}, you must extend this interface.
 *
 * #Example
 *
 * ```
 * class DoublePipe extends Pipe {
 *  supports(obj) {
 *    return true;
 *  }
 *
 *  transform(value) {
 *    return `${value}${value}`;
 *  }
 * }
 * ```
 *
 * @exportedAs angular2/pipes
 */
class Pipe {
  bool supports(obj) => false;
  onDestroy() {}
  //transform(value, arg1, arg2, ...) {return null;}
}

abstract class PipeFactory {
  bool supports(obs);
  Pipe create(cdRef);

  const PipeFactory();
}
