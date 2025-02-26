if (typeof window !== 'undefined' && !String.prototype.replaceAll) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await import('core-js/actual/string/replace')
}