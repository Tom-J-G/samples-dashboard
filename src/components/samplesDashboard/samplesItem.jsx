import React from 'react'

import moment from 'moment'

const SamplesItem = ({ sample, samplesKey  }) => {
    const today = moment()
    const expiryDate = moment(sample.expiryDate)

    return (
        <div key={samplesKey} className={`sample-data${(expiryDate.diff(today,'days') <= 7) ? " warning" : ""}${(samplesKey % 2 === 0) ? " blue":""}`}>
                <div>{sample.name}</div>
                <div className="expiry">
                    {(sample.expiryDate === null) ? 'N/A': expiryDate.format("DD/MM/YYYY")}
                </div>
                <div className="source">{(sample.sampleSource === 'LAB_CREATED') ? 'Lab' : (sample.sampleSource === 'VENDOR_SUPPLIED') ? 'Vendor' : 'Other'}</div>
        </div>
    )
}

export default SamplesItem