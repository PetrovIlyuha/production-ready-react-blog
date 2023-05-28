export function classNames(main: string, modClasses: Record<string, boolean | string> = {}, addonClasses: string[] = []): string {
    return [main, ...addonClasses.filter(Boolean), ...Object.entries(modClasses)
        .map(([className, expression]) => (expression ? className : null))].join(' ');
}
