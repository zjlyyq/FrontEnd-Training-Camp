// ArraySort与QuickSort性能对比

// 快排
function quickSort(a) {
    if (a.length < 2) return a;
    let i = 0, key = a[0];
    for(let j = 1; j < a.length; j ++) {
        if (key > a[j]) {
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
            i += 1;
        } 
        console.log(i, j, a);
    }
    // 已经有序，无需再排
    if (i === 0) return a;

    return [...quickSort(a.slice(0, i)), ...quickSort(a.slice(i))];
}