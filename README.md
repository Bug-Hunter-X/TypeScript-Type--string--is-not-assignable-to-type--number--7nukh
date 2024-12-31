# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This error arises from type mismatches when working with arrays or variables.

## The Bug
The `bug.ts` file contains a function `combine` that aims to merge two number arrays. However, one of the input arrays (`arr2`) contains a string element, causing a type error.

## The Solution
The `bugSolution.ts` file shows how to resolve this issue by ensuring type consistency.  The solution uses type guards or explicitly type-casting to avoid the type mismatch.