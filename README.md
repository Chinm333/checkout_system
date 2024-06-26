# Checkout System

## Description

This project implements a checkout system for a computer store. The system supports flexible pricing rules and calculates the total price of scanned items based on current promotions and discounts.

## Features

- Scan items in any order
- Apply 3-for-2 bundle discount on specific products
- Apply bulk discounts on products when a certain quantity is bought
- Easily extendable pricing rules

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/chinm333/checkout_system
    cd checkout_system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Compile TypeScript files:
    ```bash
    npm run build
    ```

## Usage

1. Run the checkout system:
    ```bash
    node dist/main.js
    ```

2. Run tests:
    ```bash
    npm test