import "./loading.css"
import wait from 'wait'

export default async function loadingSoftware() {
    await wait(5000);
    return (

        <div className="loading">
            <div className="navPath">
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </div>
        </div>
    )
}
