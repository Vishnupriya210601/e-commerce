import { Fragment, useEffect, useState } from 'react'
import ProductsView from '../ProductsView/ProductsView';
import { useSearchParams } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/products?' + searchParams)
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }, [searchParams])

    return <Fragment>
            <section id="products" className="container">
                <div className="row">
                    {products.map(product => <ProductsView product={product} />)}
                </div>
            </section>
    </Fragment>
}