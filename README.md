Test task for the node.js role

An Emirati company is looking for the best place to store its oil reserves. You are a geologist who helps select the storage region.
Look at the examples below, which show how you can select a region and in what ways.

Cases with results:

'o' - output: amount of oil that can be stored in the reserves formed between the ground levels
'i' - input: different levels of the ground

Case 1:
```sh
| | | | | | |i| | | | |
| | |i| | | |i|i| |i| |
|i| |i|i| |i|i|i|i|i|i|
```


answer - 6:
```sh
| | | | | | |i| | | | |
| | |i|o|o|o|i|i|o|i| |
|i|o|i|i|o|i|i|i|i|i|i|
```

Case 2:
```sh
| | | | |i|
|i| | | |i|
|i| |i| |i|
|i| |i| |i|
```

answer - 7:
```sh
| | | | |i|
|i|o|o|o|i|
|i|o|i|o|i|
|i|o|i|o|i|
```

Case 3:
```sh
|i| | |i|
|i| | |i|
```

answer - 4:
```sh
|i|o|o|i|
|i|o|o|i|
```

function estimate(array $levels) {
// Your code here
}

assert(estimate([33, 33, 5, 7]) == 2)
// TODO: Make sure to test on all test cases