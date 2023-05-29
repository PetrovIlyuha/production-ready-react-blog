import { classNames } from './classNames';

describe('classNames', () => {
    test('main class', () => {
        expect(classNames('class')).toBe('class');
    });
    test('conditional class with one flagged false', () => {
        const testResult = 'container animateOnRender nightly';
        const modClasses = { animateOnRender: true, easedAnimations: false };
        expect(classNames('container', modClasses, ['nightly'])).toBe(testResult);
    });
});
