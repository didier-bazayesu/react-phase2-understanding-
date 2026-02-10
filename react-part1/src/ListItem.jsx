import React from 'react'
import List from './List'



function ListItem() {
    const food = {
        fruits: [
            "Apple",
            "Banana",
            "Orange",
            "Mango",
            "Pineapple",
            "Grapes",
            "Strawberry",
            "Watermelon",
            "Papaya",
            "Kiwi"
        ],
        vegetables: [
            "Carrot",
            "Broccoli",
            "Spinach",
            "Cabbage",
            "Tomato"
        ]
    };

   




  return (
    <>
    <List  food = {food} />
    </>
  )
}

export default ListItem