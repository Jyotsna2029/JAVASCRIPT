let user = {
    name: "Rohit",
    ballance : 420, 
    address : {
        pincode :303803,
        city : "Jaipur"
    }
}
console.log(user.address.pincode);

// assign
const  user2 = Object.assign({}, user);
console.log(user2);
user.address.pincode = 110001;
console.log(user.address.pincode);

// destructor 
const {address:{pincode, city}} = user;
console.log(pincode, city);