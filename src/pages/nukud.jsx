import React, { useState, useEffect } from 'react';
import { getDolls } from '../services/contentful/api';
import DollGrid from '../components/nukud/DollGrid';
import DollTheme from '../components/nukud/DollTheme';

const Nukud = () => {
    const [dolls, setDolls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDolls = async () => {
            try {
                const dollsData = await getDolls();
                setDolls(dollsData);
            } catch (err) {
                setError('Failed to fetch dolls');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDolls();
    }, []);

    if (loading) return <div className="p-8 text-center">Loading...</div>;
    if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

    return (
        <>
            <DollTheme />
            <div className="container mx-auto">
                <DollGrid dolls={dolls} />
            </div>
        </>
    );
};

export default Nukud;
