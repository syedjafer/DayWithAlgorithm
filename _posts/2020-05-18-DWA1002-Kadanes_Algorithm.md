---
title: DWA1002 - Kadane's Algorithm With Maths
categories:
- Algorithm
excerpt: |
  Kadanes Algorithm to calculate maximum sum of continous subarray in an array.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

Consider a Problem, to calculate the <b>maximum sum of continous sub array</b> from the given array. There are two ways of approaching it. <br>

1. <u>Bruteforce Method:</u>
	1.	Example Consider the following array: 
	[-1, -3, 4, 5, -6].
	2. By Bruteforcing we can see that the sum of elements is 9.
	(i.e) <b>the maixmum sum of largest continous sub array</b> is 9.
	3. Time Complexity : <b> O(n^2)</b>
	4. Before going to the kadane algorithm we will see how that is been implemented in brute force. 
	5. So at the first index, the max value is arr[0]. (i.e) -1.
	> For the first index it is -1
	6. During the Second index, 
	> For the second index it could be
	> max (<br>
	> [-1 -3],<br>
	> [-3]<br>
	> )<br>
	> Hence max = -1; ( not greater than prev. max value )
	7. During the third index it could be, 
	> max (
	> [-1 -3 +4]<br>
	> [-3 +4],<br>
	> [4]<br>
	> )<br>
	> Hence max = 4; ( not greater than prev. max value )
	8. During the fourth index it could be,
	> max (
	> [-1 -3 +4 +5]<br>
	> [-3 +4 +5],<br>
	> [4 + 5]<br>
	> [5]<br>
	> )<br>
	> Hence max = 9; ( not greater than prev. max value )
	9. During the fifth index it could be, 
	> max (
	> [-1 -3 +4 +5 -6]<br>
	> [-3 +4 +5 -6],<br>
	> [4 + 5 -6]<br>
	> [5 -6]<br>
	> [-6]<br>
	> )<br>
	> Hence max = 9; ( current max value is 3 which is lesser than previous max value )

	Hence, the worst case in brute force approach is <b>O(n^2)</b>.
	By using <b>kadane’s algorithm</b>, we can reduce it to <b>O(n)</b> time.

	<b>Python Implementation:</b>
	
	```python
		arr = [-1, -3, 4, 5, -6]
		maxx = arr[0] 
		for itr in range(len(arr)-1): 
		     temp = 0 
		     for ctr in range(itr+1): 
		         temp += arr[itr+1-ctr] 
		         if( maxx < temp ): 
		             maxx = temp 
		print(maxx)
	```

	<img src="{{site.baseurl}}/assets/pics/kadane_brute_force.png"><br>

2. <u>Kadane's Algorithm :</u>
	1. The loc_max is either the element at the current index or the current element combined with previous loc_max.
	2. We continue to calculate the above for all the elements in the array. After that we will pick the maximum from the loc_max array. 
	3. The idea is to maintain maximum (positive sum) sub-array “ending” at each index of the given array. This subarray is either empty (in which case its sum is zero) or consists of one more element than the maximum subarray ending at the previous index.
	4. We can consider the same array , 
	arr = [-1, -3, +4, +5, -6]
	5. Initially,
	> loc_max = arr[0]<br>
	> global_max = arr[0]<br>
	6. During second iteration, 
	> Pass 1:<br>
	> loc_max = max( arr[1], (-1 + arr[1]) ) = max[-1, -4] = -1<br>
	> global_max = max( -1, -1 ) = -1<br>
	7. During third iteration, 
	> Pass 2: <br>
	> loc_max = max[ arr[2] , (-1 + arr[2]) ] = max ( 4, 1 ) = 4<br>
	> global_max = max(4, -1) = 4<br>
	8. During fourth iteration,
	> Pass 3:<br>
	> loc_max = max[ arr[3], (4 + 5) ] = max (5, 9) = 9<br>
	> global_max = max(9, 4) = 9<br>
	9. During fifth iteration,
	> Pass 4: <br>
	> loc_max = max[ arr[4], (-6 + 5) ] = max( 5, -1 ) = 5<br>
	> global_max = max( 5, 9 ) = 9<br>
	10. Hence the maximum sum of continous sub array of the given array is 9. 
	11. Time Complexity : <b> O(n) </b>
	12. Space Complexity : <b> O(1) </b>
	13. Python Implementation : 

	```python
	def max_of(a, b):
		if( a > b):
			return a
		else: 
			return b


	def kadane_max(arr):
		length = len(arr)
		loc_max = arr[0]
		global_max = arr[0]
		for itr in range(length - 1):
			loc_max = max_of( arr[itr+1], loc_max+arr[itr+1] ) 
			global_max = max_of(loc_max , global_max)
		return global_max

	print( kadane_max([-1,-3,4,5-6]) ) 
	```


<img src="{{site.baseurl}}/assets/pics/kadane_algo.png"><br>


Follow us on Instagram to receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>
