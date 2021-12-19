import {cats } from '..//app.js'

// GET ALL CATS
export function getAllCats() {
    return cats
}


// GET A CAT BY ID
export function getCatsById(id) {
    const foundId = cats.find(function (cat) {
        return cat.id === id
    })
    return foundId;
}

// GET CAT BY NAME
export function getCatsByName(name) {
    const foundName = cats.find(function (cat) {
        return cat.name === name
    })
    return foundName;
}


