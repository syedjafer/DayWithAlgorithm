---
title: DWA1003 - Sieve Of Eratosthenes Algorithm With Maths
categories:
- Algorithm
excerpt: |
  Sieve of Eratosthenes Algorithm to find all the primes smaller than n.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

<b>Sieve of Eratosthenes</b> is a simple and ancient algorithm used to find the prime numbers up to any given limit. It is one of the most efficient ways to find <b>small prime numbers</b>.

#### Keywords:

1. <u>Prime :</u> A Prime number is a natural number greater than 1 , which we can represent it in a product form by only two ways. (i.e) For 3 => 3 * 1 , 1 * 3. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

2. <u> CoPrime:</u> All the other numbers other than prime is a coprime.


#### Working:

The algorithm is very simple: at the beginning we write down all numbers between 2 and n. We mark all proper multiples of 2 (since 2 is the smallest prime number) as composite.<br>
So a proper multiple of a number x, is a number greater than x and divisible by x.<br>
So we will be finding the next number which is not marked as composite, in our case it is 3. So we will be marking 3 as prime and all the multiples of 3 as co-primes. 

<img src="{{site.baseurl}}/assets/pics/sieve_eratosthenes.png"><br>


<br>
The Idea behind it is : 
A number is prime, if none of the smaller prime numbers divides it. Since we iterate over the prime numbers in order, we already marked all numbers, who are divisible by at least one of the prime numbers, as divisible. Hence if we reach a cell and it is not marked, then it isn't divisible by any smaller prime number and therefore has to be prime.


<b> Implementation </b>:

```python
def sieve_eratosthenes(n):
    all_numbers = [ True for itr in range(n+1) ]
    start = 2
    result = []
    # Start from 2 till n+1.
    for itr in range(start, n+1):
    	if( all_numbers[itr] == True ):
    		# for range( from, to, number of steps. Like i+=2 in other lang. )
    		result.append( itr )
    		for ctr in range(itr*itr, n+1, itr):
    			all_numbers[ctr] = False
    return result
print(sieve_eratosthenes(100))
```


<img src="{{site.baseurl}}/assets/pics/sieve_eratosthenes_py.png"><br>



Follow us on Instagram to receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>

