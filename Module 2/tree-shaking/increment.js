import { add } from './math';

export function increment(val) {
    return add(val, 1);
}

export function incrementBy2(val) {
    return add(val, 2);
}

export function decrement(val) {
    return add(val, -1);
}