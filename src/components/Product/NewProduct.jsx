import React from 'react';

export default function NewProduct() {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFile(files && files[0]);
            return;
        }
        setProduct((product) => ({ ...product, [namme]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //제품의 사진을 cloudinary에 업로드 하고 Url 획득
        //firebase에 새로운 제품을 추가함

    };


    return (
        <section>
            {file && <img src={URL.createObjectURL(file)} alt='local file' />}
            <form onSubmit={handleSubmit}>
                <input
                    type='file'
                    accept='image/*'
                    name='file'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='title'
                    value={product.title ?? ''}
                    placeholder='product name'
                    required
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='price'
                    value={product.price ?? ''}
                    placeholder='price'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='category'
                    value={product.category ?? ''}
                    placeholder='category'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='description'
                    value={product.description ?? ''}
                    placeholder='description'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='options'
                    value={product.options ?? ''}
                    placeholder='options'
                    required
                    onChange={handleChange}
                />
                <Button text={'Enregistrer'} />
            </form>
        </section>
    )
}