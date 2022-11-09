

// A sample array of forbidden words, you modify it. Note that it can also be empty.
const forbiddenWords = ["politics", "religion", "cheap", "expensive", "money", "offer"]
// the errors messages will be stored here and later displayed to the user
let errorMessages = []
// an array of objects {name, reference, description, price}
let productsList = []

/** you need to implement this function - do not change the name of the function
 * add a product to the productsList and update the HTML displaying the list of products using displayProducts()
 * @param product an object, the new product to add (see the code line 61)
 */
function addProduct(product) {
}

/** you need to implement this function - do not change the name of the function
 * sort the productsList amd update the HTML displaying the list of products using displayProducts()
 */
function sortProductsByReference() {
}


/** you need to implement this function - do not change the name of the function
 * @param formInput an object containing the values of the form fields
 * @returns {boolean} true if the form is valid, false otherwise
 */
function validateProduct(formInput) {
    return false;
}

/** you need to implement this function - do not change the name of the function
 * @param listOfErrors an array of strings containing the error messages
 * @returns {string|string|*} the HTML code to display the errors
 */
function convertErrorsToHtml(listOfErrors) {
    return "";
}



// you may move but not modify the code below this line, except for renaming the functions to be implemented
// in case you need to.

/**
 * This function updates the HTML displaying the list of products.
 * @param html
 */
const displayProducts = (html) => { document.getElementById("productsTable").innerHTML = html; }

/**
 * upon loading the page, we bind handlers to the form and the button
 */
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("messageForm").addEventListener("submit", (event) => {
        event.preventDefault();
        errorMessages = [];
        // we build the new product object from the form input:
        let prod = {
            name: document.getElementById("productName").value.trim(),
            reference: document.getElementById("productRef").value.trim(),
            description: document.getElementById("productDescription").value.trim(),
            price: document.getElementById("productPrice").value.trim()
        }
        // we validate the product:
        if (validateProduct(prod)) {
            // if the product is valid, we add it to the list of products:
            document.getElementById("errorMessages").innerHTML = "Product is saved!";
            // add the product to the list of products and update the HTML table
            addProduct(prod);
        } else
            // if the product is not valid, we display the errors:
            document.getElementById("errorMessages").innerHTML = convertErrorsToHtml(errorMessages);
    });

    // the sort button handler:
    document.getElementById("sortByReference").addEventListener("click", (event) => {
        sortProductsByReference();
    })

});

