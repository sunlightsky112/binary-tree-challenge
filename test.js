const BinarySearchTree = require("./BinarySearchTree")

const bst = new BinarySearchTree()

// Test insertion
const valuesToInsert = [7, 3, 9, 1, 5, 8, 10];
valuesToInsert.forEach(num => bst.insert(num))

// Duplicate insertion (should be ignored)
bst.insert(5)
bst.insert(9)

// Test search
console.log(bst.search(5))  // true
console.log(bst.search(11)) // false

// Test inorder traversal
console.log(bst.inorder()) // [1, 3, 5, 7, 8, 9, 10]

// Test preorder traversal
console.log(bst.preorder()) // [7, 3, 1, 5, 9, 8, 10]

// Test postorder traversal
console.log(bst.postorder()) // [1, 5, 3, 8, 10, 9, 7]