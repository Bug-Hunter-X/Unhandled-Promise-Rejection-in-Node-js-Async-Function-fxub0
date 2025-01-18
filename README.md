# Unhandled Promise Rejection in Node.js Async Function

This repository demonstrates a common error in Node.js applications involving unhandled promise rejections within asynchronous functions.  The issue arises when an async operation throws an error, but the error is not properly handled, leading to application instability or crashes.

## The Problem
The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation.  This operation randomly succeeds or fails. When it fails, it should ideally send a 500 error, but if not handled correctly, the application might crash silently, and it is not always caught in try-catch blocks.

## The Solution
The `bugSolution.js` file demonstrates the solution. We use `.catch()` to handle potential errors explicitly, ensuring the server doesn't crash.  Proper error handling is crucial for building robust and reliable Node.js applications.