import express from "express";

const router = express.Router();

router.get('/api/get_test', async (req,res) => {
 
  const my_var = {
    "users": [
      {
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
      },
      {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
      },
      {
        "id": 3,
        "first_name": "Anna",
        "last_name": "Smith",
        "email": "annasmith23@gmail.com"
      },
      {
        "id": 4,
        "first_name": "Robert",
        "last_name": "Brown",
        "email": "bobbrown432@yahoo.com"
      },
      {
        "id": 5,
        "first_name": ["Roger","Romero"],
        "last_name": "Bacon",
        "email": "rogerbacon12@yahoo.com"
      }
    ]
  }

for (let i = 0; i < my_var.users.length; i++){
    var name = my_var.users[i].first_name
 if ( name.includes("Ro") ) {  
    console.log(my_var.users[i].id);
}
}

    return res.json(my_var);
})

export { router as fetchTestRouter}