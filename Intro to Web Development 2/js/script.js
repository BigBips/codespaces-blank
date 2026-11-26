'use strict'; /*testing out strict mode to see if it helps me find issues quicker*/

/*
feature adding a pre-order list
idea - customers put together the list on products page
the list is saved in localstorage, show on contact page
pre-fill the request form which is then validated with
JavaScript
*/


/*Data*/

const STORAGE_KEY = 'NorthStarPreOrderList';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; /*forces a valid email address to be entered in the form*/
const PHONE_PATTERN = /^\d{3}-\d{3}-\d{4}$/; /*forces a valid phone number to be entered in the form*/

