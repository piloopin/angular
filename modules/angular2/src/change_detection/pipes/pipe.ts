import {ABSTRACT, BaseException, CONST} from 'angular2/src/facade/lang';
export {WrappedValue} from './wrapped_value';

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
export class Pipe {
  constructor() {
    // Replace transform function with one that has a lexical this.
    this.transform = this.transform.bind(this);
  }

  supports(obj): boolean { return false; }
  onDestroy() {}
  transform(value: any, ...args: any[]): any { return null; }
}

export interface PipeFactory {
  supports(obs): boolean;
  create(cdRef): Pipe;
}
