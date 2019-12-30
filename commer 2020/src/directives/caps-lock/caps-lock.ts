import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


/**
 * Generated class for the CapsLockDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */


@Directive({ selector: '[capsLock]' })
export class CapsLockDirective {
  @Output('capsLock') capsLock = new EventEmitter<Boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const capsOn = event.getModifierState && event.getModifierState('CapsLock');
    this.capsLock.emit(capsOn);
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    const capsOn = event.getModifierState && event.getModifierState('CapsLock');
    this.capsLock.emit(capsOn);
  }
}