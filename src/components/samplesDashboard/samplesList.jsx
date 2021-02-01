import React from 'react'

import SamplesItem from './samplesItem'

//display the samples
const SamplesList = ({samples, title}) => {

    return (
        <>
            <div className="card-header"><h3>{title} Samples</h3></div>
            <div className="sample-list">
                {(samples.length === 0) ? <div>You have no {title} Samples</div> :
                    <>
                        <div className="sample-data top">
                            <div>Name</div>
                            <div className="expiry">Expiry Date</div>
                            <div className="source">Source</div>
                        </div>           
                        {samples.map((sample, i) => <SamplesItem sample={sample} samplesKey={i} key={i} />)}
                    </>
                }   

            </div>
        </>
    )
}

export default SamplesList