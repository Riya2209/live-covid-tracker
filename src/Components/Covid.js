import React, { useEffect, useState } from "react";
import './Covid.css'

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
         getCovidData();
    }, [])

    const lastUpdated = data.lastUpdatedAtApify;
    const date = new Date(lastUpdated).toLocaleDateString();

    return (
        <>
            <section>
                <div className="container">
                    <div className="box-container">
                        <div className="row">

                            <h4>🔴 Live</h4>
                            <h2 className="covid-header">COVID 19 TRACKER</h2>

                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Country</div>
                                    <div class="card-body">
                                        <h2 class="card-title">INDIA</h2>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Total Recovered</div>
                                    <div class="card-body">
                                        <h2 class="card-title">{data.recovered}</h2>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Total Confirmed</div>
                                    <div class="card-body">
                                        <h2 class="card-title">{data.totalCases}</h2>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Total Deaths</div>
                                    <div class="card-body">
                                        <h2 class="card-title">{data.deaths}</h2>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Total Active</div>
                                    <div class="card-body">
                                        <h2 class="card-title">{data.activeCases}</h2>
                                        
                                    </div>
                                </div>

                            </div>

                            <div className="col-4">
                                <div class="card mb-3">
                                    <div class="card-header">Last Updated</div>
                                    <div class="card-body">
                                        <h2 class="card-title">{date}</h2>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Covid;