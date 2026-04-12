# SauceDemo Checkout Test Plan

## Overview
Test the SauceDemo checkout workflow for the standard user. This plan covers cart review, checkout information entry, order overview, order completion, cancellation flow, and input validation.

## Application
- URL: https://www.saucedemo.com
- Credentials: standard_user / secret_sauce

## Acceptance Criteria Covered
- AC1: Cart Review
- AC2: Checkout Information Entry
- AC3: Order Overview
- AC4: Order Completion
- AC5: Error Handling
- Business Rules: mandatory fields, login required, cart not empty, cancel flow, order confirmation clears cart.

## Test Scenarios

### Scenario 1: Cart review displays items and checkout navigation
- Test case title: Verify cart review displays selected item details and checkout navigation
- Preconditions:
  - User is logged in
  - A product is added to the cart
- Steps:
  1. Navigate to the Saucedemo homepage and log in as `standard_user`.
  2. Add the Sauce Labs Backpack to the cart.
  3. Click the shopping cart icon.
- Expected results:
  - Cart page shows the selected item name, description, and price.
  - The cart page displays a "Continue Shopping" button.
  - The cart page displays a "Checkout" button.

### Scenario 2: Checkout form fields are mandatory and show errors when empty
- Test case title: Verify checkout information page enforces mandatory field validation
- Preconditions:
  - User is on the cart page with at least one item
- Steps:
  1. Click "Checkout" from the cart page.
  2. Leave First Name, Last Name, and Postal Code blank.
  3. Click "Continue".
  4. Enter only First Name and click Continue.
  5. Enter Last Name and leave Postal Code blank.
  6. Enter Postal Code and click Continue.
- Expected results:
  - Empty submit shows the correct required field error message.
  - Filling only First Name shows the Last Name required error.
  - Filling First and Last Name shows the Postal Code required error.
  - After completing all fields, the user is allowed to continue.

### Scenario 3: Order overview shows summary, payment, and totals
- Test case title: Verify checkout overview shows order summary, payment information, and totals
- Preconditions:
  - User has completed checkout information with valid values
- Steps:
  1. Complete the checkout information with valid data.
  2. Click "Continue".
- Expected results:
  - The overview page shows the order item summary and price.
  - Payment and shipping information sections are displayed.
  - Subtotal, tax, and total amounts are visible.
  - "Cancel" and "Finish" buttons are visible.

### Scenario 4: Order completion displays confirmation and returns home
- Test case title: Verify order completion shows confirmation and Back Home returns to products
- Preconditions:
  - User is on the checkout overview page
- Steps:
  1. Click "Finish" on the checkout overview page.
  2. Click "Back Home" on the confirmation page.
- Expected results:
  - Order confirmation page displays a success message.
  - Back Home button returns the user to the products inventory page.
  - The shopping cart badge is cleared or reset.

### Scenario 5: Special character input and invalid data behavior
- Test case title: Verify checkout accepts special characters and still requires mandatory fields
- Preconditions:
  - User is on the checkout information page
- Steps:
  1. Enter special characters into First Name and Last Name.
  2. Enter a valid Postal Code.
  3. Click Continue.
- Expected results:
  - Checkout either shows validation errors for invalid characters or allows progress if the application accepts them.
  - If the app accepts special characters, the order overview should display as normal.

### Scenario 6: Cancel checkout returns to cart without losing items
- Test case title: Verify cancel during checkout returns to cart and preserves cart items
- Preconditions:
  - User has at least one item in the cart and is on the checkout information page
- Steps:
  1. Click "Cancel" from the checkout information page.
  2. Verify the user returns to the cart page.
- Expected results:
  - The cart page is displayed.
  - The previously added item remains in the cart.

## Test Data
- Username: standard_user
- Password: secret_sauce
- Product: Sauce Labs Backpack
- Checkout data:
  - First Name: Test
  - Last Name: User
  - Postal Code: 12345
  - Special data case: !@#$%^&* / <>? /

## Notes
- Use stable selectors for buttons and input fields.
- Verify actual site behavior for special characters and document any gaps.
