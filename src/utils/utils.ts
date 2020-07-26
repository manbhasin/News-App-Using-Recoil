export const truncateAndEllipsis = (data: string | undefined, upto: number) => {
    return data ? data.length > upto ? data.slice(0, upto).concat("...") : data : ""
}