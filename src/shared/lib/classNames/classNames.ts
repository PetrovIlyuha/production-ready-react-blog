export function classNames(main: string, modClasses: Record<string, boolean | string> = {}, addonClasses: string[] = []): string {
    const modClassExtracted = [...Object.entries(modClasses)
        .filter(([className, expression]) => Boolean(expression))]
        .map(([className, expression]) => className).join(' ');
    const addonClassesExtracted = [...addonClasses.filter(Boolean)].join(' ');
    let result = `${main}`;
    if (modClassExtracted.length > 0) {
        result += ` ${modClassExtracted}`;
    }
    if (addonClassesExtracted.length) {
        result += ` ${addonClassesExtracted}`;
    }
    return result;
}
