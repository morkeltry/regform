### A simple registration form

This exercise was to create a form in React, validate its fields and only if validated, POST the form information to a remote URL.

I built from the start relying on default HTML form behaviour, which was both a blessing and a curse.
The fact that validation can be abstracted away from HTML, whil leaving the POST behaviour intact was useful.
Thankfully, the test did not require me to handle the response of the POST request. I had prepared a modal to acknowledge the response of a successful request, but this would require abstracting the HTTP POST request away from HTML default behaviour, which is fairly simply done, but requires being in possession of the information to POST.
I had designed the React state from that start only to keep validation errors, not the actual form contents. In making an HTTP request separate from HTML default POST behaviour, I would need to access this infomration from state.
Due to iterating upwards from default form behaviour, I had expected to grab the form information during the chain of events that flows from Submit, so I didn't leave time to rewrite the state as I would need to.
The differing auto-validation across browsers was also ana nnoyance of HTML form behaviour - Chrome seems to have bug where the `noValidate` attribute fails to override `required`, so that ugly tooltips can only be removed by removing the `required` attribute - making iterative improvement and regression more nit-picky;

In doing the form validation itself, I chose to validate multiple times, at `onChange` and `onSubmit` so that the error display could be wiped out by user action, but so that validation could not be circumvented. Using `message` as the determinant of whether to display an error message, while keeping, but not necessarily displaying, each field's error message, allows for the error display to be reused in different ways, eg to show multiple form errors at once, or to display non-form errors, such as in the incomplete request/ response functionality.
