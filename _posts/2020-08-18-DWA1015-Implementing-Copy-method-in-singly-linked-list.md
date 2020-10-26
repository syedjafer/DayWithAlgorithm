---
title: Implementing Copy Method in Singly Linked List
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
        self.tail = self.head
    
    def push(self, Node):
        if ( self.head.next == None ):
            self.head.next = Node
            Node.next = None
            self.tail = Node
        else:
            self.tail.next = Node
            Node.next = None
            self.tail = Node
    
    def clear(self):
        self.head.next = None
        self.tail = self.head
    
    def copy(self):
        copy_list = SLinkedList()
        head_itr = self.head
        copy_list.head = Node( self.head.data )
        curr = copy_list.head
        while head_itr.next != None:
            head_itr = head_itr.next
            new_node = Node(head_itr.data)
            curr.next = new_node
            curr = new_node
        copy_list.tail = curr
        return copy_list

    def print_list(self):
        traverse = self.head
        while traverse.next != None:
            print( traverse.data , "-> " , end="")
            traverse = traverse.next
        print(traverse.data)

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
        self.tail = temp
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
lst.push(Node(78))

lst.print_list()
lst.reverse()
lst.print_list()

sec = lst.copy()
lst.push(Node(None))
sec.print_list()

sec.push(Node(65))
sec.print_list()
lst.print_list()

```