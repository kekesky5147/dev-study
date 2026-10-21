let age = 70

if (age <8) {
    price = "Kids Free"
} else if (age <19) 
    {
        price = "Student $10"
    } else if (age >= 65) {
        price = "Senior Free"
    } else {
        price = "General Admin $15"
    }


    console.log(`"Price", ${price}`)
