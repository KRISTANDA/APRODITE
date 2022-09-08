import './periodeStyle.css'
let maps = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0"

const Periode = () => {
    return(
        <>
        <div className="periode mt-3 mb-4">
            <div className="img-calendar mb-2">
                <img src="./image/logokaleender-removebg-preview.png" className="img-fluid"/>
            </div>
            <div className="text-side text-center mb-4">
                <h3 className="fw-bold">Website Redesign</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima ea ab.</p>
            </div>
            <div className="maps d-flex justify-content-center">
                <iframe src={maps} height={270} width={490} className="frame-maps"/>
            </div>
        </div>
        </>
    )
}

export default Periode