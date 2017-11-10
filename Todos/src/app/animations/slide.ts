import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const slideTrigger = trigger('slideTriggerState', [
  transition(':enter', [
    animate('600ms ease-in', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ]))
  ]),
  transition(':leave', [
    animate('600ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ]),
]);
