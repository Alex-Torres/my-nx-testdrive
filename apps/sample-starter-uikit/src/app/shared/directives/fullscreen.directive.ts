import { Directive, HostListener } from '@angular/core';
declare var require: any
const screenfull = require('screenfull');
@Directive({
	selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective {
	@HostListener('click') onClick() {
		if (screenfull.enabled) {
			screenfull.toggle();
		}
	}
}
