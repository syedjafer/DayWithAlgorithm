---
title: DWA1016 - Factory Design Pattern.
categories:
- DesignPatterns
excerpt: |
  A Design Pattern to create object without exposing the creation logic to the client.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

The <b>Factory pattern</b> is one of the <b>Creational design patterns</b>.The Factory pattern is a design pattern that creates an object without exposing the creation logic to the client. It maintains the high readbility of the code and we can able to refactor it easily. 

Factory design pattern is a <b>creational design pattern</b> .
Factory Method should be used in every situation where an application (client) depends on an interface (product) to perform a task and there are multiple concrete implementations of that interface.

### Example:

1.  <b>Classic example: Client needs an OS</b><br> 
There are two ways of doing this. We can do it in conditional method using the if/else/for or using an another class (Factory class). Consider client is using 3 kinds of phone namely Samsung, Iphone, Nokia. We know that for samsung the os will be Android, for Iphone its IOS and for Nokia its is Windows. 
But Instead of exposing it directly we can create an another class to give the objects required. 

2. <b> Your Manager in Office </b><br>
Consider your manager is a Factory Class , and you are an object. If the client asks for a python developer to your manager, he then will be searching for the candidate (Object) that is you ; and then he will be returning it to the client. 


### When to use this Pattern ?

Mostly in all situation we can implement this Design Pattern. The reason is simple , Increases readability, Increases Refactoring of the code, also not exposing to the client. 

#### Implementation : 

1. <b> Method 1:</b>

```python

class Android:
    pass

class IOS:
    pass

class Windows:
    pass

class OsFactoryClass:
    def get_os(self, mobile):
        if( mobile == "samsumng" ):
            return Android()
        elif( mobile == "iphone" ):
            return IOS()
        elif( mobile == "nokia" ):
            return Windows()

os_obj = OsFactoryClass()
os = os_obj.get_os("samsung") # Android object will be returned.


```
