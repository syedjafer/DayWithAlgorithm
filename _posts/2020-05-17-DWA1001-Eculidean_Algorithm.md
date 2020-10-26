---
title: DWA1001 - Euclidean Algorithm With Maths
categories:
- Algorithm
excerpt: |
  Euclidean Algorithm to calculate GCD efficiently.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

GCD of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common factors.

How do you find the greatest common divisor (gcd) of two integers <b>a, b</b> ?

We denote the greatest common divisor of <b>a</b> and <b>b</b> by <b>gcd(a, b)</b>, or sometimes even just <b>(a, b)</b> . If <b>(a, b) = 1</b> we say a and b are coprime.

The most common answer is to list all the divisors a and b , and look for the greatest one they have in common. As shown in the below image, 


<img src="{{site.baseurl}}/assets/pics/gcd.png"><br>

By subtracting the smaller number from the bigger (i.e) Reducing the larger number won't affect the GCD. <br>

### Proof:
<br>
Consider, GCD of two numbers a = 25, b = 5 . So if we are subtracting the larger number by the smaller one , we get, <br>

<b> 25 - 5 = 20 </b>
Still the GCD of 20,5 is 5 . 
<br>
So if we keep subtracting repeatedly the larger of two, we end up with GCD. Now instead of subtraction, if we divide smaller number, the algorithm stops when we find remainder 0.


Hence we can find gcd(a, b) by doing something that most people learn in primary school: division and remainder. We give an example and leave the proof of the general case to the reader. <br>

Suppose we wish to compute <b>gcd(27, 33)</b> First, we divide the bigger one by the smaller one:

<b style="text-align: center;"> 33 = 1 x 27 + 6 </b> <br>

Thus <b> gcd(33, 27) = gcd(27,6).</b> Repeating this trick:<br>

<b style="text-align: center;"> 27 = 4 x 6 + 3 </b> 

and we see <b> gcd(27,6) = gcd(6, 3)</b>.

Finally,

<b style="text-align: center;"> 6 = 2 x 3 + 0 </b> 

So since 6 is a perfect multiple of 3, gcd(6,3) = 3 , and we have found that<br>  <b> gcd(33,27) = 3</b>


#### Time Complexity: O(Log min(a,b))
<br>

#### Code :
```python
def gcd(a, b):
	if (b == 0):
		return a
	else:
		return gcd(b, a%b)
```

<br>

Follow us on Instagram to receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>