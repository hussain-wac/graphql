import React from 'react';
import { useQuery } from '@apollo/client';
import { GetHomePage } from '../Query';

function Homepage() {
    const { loading, error, data } = useQuery(GetHomePage);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    if (!data || !data.homepageCms) {
        return <div>No data available</div>;
    }

    const homepageCms = data.homepageCms;

    return (
        <div className="homepage-content">
            <h1>{homepageCms.meta_title || 'Home Page'}</h1>
            {homepageCms.og_image ? (
                <img src={homepageCms.og_image} alt="Home Page" />
            ) : (
                <p>No image available</p>
            )}
        </div>
    );
}

export default Homepage;