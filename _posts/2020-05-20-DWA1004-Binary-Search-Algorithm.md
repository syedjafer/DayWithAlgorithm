---
title: DWA1004 - Binary Search Algorithm With Maths
categories:
- Algorithm
excerpt: |
  Binary Search Algorithm , to search a key from the given array of Values.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

<b>Binary Search</b> delivers better performance than <b>Sequential Search</b> because it starts with a collection whose elements are <b>already sorted.</b> 

Binary Search <b>divides</b> the sorted collection in half until the sought-for item is found, or until it is determined that the item does not exist in the collection.

It works better than <b> Linear Search </b>.

#### Preconditions:
> 1. Array needs to be in Sorted Order.

#### Input:
The Input will be an array A which is totally in ordered form, which means in given two index positions <b>i</b>, <b>j</b> where <b>A[i] &lt; A[j] </b> ( Since the list is sorted ) on <b>i</b> &lt; <b>j</b>.

#### Output:
The Output is either <b>true</b> or <b>false</b>.

There are several data structures available to implement. But the better one is <b> Binary Search Tree </b>.

#### Implementation:
We basically ignore half of the elements just after one comparison.

1. Compare x with the middle element.
2. If x matches with middle element, we return the mid index.
3. Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
4. Else (x is smaller) recur for the left half.


Binary Search adds a small amount of complexity for large performance gains. The complexity can increase when the collection is not stored in a simple in-memory data structure, such as an array. 


#### Implementation:
```python
def binary_search(A, key): 
        length = len(A) 
         low = 0 
         high = length - 1 
         while ( low <= high ): 
             mid = ( low+high )//2 
             if ( key < A[mid]): 
                 high = mid - 1 
             elif ( key > A[mid]): 
                 low = mid + 1 
             else: 
                 return (True,mid) 
         return (False,-1) 
          
```
If the value is present in the given array it will return True and the index of the element. 

If the value is not present in the given array it will return False and -1 representing not found.

#### Screenshots:


<img src="{{site.baseurl}}/assets/pics/binary_search.png"><br>


<img src="{{site.baseurl}}/assets/pics/binary_search_res.png"><br>

A large collection might need to be kept in secondary storage,
such as a file on a disk. In such a case, the i th element is accessed by its offset location within the file. Using secondary storage, the time required to search for an element is dominated by the costs to access the storage; other solutions related to Binary Search may be appropriate.

#### Time Complexity : 
Best Case : O(1) <br>
Average, Worst Case : O(log n)



Follow us on Instagram to receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>
