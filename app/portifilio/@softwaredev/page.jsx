import { Suspense } from 'react'
import wait from 'wait'

async function Softwaredev() {
    await wait(5000)
    return (
        <div>
            <h1 style={{ fontSize: "3em" }}>
                time 500
            </h1>
        </div>
    )
}

export default Softwaredev
