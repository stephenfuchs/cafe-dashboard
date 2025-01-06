export function calcChange(prior: number, current: number) {
    if (prior === 0) return current * 100;
    return ((current - prior) / prior) * 100;
}
