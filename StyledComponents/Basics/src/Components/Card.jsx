import React from "react";
import { StyledCard } from "./Styles/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard layout={id % 2 === 0 ? "row-reverse" : "row"}>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={`./images/${image}`} alt={title} />
        </StyledCard>
    );
};

export default Card;
