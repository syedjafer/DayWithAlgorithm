---
title: Reversing a Singly Linked List
categories:
- Data Structures
excerpt: |
  Reversing a Linked Lists
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

```python
# Node Class:
#   --parameter 
#  data - Value to be stored in the Node
#  next - Link to the next node ( address of the next node )  
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Singly Linked List
class SLinkedList:
    def __init__(self):
        # Initializing a Head Node with value as "Head" for easy tracking.
        self.head = Node("Head")
    
    def push(self, Node):
        # Inserting a Node.
        temp = self.head # setting the head node to temp 
        while temp.next != None: # Traversing to find the last node
            temp = temp.next
        temp.next = Node # setting the value of the node
        Node.next = None
    
    def print_list(self):
        # Objective is to traverse the node. 
        # Traversing the node from the head node till the None one.
        traverse = self.head
        while traverse.next != None:
            print( traverse.data , "-> " , end="") # Fancy Printing of the node list
            traverse = traverse.next
        print(traverse.data) # Printing the last node
    
    def reverse(self):
        # Objective is to reverse the entire list.
        # First we will think of the procedures for a single node. 
        # Head -> Node_1 -> ....
        # For Node_1 to be reversed, we need to set the prev node.
        # and to save the next node.
        # Initialize prev to None
        # set Node_1 to next -> prev
        # then we will iterate to the next node and do the same. 
        # At last, attach the head node to the last node. 
        prev = None
        temp = self.head.next
        while temp.next != None:
            next_node = temp.next
            curr_node = temp
            curr_node.next = prev
            prev = curr_node
            temp = next_node
        temp.next = prev
        self.head.next = temp         

lst = SLinkedList()
lst.push( Node(8) )
lst.push( Node(7) )
lst.push( Node(2) )
lst.push( Node(None) )
lst.push( Node(9) )
lst.print_list()
lst.reverse()
lst.print_list()

```