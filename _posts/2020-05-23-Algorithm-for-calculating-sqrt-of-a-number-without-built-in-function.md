---
title: DWA1007 - Square Root of a number without built-in function
categories:
- Algorithm
excerpt: |
  To Find the Square Root of a number without using built-in function.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

This Algorithm is a combination of **Newton's Method** and 

The square root of a positive number b can be computed with Newton's formula:
where x above starts with a "reasonable" guess. In fact, you can always start with b or some other value, say 1.

With b and a guess value x, a new guess value is computed with the above formula. This process continues until the new guess value and the current guess value are very close. In this case, either one can be considered as an approximation of the square root of b.

<img src="{{site.baseurl}}/assets/pics/division.png">


**Step 1 :** Get the input value ``` input_val ``` . Let 
```python
input_value = int(input())

```

**Step 2 :** Find the *Dividend* of the input number. (i.e) find the integer part of the sqrt.
```python
for itr in range(input_value/2):
    if ((itr*itr)<= input_value and  input_value < ((itr+1)*(itr+1)) ):
        dividend = itr
        break

```

**Step 3 :** Apply Newtons Method, 
```python
def repeat_this(dividend):
    val1 = ( input_value / dividend )
    val2 = ( dividend + val1 ) / 2
```

By repeating the third step, we will be getting more approximation of the value. 


> for eg:
> let the no. be 93
> the no. 93 is inbetween (9*9) and (10*10) . so all the no. inbetween 81 and 100 has the sqrt > to be starting with 9 and preceded by floating points. [here dividend is 9]
> let d=(a/dividend) (ie. d=93/9=10.3333333)
> z=(9+10.333333)/2=9.666666667
> x=93/9.66666667=9.62089655
> g=(9.62089655+9.666666667)/2    =    9.64378178


```python
input_value = int(input())
for itr in range(input_value//2):
    if ((itr*itr)<= input_value and  input_value < ((itr+1)*(itr+1)) ):
        dividend = itr
        break
def repeat_this(dividend):
    val1 = ( input_value / dividend )
    val2 = ( dividend + val1 ) / 2
    return val2
dividend = repeat_this(dividend)
dividend = repeat_this(dividend)
dividend = repeat_this(dividend)
print(dividend)

import math
print(math.sqrt(input_value))
```

Output:

(base) syedjafer@syedjafer:~/Documents/DWA/SQRT$ python main.py 
50
7.0710678118654755
7.0710678118654755
(base) syedjafer@syedjafer:~/Documents/DWA/SQRT$