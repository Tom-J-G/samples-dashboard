import {useState, useEffect} from 'react'
import { getSamples } from '../api/fetchSamples'

export const useSamples = () => {
    const [samples, setSamples] = useState([])
    const [total, setTotal] = useState(0)
    const [samplesError, setSamplesError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSamples().then(({data}) => {
            console.log(data.samples)
            setSamples(data.samples)
            setTotal(data.totalHits)
            setLoading(true)
        }).catch(e => {
            setSamplesError(e)
        })
    }, [])

    const getAntibodySamples = () => {
        return samples.filter(sample => sample.iconId === 268)
    }

    const getBacteriaSamples = () => {
        return samples.filter(sample => sample.iconId === 269)
    }

    const getOtherSamples = () => {
        return samples.filter(sample => sample.iconId === -1)
    }

    return [total, samples, setSamples, getAntibodySamples, getBacteriaSamples, getOtherSamples, loading, samplesError]
}