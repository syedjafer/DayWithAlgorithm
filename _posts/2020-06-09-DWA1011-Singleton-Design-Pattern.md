---
title: DWA1011 - Singleton Design Pattern.
categories:
- DesignPatterns
excerpt: |
  A Design Pattern to maintain only one object at any point of time.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

The <b>singleton pattern</b> is one of the <b>simplest design patterns</b>.The singleton pattern is a design pattern that restricts the instantiation of a class to one object. 

Singleton is a <b>creational design pattern</b> that lets you ensure that a class has <b>only one</b> instance, while providing a global access point to this instance. 

### Example:

1.  <b>Simple deck of cards :</b><br> 
When most of us sit down to play a few games of poker with our buddies, we often play using a single entity known as the deck. This typically consists of 52 cards in total, made up of thirteen ranks of four suits each. When a hand is dealt around the table, all cards are obtained from that single shuffled instance of the deck. Once the hand is over and you’ve (hopefully) taken your friends for all they’re worth, all 52 cards are gathered up and shuffled back into that same single instance of the deck, then a new hand is dealt from it. Repeat ad nauseam until all money is lost and/or drunkenness overtakes you.

2. <b> Government :</b><br>
Government is a single entity. We can refer as Currently its the "Governement of X ". Value of X ( Ministers ) may change but still its the same Government.

### When not to use this Pattern ?

Whenever your class is dealing with some specific identifier to the objects, at that time we should not use this pattern. 
Example, 
Consider the <b>Student</b> class, where there will be a <b>unique</b> roll_num for a individual students. During this scenario we should not use the singleton Pattern.

### When to use this Pattern ?

Whenever we are creating a class to share the common values , at that scenario we can use this kind of pattern.


#### Implementation : 

1. <b> Method 1:</b>

```python
class SingleTon: 
  # Creating a static private variable
  _instance = None 
  # __new__ is called inside __init__ for object instantiation. 
  def __new__(self): 
    if( not self._instance ): 
      self._instance = super(SingleTon, self).__new__(self) 
      self.y = 10 
    return self._instance 

obj1 = SingleTon()
print(obj1.y)
obj1.y = 30
obj2 = SingleTon()
print(obj2.y)

```

### Output:
<img src="{{site.baseurl}}/assets/pics/sdp_method_1.png"><br>

2. <b>Method 2:</b>

```python
def singleton(Class): 
  instances = {} 
  def getInstances(*args, **kwargs): 
    if Class not in instances: 
      instances[Class] = Class(*args, **kwargs) 
    return instances[Class] 
  return getInstances 

@singleton
class Test:
  def __init__(self):
    self.val = 10

obj1 = Test()
print(obj1.y)
obj1.y = 30
obj2 = Test()
print(obj2.y)



```

### Output:
<img src="{{site.baseurl}}/assets/pics/sdp_method_2.png"><br>

### References:

1. __ new __ dunder methos : <a href="https://howto.lintel.in/python-__new__-magic-method-explained/"> Link </a>
2. Regractoring Guru : <a href="https://refactoring.guru/design-patterns/singleton">Link</a>


Follow us on Instagram to support us and receive more content : <a href="https://instagram.com/day_with_algorithm"> Instagram </a>
