type Mode = Record<string, string | boolean>

export const classNames = (mainClass: string, mode: Mode = {}, additionalClasses: string[] = []): string => {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mode).reduce((acc, [cls, value]) => (value ? [...acc, cls] : acc), [] as string[],)
    ].join(' ')
}