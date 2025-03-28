import "../../softwaredev/[softId]/loading.css"
import wait from 'wait'

export default async function LoadingGraphics() {
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

            <div className="titleloadings">
                <div />
            </div>

            <div className="outsideLink">
                <div className="linksloading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="loadingImages">
            </div>

            <div className="Loadingsdates">

            </div>

            <div className="loadingAbouts">
                <div className="loadingMainabout">

                </div>
                <div className="loadingsTools">

                </div>
            </div>

        </div>
    )
}
