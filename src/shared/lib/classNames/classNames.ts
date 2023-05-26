export function classNames(mainClass: string, conditionalClasses: Record<string, boolean | string> = {}, additionalClassesMandatory: string[] = []): string {
    return [mainClass, ...additionalClassesMandatory.filter(Boolean), ...Object.entries(conditionalClasses)
        .map(([className, expression]) => expression ? className : null)].join(' ');
}