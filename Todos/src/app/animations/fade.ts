import { trigger, transition, style, animate } from '@angular/animations';

export const fadeTrigger = trigger('fadeTriggerState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate('300ms')
  ]),
  transition(':leave', [
    animate('300ms', style({
      opacity: 0,
    })
    )
  ])
]);
