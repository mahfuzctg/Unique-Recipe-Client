import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";

const Chef = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const jsonData = "http://localhost:5000/details";
        const res = await fetch(jsonData);
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadAllData();
  }, []);
  return (
    <>
      <h1 className="text-center py-2 mt-5 text-2xl font-bold">
        OUR SPECIAL CHEF
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-2  gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </>
  );
};

export default Chef;
