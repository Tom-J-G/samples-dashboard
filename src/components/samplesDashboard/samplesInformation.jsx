import React from 'react'

//context
import { useSamplesContext } from '../../hooks/samplesContext'

const SamplesInformation = () => {
    const {useSamples: {getAntibodySamples, getBacteriaSamples, getOtherSamples} = {}} = useSamplesContext()
    const antibodySamples = getAntibodySamples()
    const bacteriaSamples = getBacteriaSamples()
    const otherSamples = getOtherSamples()

    return (
        <div className="sample-info">
            <div className="amount">
                <h3>Antibodies Count</h3>
                <div>{antibodySamples.length}</div>
            </div>
            <div className="amount two">
                <h3>Bacteria Count</h3>
                <div>{bacteriaSamples.length}</div>
            </div>
            <div className="amount">
                <h3>Other Samples Count</h3>
                <div>{otherSamples.length}</div>
            </div>
        </div>
    )
}

export default SamplesInformation
