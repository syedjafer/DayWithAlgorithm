---
title: DWA1010 - Counting Sort Algorithm.
categories:
- Algorithm
excerpt: |
  Algorithm to sort based on occurence of the elements.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

<b>Counting sort</b> is a <b>sorting algorithm</b> that sorts the elements of an array by counting the <b>number of occurrences</b> of each <b>unique element</b> in the array. Counting sort is a <b>stable sorting technique.</b>

### Explanation:

The count is stored in an temporary array and the sorting is done by mapping the count as an index of the temporary array. 

It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.

1. Consider the array, 
```
arr = [1, 4, 5, 4, 9, 10]
```

2. Now we will generate a temporary array with length of 256 (ASCII Length) or to the length of max element of the original array. We will create an temporary array with the length of the max value of the original array + 1. 
```
max(arr) => 10
temp_arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

3. Now we will iterate through the values of the original array. By iterating we can increase the count in the temporaray array corresponding to the value. 

(i.e) temp_arr[arr_val] += 1

arr[0] is 1; so what we will be doing is, increasing the temp_arr[1] by 1. Similarly, arr[1] is 4 so i will be incrementing the temp_arr[4] by 1. 
Also again another 4 is present in the original array. During that iteration it will be doing the same. Incrementing temp_arr[4] by 1.

4.Now we will be iterating through the temp_arr from index 1. So we will be adding the current value with the previous value. 

```
temp_arr[1] = temp_arr[1] + temp_arr[0]
temp_arr[cur_value] = temp_arr[cur_value] + temp_arr[previous_val]

resultant array would be, 
temp_arr = [0, 1, 1, 1, 3, 4, 4, 4, 4, 5, 6]
```

5.Then we can create the output array of length of the original array. 

```
output = len(arr)
```

By iterating through the original array ( cur_element ), check the value of the temp_array[cur_element].  
The index of the cur_element in the output array  = temp_array[cur_element] - 1

```
for (itr = 0; itr< len(arr); itr++){
	cur_element = arr[itr];
	index = temp_arr[cur_element] - 1;
	output[index] = cur_element;
	temp_arr[cur_element] = temp_arr[cur_element] - 1;
}

resultant output array will be, 
[1, 4, 4, 5, 9, 10]

```

### Implementation:

```python
def counting_sort(arr): 
	max_element = max(arr)
    output = [0 for i in range(len(arr))] 
    temp_array = [0 for i in range(max_element)] 
  	for item in arr:
  		temp_array[item] += 1

  	for itr, item in enumerate(temp_array):
  		if(itr > 0):
	  		temp_array[itr] = temp_array[itr] + temp_array[itr-1]
  
    for itr, item in enumerate(arr):
    	index = temp_array[item] - 1
    	output[index] = item
    	temp_array[item] -= 1
    return output  

arr = [1, 4, 5, 4, 9, 10]
print( counting_sort(arr) )
```

### Output:

<img src="{{site.baseurl}}/assets/pics/counting_sort.png"><br>


### Time Complexity:
1. Best Case : O(n+k)
2. Average Case : O(n+k)
3. Worst Case : O(n+k)

### References:

1. Growingwithweb : <a href="https://www.growingwiththeweb.com/2014/05/counting-sort.html"> Link </a>
2. Programmiz : <a href="https://www.programiz.com/dsa/counting-sort">Link</a>


Follow us on Instagram to support us and receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>
