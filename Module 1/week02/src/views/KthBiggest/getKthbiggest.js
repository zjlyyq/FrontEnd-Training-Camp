import Heap from './heap'

/**
 * 
 * @param {Array} list 
 * @param {Function} compare 比较函数
 * @param {Number} k  
 */
export default function(list, compare, k) {
    // 创建一个空的小顶堆
    const heap = new Heap([], compare);
    for(let item of list) {
        if (heap.size < k) {
            heap.give(item);
            continue;
        }
        if (heap.heap[0] < item) {
            heap.take();
            heap.give(item);
        }
    }
    return heap.heap[0];
}