import React from 'react';
import ProductCard from './ProductCard';
import { filter } from '../constants/constants';

export default function FeatureProducts(props) {
    const { featuredProducts } = props;
    return (
        <div>
            <div id="filter-box" className="shadow-sm">
                <div className="container">
                    <ul className="list-inline">
                        {filter.common.map((item) => (
                            <li key={item.name} className="list-inline-item"><button type="button" className="btn btn-outline-warning filter-btn">{item.name}</button></li>
                        ))}

                        <li className="list-inline-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger dropdown-toggle filter-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catagery
                                </button>
                                <ul className="dropdown-menu">
                                    {filter.category.map((item) => (
                                        <li key={item.name}><a className="dropdown-item" href="#">{item.name}</a></li>

                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* {featuredProducts.results?.map((each) => (
                <ProductCard key={each.id} featuredProducts={each} />
            ))} */}


        </div>
    );
}

