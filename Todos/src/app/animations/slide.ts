import { trigger, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

const enterAnimation = animation([
  animate('{{enterDuration}} ease-in', keyframes([
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ]))
]);

const leaveAnimation = animation([
  animate('{{leaveDuration}} ease-out', keyframes([
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    })
  ]))
]);

export const slideTrigger = ({ enterDurtion = '400ms', leaveDuration = '400ms' } = {}) => trigger('slideTriggerState', [
  transition(':enter', [
    useAnimation(enterAnimation, { params: { enterDuration: enterDurtion } })
  ]),
  transition(':leave', [
    useAnimation(leaveAnimation, { params: { leaveDuration: leaveDuration } })
  ]),
]);
