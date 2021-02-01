import React, { useContext } from 'react'

import { useSamples } from './useSamples'

const SamplesContext = React.createContext()

const useSamplesContext = () => useContext(SamplesContext)

function SamplesProvider({children}) {

    const [total, samples, setSamples, getAntibodySamples, getBacteriaSamples, getOtherSamples, loading, samplesError] = useSamples()

    return (
        <SamplesContext.Provider value={
            {useSamples: {total, samples, setSamples, getAntibodySamples, getBacteriaSamples, getOtherSamples, loading, samplesError} }
        }>
            {children}
        </SamplesContext.Provider>
    )

}

export {SamplesProvider, useSamplesContext}