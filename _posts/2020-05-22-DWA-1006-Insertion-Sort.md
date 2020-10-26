---
title: DWA1006 - Insertion Sorting Algorithm.
categories:
- Algorithm
excerpt: |
  Insertion sort is the simple and efficient comparison sort. 
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

<b>Insertion sort</b> is a simple and efficient comparison sort. In this algorithm, each iteration <b>removes an element</b> from the input data and <b>inserts it into the correct position</b> in the list being sorted.

Insertion Sort repeatedly invokes an insert helper function to ensure A[0, i] is properly sorted; eventually, i reaches the rightmost element, sorting A entirely.

The choice of the element being removed from the input is random and this process is repeated until all input elements have gone through.

### Explanation:
1. Consider we are having an array,
	>	arr = [3,1,10,2,8]

2. We are iterating through each element and will be checking whether the current element is greater than elements in the left side of the curr element. If not, we will be swapping the elements.

3. <b>1st Iteration:</b>

	```
	Cur. Element = 3
	So on the first iteration, no elements are present to the left of 3.
	arr = [ 3, 1, 10, 2, 8 ]
	```

4. <b>2nd Iteration:</b>
	```
	Cur. Element = 1
	Now there is an element to the left of 1 ( 3 ). So we will be swapping 3 and 1.
	so the resultant array will be,
	arr = [ 1, 3, 10, 2, 8]
	```

5. <b>3rd Iteration:</b>
	```
	Cur. Element = 10
	Now, elements 1, 3 are to the left of 10. Since they are in order we need not to swap.
	arr = [1, 3, 10, 2, 8]
	```

6. <b>4th Iteration:</b>
	```
	Cur. Element = 2
	Now there are elements to the left of 2 which are greater than 2. 
	arr = [1, 3, 2, 10, 8]
	arr = [1, 2, 3, 10, 8]
	```

7. <b>5th Iteration:</b>
	```
	Cur. Element = 8
	Now there is an element 10 to the left of 8 , which is greater than 8.
	We will be swapping 8 and 10.
	arr = [1, 2, 3, 8, 10]
	```

8. So, now we will be having the sorted array.


### Characteristics of Insertion Sort:
1. Insertion Sort requires very little extra space to function; it only needs to reserve space for a single element.

2. The optimal performance occurs when the array is already sorted, and arrays sorted in reverse order produce the worst performance for Insertion Sort.

3. Insertion sort is used when the data is nearly sorted (due to its adaptiveness) or when the input size is small (due to its low overhead).

4. Insertion sort is almost linear for partially sorted input.

### Implementation:
```python
def insertion_sort(arr):
    for itr in range(1, len(arr)): 
        cur = arr[itr]  
        ctr = itr - 1
        while ctr >= 0 and cur < arr[ctr] : 
                arr[ctr + 1] = arr[ctr] 
                ctr -= 1
        arr[ctr + 1] = cur
    print (arr)

arr = [3,1,10,2,8]
insertion_sort(arr) 

```

### Output:

<img src="{{site.baseurl}}/assets/pics/insertion_sort.png"><br>

### Analysis:

1. <u><b> Worst Case Analysis </b></u> : O(n2)
2. <u><b>Best Case Complexity </b></u> : O(n)
3. <u><b> Average Case Complexity </b></u> : O(n2)


Follow us on Instagram to support us and receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>

