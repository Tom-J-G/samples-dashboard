import React from 'react'
import moment from 'moment'
//context
import {useSamplesContext} from '../../hooks/samplesContext'

//components
import SamplesList from './samplesList'
import SamplesInformation from './samplesInformation'
import Card from '../ui/card'

//css
import './samplesDashboard.css'

function SamplesDashboard() {
    const {useSamples: {
        total, samples, getAntibodySamples, getBacteriaSamples, getOtherSamples, loading, samplesError
    } = {}} = useSamplesContext()
    const antibodySamples = getAntibodySamples()
    const bacteriaSamples = getBacteriaSamples()
    const otherSamples = getOtherSamples()

    // check the expiry dates
    const expiryCheck = () => {
        let expiryCheck = 99999 //high number incase long expiry date
        let expiryDate
        const today = moment()

        samples.forEach((sample, i) => {
            expiryDate = moment(sample.expiryDate)
            if( i === 0) {
                expiryCheck = expiryDate.diff(today,'days')
            } else if (expiryDate.diff(today,'days') < expiryCheck ) {
                expiryCheck = expiryDate.diff(today,'days')
            }
        })

        return expiryCheck
    }

    const expiryMessage = (expiryCheck() < 0) ? <div><span className="warning">Warning: </span>At least one of your samples has expired</div> : 
    (expiryCheck() <= 7) ? <div><span className="warning">Warning: </span>You have a Sample expiring soon</div> : 
    <div>There are no Samples expiring soon</div>

    // check error or load and display dashboard
    return (
        <div id="dashboard">
            {(samplesError !== '' ) ? <div className="error-load" >Sorry you are not authorised to view this data or you are using the wrong link</div> :
            (loading === false) ? <div className="error-load">Loading Your Dashboard</div> :
            <>
            <h1>Samples Dashboard</h1>
            <div className="sample-check">
                {expiryMessage}
            </div>
            <Card size="long"><SamplesInformation /></Card>
            <div className="bottom">
            <Card size="fourth one">
                <SamplesList samples={antibodySamples} title="Antibody" />
            </Card>
            <Card size="fourth two">
                <SamplesList samples={bacteriaSamples} title="Bacteria" />
            </Card>
            <Card size="fourth three">
                <SamplesList samples={otherSamples} title="Other" />
            </Card>
            <Card size="fourth four">
                <>
                    <div className="card-header"><h3>Total Samples</h3></div>
                    <div className="samples-total">
                        <div className="sum">{total}</div>
                        <div className="total-button">
                            <button>Create a Sample</button>
                        </div>
                    </div>
                </>
            </Card>
            </div>
            </>
            }   
        </div>
    )
}

export default SamplesDashboard
