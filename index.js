/*
What is recursion?
  - Recursion is a process of calling itself. A function that calls itself is called a recursive function.

        function recurse() {
            // function code
            recurse();
            // function code
        }

        recurse();
*/
//TASK 1
/*
We should inverted tree if number less than another to right.
{value: 3, left:{...},right:{}}
*/
//Solution
function invertTree (){
    const left= node.left;
    const right = node.right;
    node.right = left;
    node.left =right;
    invertTree(left)
    invertTree(right)
}
invertTree()

//Task 2 

/*
We have an array [8,1,9,4,7,3,6] 

*/




