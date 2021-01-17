---
title: DWA1012 - Sum of Elements in a Given Range.
categories:
- Coding
excerpt: |
  Mathematical Way to Compute SUM of numbers in a given range
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

Consider a Problem Statement to calculate sum of numbers between the given range(a, b).<br>

### Solution 1:
Find all the numbers within the given range and sum it all together.
```python
def find_sum(a, b):
    res = 0
    if( a < b ):
        for item in range(a, b+1):
            res += item
    else:
        for item in range(b, a+1):
            res += item
    return res
```

But this will be <b>O(n)</b>

### Solution 2:
Using the mathematical approach,

>   ### S = ((β−α+1)*(α+β))/2

```python
def find_sum(a, b):
    res = ((a - b + 1)*(a+b))/2
    return res
```

This is one of the best solution with <b>O(1)</b>
