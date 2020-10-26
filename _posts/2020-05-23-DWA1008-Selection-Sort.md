---
title: DWA1008 - Selection Sorting Algorithm.
categories:
- Algorithm
excerpt: |
  Selection sort is an in-place sorting algorithm.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

Selection sort is an <b>in-place sorting</b> algorithm.
Selection sort works well for <b>small files.</b> It is used for sorting the files with very large values and small keys. This is because selection is made based on keys and swaps are made only when required.

Selection Sort is <b>the slowest of all the sorting algorithms.</b>

In Selection Sort, for every iteration we will be finding the <b>maximum value</b>. That <b>max</b> value will be swapped with the <b>right most value</b> of the array ( in case of ascending ). For the same ascending we can do it in reverse manner, like, finding the smallest element in the array and swapping it with the left most value of the array.

### Algorithm:

```
Step 1 − Set MAX to location n-1 ( Array of length n )
Step 2 − Search the maximum element in the list
Step 3 − Swap with value at location MAX
Step 4 − Increment MAX to point to next element
Step 5 − Repeat until list is sorted
```

### Explanation:
1. Consider we are having an array,
	```
	arr = [ 1, 9, 10, 5, 19, 2 ]
	```

2. 1st Iteration,
	```
	arr = [ 1, 9, 10, 5, 19, 2]
	max_ptr = index(5)
	Now iterate the entire array, and find the maximum element in the array.
	Now swap the max_element with the value in max_ptr index.

	In our Example, 
	max_ptr = arr[5]  => 2
	max_value of arr[0,5] = 19 
	Swapping those 2 values.
	arr = [ 1, 9, 10, 5, 2, 19 ]
	max_ptr = index(5) - 1
	```

3. 2nd Iteration,
	```
	arr = [ 1, 9, 10, 5, 2, 19 ]
	max_ptr = index(4) => val 2
	max_value of arr[0,4] = 10
	Swapping those 2 values, 
	arr = [ 1, 9, 2, 5, 10, 19 ]
	max_ptr = index(4) - 1
	```

4. 3rd Iteration,
	```
	arr = [ 1, 9, 2, 5, 10, 19 ]
	max_ptr = index(3) => val 5
	max_value of arr[0,3] = 9
	Swapping those 2 values,
	arr = [ 1, 5, 2, 9, 10, 19 ]
	max_ptr = index(3) - 1
	```

5. 4th Iteration,
	```
	arr = [ 1, 5, 2, 9, 10, 19 ]
	max_ptr = index(2) => val 2
	max_value of arr[0,2] = 5
	Swapping those 2 values,
	arr = [1, 2, 5, 9, 10, 19]
	max_ptr = index(2) - 1 
	```

6. 5th Iteration,
	```
	arr = [1, 2, 5, 9, 10, 19]
	max_ptr = index(1) => val 2
	max_value of arr[0,1] = 2
	Since they are same positions we can neglect it.
	arr = [ 1, 2, 5, 9, 10, 19 ]
	Last element will be sorted by default.
	```

7. So the resultant array is, 
	```
	arr = [ 1, 2, 5, 9, 10, 19]
	```

### Characteristics of Selection Sort:
1. Selection Sort is the slowest of all the sorting algorithms.
2. It requires quadratic time even in the best case (i.e., when the array is already sorted).

### Implementation:

```python
def selection_sort(arr): 
        length = len(arr) 
        while(length>=1): 
            max_value = length - 1 
            for itr in range(length): 
                if( max_value < arr[itr]): 
                    max_value = arr[itr] 
                    max_index = itr 
            arr[length-1] , arr[max_index] = max_value, arr[th-1] 
            print(arr) 
            length -= 1 

```

### Output:
<img src="{{site.baseurl}}/assets/pics/selection_sort.png"><br>


### Analysis:

1. <u><b> Worst Case Analysis </b></u> : O(n2)
2. <u><b>Best Case Complexity </b></u> : O(n2)
3. <u><b> Average Case Complexity </b></u> : O(n2)


Follow us on Instagram to support us and receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>

