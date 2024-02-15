[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Answer
I believe that the runtime complexity of my algorithm is $\Theta (n! + n^2)$. I found this by first looking at the generation of all of the permutations which gets us $n!$. I found $n^2$ by looking at the while loop that runs at most $n$ times with a function the check if its sorted in it which runs $n$ times so we do $n$ work for every $n$ items so $n*n$ gets us $n^2$. This gets us to our total of $\Theta (n! + n^2)$.

The best case input would be something where the first permutation is the the sorted list so we would still generate all of the permutation to get us $n!$ but then "checker" loops would just loop once to get us $n$.

The worst input would be something where we generate all of the permutations and the sorted list is the last possible generated permutation.

If you randomly generated the permutations you would have a $1/n!$ chance of generating the sorted list and you still need to make all of the lists so we also have $n$ and I think you would multiply them together so the time complexity would be worse.
