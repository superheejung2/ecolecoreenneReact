import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({
    product,
    product: { id, image, title, category, price },
}) {
    const navigate = useNavigate();
    return (
        <li onClick={() => {
            navigate(`/products/${id}`, { state: { product } });
        }}>
            {/* transition hover:scale-105 */}
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{`€${price}`}</p>
            </div>
            <p>{category}</p>
        </li>
    );
}