Test Plan for Login Functionality
Objective:
Ensure the login functionality works as expected with various input scenarios.

Test Scenarios:

Successful Login with Valid Credentials

Verify the user can log in with valid email and password.
Ensure the user is redirected to the "My Rides" page.
Check for a welcome message on the "My Rides" page.
Failed Login with Invalid Credentials

Verify the user cannot log in with an invalid email and password.
Ensure an error message "Invalid email or password" is displayed.
Verify the user remains on the "Log in or sign up" page.
Login with Empty Email Field

Verify the user cannot log in with an empty email field.
Ensure an error message "Email is required" is displayed.
Verify the user remains on the "Log in or sign up" page.
Login with Empty Password Field

Verify the user cannot log in with an empty password field.
Ensure an error message "Password is required" is displayed.
Verify the user remains on the "Log in or sign up" page.
Login with Empty Email and Password Fields

Verify the user cannot log in with both fields empty.
Ensure error messages "Email is required" and "Password is required" are displayed.
Verify the user remains on the "Log in or sign up" page.
Successful Login with "Remember Me" Selected

Verify the user can log in with the "Remember Me" checkbox selected.
Ensure the user is redirected to the "My Rides" page.
Check for a welcome message.
Verify the user remains logged in after closing and reopening the browser.
Password Visibility Toggle

Verify the password can be toggled between visible and hidden.
Ensure the password is visible when "Show Password" is clicked.
Ensure the password is hidden when "Hide Password" is clicked.
Login with Facebook

Verify the user can log in using Facebook.
Ensure the user is redirected to the Facebook login page.
Verify the user is redirected to the "My Rides" page after successful Facebook login.
Check for a welcome message.
Login with Google

Verify the user can log in using Google.
Ensure the user is redirected to the Google login page.
Verify the user is redirected to the "My Rides" page after successful Google login.
Check for a welcome message.
Login with Apple

Verify the user can log in using Apple.
Ensure the user is redirected to the Apple login page.
Verify the user is redirected to the "My Rides" page after successful Apple login.
Check for a welcome message.
Successful Continue with Email

Verify the user can continue with email.
Ensure the user is redirected to the "Log in or sign up" page.
Verify the user is prompted to enter a password or sign up if not already registered.
Continue with Email - Invalid Email Format

Verify the user cannot continue with an invalid email format.
Ensure an error message "Please enter a valid email address" is displayed.
Verify the user remains on the "Log in or sign up" page.
Continue with Email - Empty Email Field

Verify the user cannot continue with an empty email field.
Ensure an error message "Email is required" is displayed.
Verify the user remains on the "Log in or sign up" page.
Navigate Back from Continue with Email

Verify the user can navigate back to the login popup.
Ensure the user is redirected back to the login popup.



Test Plan for API Testing of CreateBooking Endpoint
Objective:
Ensure the "CreateBooking" API endpoint functions correctly with various input scenarios.

Test Scenarios:

Functional Testing:

Verify a booking can be successfully created with valid input data including all required fields.
Test the endpoint's response when optional fields are omitted from the request.
Validate the behavior of the endpoint with invalid input such as incorrect data types, missing required fields, or invalid date formats. Ensure appropriate error messages are returned.
Data Validation:

Ensure the data returned upon creating a booking matches the input data.
Validate the structure of the JSON response to confirm it contains all expected fields with correct data types.
Steps:

Successful Booking Creation:

Send a POST request to the CreateBooking endpoint with valid input data.
Verify the response status is 200 OK.
Validate that the response contains all expected fields with correct data types.
Ensure the response data matches the input data.
Optional Fields Omitted:

Send a POST request to the CreateBooking endpoint without optional fields.
Verify the response status is 200 OK.
Validate that the response contains all expected fields with correct data types.
Invalid Input Data:

Send POST requests to the CreateBooking endpoint with various invalid inputs (incorrect data types, missing required fields, invalid date formats).
Verify the response status is appropriate (e.g., 400 Bad Request).
Ensure appropriate error messages are returned.
Test Plan for Automated Search and Sort Functionality on OpenCart
Objective:
Automate the process of searching for "iPod" on the OpenCart home page and sorting the results in descending order.

Test Scenarios:

Search for "iPod":

Verify the user can search for "iPod" on the OpenCart home page.
Ensure the search results are displayed.
Sort Results in Descending Order:

Verify the user can sort the search results by price in descending order.
Ensure the results are correctly sorted.
Steps:

Search for "iPod":

Navigate to the OpenCart home page.
Enter "iPod" in the search bar and click the search button.
Verify the search results are displayed and contain "iPod".
Sort Results in Descending Order:

Locate the sorting dropdown in the search results page.
Select the option to sort by price in descending order.
Verify the results are sorted correctly by price in descending order.