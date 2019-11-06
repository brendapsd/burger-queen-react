import React, { useState } from 'react'
import { db } from '../dataFirestore/Firestore';

function Product() {

    // const [data, setData] = useState([])

    db.collection("acompañamiento")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
    });

    db.collection("bebidas")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
    });

    db.collection("extras")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
    });

    db.collection("hamburguesas")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
    });

    db.collection("sandwich")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects

    });

    return(
        <div className="Product">
            <div>
                <button type="button" className="btn btn-warning"></button>
            </div>
        </div>
    )
}

export default Product; 