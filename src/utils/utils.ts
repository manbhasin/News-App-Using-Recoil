export const truncateAndEllipsis = (data: string | undefined, upto: number) => {
    return data ? data.slice(0, upto).concat("...") : ""
}