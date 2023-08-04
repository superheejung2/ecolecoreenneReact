import React from 'react';

export default function ProductDetail() {
    const {
        state: {
            product: { id, image, title, description, category, price, options }
        }
    } = useLocation();
    const [selected, setSelected] = useState(options && options[0]);


    const handleSelect = (e) => setSelected(e.target.value)
    return (
        <section>
            <p>{category}</p>
            <img src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>€{price}</p>
                <p>{description}</p>
                <p>option</p>
                <select onChange={handleSelect} value={selected}>
                    {options && options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
            </div>

        </section>
    )
}