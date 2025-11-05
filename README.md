# Instructions 

Follow these steps to clone, run, and test the implementation:

### 1. Clone the repository

```bash
git clone https://github.com/sunlightsky112/binary-tree-challenge.git
cd binary-tree-challenge
```

### 2. Switch to the challenge branch

```bash
git checkout technical-challenge
```

### 3. Install Node.js (if not already installed)
Current node version: v22.19.0

Make sure you have Node.js installed. You can check with:
```bash
node -v
```

If not installed, download if from [nodejs.org](https://nodejs.org/).

### 4. Run the test file

```bash
node test.js
```

You should see console output demonstrating the list operations and their results like this.

```bash
Inserted values: [
  7, 3,  9, 1,
  5, 8, 10
]
Test search:
true
false
Test inorder traversal
[
  1, 3,  5, 7,
  8, 9, 10
]
Test preorder traversal
[
  7, 3,  1, 5,
  9, 8, 10
]
Test postorder traversal
[
   1, 5, 3, 8,
  10, 9, 7
]

```