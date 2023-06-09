const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  const shuffle = (arr, n) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      swap(arr, i, j);
      n--;
      if (n === 0) break;
    }
  };
  
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let min_index = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
      swap(arr, i, min_index);
    }
  };
  
  const quick_sort = (arr, low, high) => {
    if (low < high) {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          swap(arr, i, j);
        }
      }
      swap(arr, i + 1, high);
      const pivot_index = i + 1;
      quick_sort(arr, low, pivot_index - 1);
      quick_sort(arr, pivot_index + 1, high);
    }
  };
  
  const particionamento = (arr, low, high, pivot) => {
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  };
  