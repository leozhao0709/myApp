import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';

const enterAnimation = animation([
  style({
    opacity: 0,
  }),
  animate('{{enterDuration}}')
]);

const leaveAnimation = animation([
  animate('{{leaveDuration}}', style({
    opacity: 0,
  })
  )
]);

export const fadeTrigger = ({ enterDuration = '300ms', leaveDuration = '300ms' } = {}) => trigger('fadeTriggerState', [
  transition(':enter', [
    useAnimation(enterAnimation, { params: { enterDuration: enterDuration } })
  ]),
  transition(':leave', [
    useAnimation(leaveAnimation, { params: { leaveDuration: leaveDuration } })
  ])
]);
