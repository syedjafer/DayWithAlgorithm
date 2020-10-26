---
title: DWA1018 - Abstract Factory Design Pattern.
categories:
- DesignPatterns
excerpt: |
  A Design Pattern to create object without exposing the creation logic to the client.
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

The <b>Abstract Factory pattern</b> is one of the <b>Creational design patterns</b>. Abstract Factory pattern is almost similar to Factory Pattern is considered as another layer of abstraction over factory pattern. Its a Super Factory Which Creates Other Factories.

Abstract Factory pattern uses an interface is responsible for creating a factory of related objects without explicitly specifying their classes.

### Example:

1.  <b>Furniture Shop</b><br> 
Consider a Furniture Mart which is a Abstract Class. It has two Suppliers Supplier_1 and 
Supplier_2 . Both the Supplier implements the Furniture Mart . In turn both of the Suppliers return class objects of another class Which Implements an another FactoryPattern. 
So the Client will be having the abstraction layer of the chair or the table produced by the suppliers.

2. <b> Your SPM in Office </b><br>
Consider your Senior Project Manager is a Factory Class which creates other Factories (Manager) and you are an object. If the client asks for a python developer to your SPM, he then will be asking Project Manager , then he will be searching for the candidate (Object) that is you ; and then he will be returning it to the client. 



#### Implementation : 

1. <b> Method 1:</b>

```python

from abc import ABCMeta, abstractmethod


class FurnitureMart(metaclass=ABCMeta):
    @abstractmethod
    def create_chair(self):
        pass

    @abstractmethod
    def create_table(self):
        pass


class Supplier_1(FurnitureMart):
    def create_chair(self):
        return CreateChairType_1()

    def create_table(self):
        return CreateTableType_1()


class Supplier_2(FurnitureMart):
    def create_chair(self):
        return CreateChairType_2()

    def create_table(self):
        return CreateTableType_2()


class AbstractChair(metaclass=ABCMeta):
    @abstractmethod
    def size(self):
        pass

    @abstractmethod
    def material(self):
        pass


class AbstractTable(metaclass=ABCMeta):
    @abstractmethod
    def size(self):
        pass

    @abstractmethod
    def material(self):
        pass


class CreateChairType_1(AbstractChair):
    def size(self):
        return 100

    def material(self):
        return "Wood"


class CreateChairType_2(AbstractChair):
    def size(self):
        return 200

    def material(self):
        return "Wool"


class CreateTableType_1(AbstractTable):
    def size(self):
        return 123

    def material(self):
        return "Wooden Table"


class CreateTableType_2(AbstractTable):
    def size(self):
        return 456

    def material(self):
        return "Stone Table"


if __name__ == "__main__":
    print(Supplier_1(), Supplier_2())
    for factory in (Supplier_1(), Supplier_2()):
        chair = factory.create_chair()
        table = factory.create_table()
        print(f"Chair Size {chair.size()}, Material {chair.material()}")
        print(f"Table Size {table.size()}, Material {table.material()}")


```
