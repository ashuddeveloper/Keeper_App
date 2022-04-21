import React from "react";
import Note from "./Note";
import Notes from "../notes";

function CreateCard(n) {
  return <Note key={n.key} title={n.title} content={n.content} />;
}

function Cards() {
  return Notes.map(CreateCard);
}

export default Cards;
