import {cats } from '..//app.js';
import pg from "pg"

const pool = new pg.Pool()

pool.query()

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

export default function query(text,params,){
    return pool.query(text,params,)
  };
  

