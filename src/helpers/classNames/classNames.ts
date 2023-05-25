export function classNames(mainClass: string, conditionalClasses: Record<string, boolean | string>, additionalClassesMandatory: string[]): string {
    const activatedConditionalClasses = Object.entries(conditionalClasses)
        .map(([className, expression]) => expression ? className : null)
        .join(' ').trim();
    return `${mainClass} ${activatedConditionalClasses} ${additionalClassesMandatory.join(' ')}`;
}