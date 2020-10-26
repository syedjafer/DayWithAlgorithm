---
title: DWA1005 - Singly linked List Data Structure and Implementation.
categories:
- Data Structures
excerpt: |
  Singly linked list design, types and its implementation. 
# feature_image: "https://picsum.photos/2560/600?image=733"
# image: "https://picsum.photos/2560/600?image=733"
---

#### Keywords : 
1. Node : Its descended from the latin “nodus” meaning “knot”, comes from graph theory in math. A graph is a generalized way to describe a bunch of things that have relationships. The things are called nodes, the relationships connecting the nodes are called edges. Consider node as a <b>data structure</b> to store the reference to the value or the actual value(object) and the references to <b>other nodes.</b>

2. Pointers : A pointer is a variable whose value is the address of another variable, i.e., direct address of the memory location.


A linked list is a linear data structure where each element is a separate object. Linked list elements are not stored at contiguous location; the elements are linked using pointers.

#### Singly Linked List:

It's a collection of <b>Nodes</b> that collectively form a linear sequence. Each node stores a reference to an object that is an element of the sequence, as well as reference to the next node of the list. 

<img src="{{site.baseurl}}/assets/pics/singly-linked-list.png"><br>

The list instance maintains a member named head that identifies
the first node of the list, and in some applications another member named tail that identifies the last node of the list. The None object is denoted as Ø. None object contains no reference to the value. 

The <b>first</b> and <b>last</b> node of a linked list are known as the <b>head</b> and <b>tail</b> of the list, respectively. By starting at the <b>head</b>, and moving from one node to another by following each node’s next reference, we can reach the <b>tail</b> of the list. We can identify the tail as the node having None as its next reference. This process is commonly known as <b>traversing</b> the linked list. Because the next reference of a node can be viewed as a link or pointer to another node, the <b>process of traversing</b> a list is also known as <b>link hopping or pointer hopping.</b>


A linked list’s representation in memory relies on the collaboration of many objects. Each node is represented as a unique object, with that instance storing a reference to its element and a reference to the next node (or None). 

Another object represents the linked list as a whole. Minimally, the linked list instance must keep a reference to the head of the list. Without an explicit reference to the head, there
would be no way to locate that node (or indirectly, any others). 

<img src="{{site.baseurl}}/assets/pics/singly-linked-list-2.png"><br>

There is not an absolute need to store a direct reference to the tail of the list, as it could otherwise be located by starting at the head and traversing the rest of the list. 

However, storing an explicit reference to the tail node is a common convenience to avoid such a traversal. In similar regard, it is common for the linked list instance to keep a count of the total number of nodes that comprise the list (commonly described as the size of the list), to avoid the need to traverse the list to count the nodes.

An important property of a linked list is that it does not have a predetermined fixed size; it uses space proportionally to its current number of elements.

#### Implementation:

<b><u>Simple Insertion and displaying.</u></b>

```cpp
#include <iostream>
using namespace std;
// Node Structure
struct Node {
   // Data value.
   int data; 
   // Reference to next node.
   struct Node *next; 
}; 
// Objects
struct Node* head = NULL;   

// Insert will happen at the start.
void insert(int new_data) { 
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   new_node->data = new_data; 
   new_node->next = head; 
   head = new_node; 
} 

void display() { 
   struct Node* ptr;
   ptr = head;
   while (ptr != NULL) { 
      cout<< ptr->data <<" "; 
      ptr = ptr->next; 
   } 
} 
int main() { 
   insert(3);
   insert(1);
   insert(7);
   insert(2);
   insert(9);
   cout<<"The linked list is: ";
   display(); 
   return 0; 
} 
```
### Output:
<img src="{{site.baseurl}}/assets/pics/singly_linked_list_ex1.png"><br>

<b><u>Insertion in a given location:</u></b>

Here you can specify the position to insert the data.


```cpp
void insert_in(int pos, int new_data){
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   struct Node* prev = (struct Node*) malloc(sizeof(struct Node));
   struct Node* cur = head;
   
   new_node->data = new_data; 
   new_node->next = NULL;
   for (int itr = 0;itr<pos;itr++){
      prev = cur;
      cur = cur->next;
   }
   new_node->next = cur;
   prev->next = new_node;

}

```

<b><u>Appending the value: </u></b>

```cpp
void append( int new_data) {
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   struct Node* last = head;
   new_node->data = new_data; 
   new_node->next = NULL;
   if( head -> next == NULL ){
      head -> next = new_node;
      return ;
   } 
   while( last->next != NULL ){
      last = last -> next;
   }
   last->next = new_node;
}
```
Appending will insert the value at the end.

<b><u>Entire Code:</u></b>

```cpp
#include <iostream>
using namespace std;
// Node Structure
struct Node {
   // Data value.
   int data; 
   // Reference to next node.
   struct Node *next; 
}; 
// Objects
struct Node* head = NULL;   

void insert(int new_data) { 
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   new_node->data = new_data; 
   new_node->next = head; 
   head = new_node; 
} 

void append( int new_data) {
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   struct Node* last = head;
   new_node->data = new_data; 
   new_node->next = NULL;
   if( head -> next == NULL ){
      head -> next = new_node;
      return ;
   } 
   while( last->next != NULL ){
      last = last -> next;
   }
   last->next = new_node;
}

void insert_in(int pos, int new_data){
   struct Node* new_node = (struct Node*) malloc(sizeof(struct Node)); 
   struct Node* prev = (struct Node*) malloc(sizeof(struct Node));
   struct Node* cur = head;
   
   new_node->data = new_data; 
   new_node->next = NULL;
   for (int itr = 0;itr<pos;itr++){
      prev = cur;
      cur = cur->next;
   }
   new_node->next = cur;
   prev->next = new_node;

}

void display() { 
   struct Node* ptr;
   ptr = head;
   while (ptr != NULL) { 
      cout<< ptr->data <<" "; 
      ptr = ptr->next; 
   } 
} 
int main() { 
   insert(3);
   insert(1);
   insert(7);
   insert(2);
   insert(9);
   append(10);
   insert_in(2,300);
   cout<<"The linked list is: ";
   display(); 
   return 0; 
} 
```

#### Output:

<img src="{{site.baseurl}}/assets/pics/singly_linked_list_ex2.png"><br>


#### References:
1. Node - <a href="https://www.quora.com/What-does-a-node-in-coding-mean"> What does a node in coding mean ?</a>
2. Tutorials Point - <a href="https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm"> Link </a>



