import './header.css'

export function Header() {
    return (
        <div className="header">
            <div class="col-sm-9">Weather App</div>
            <div className="row">
                <div class="col-sm-4">Home</div>
                <div class="col-sm-5">Weather List</div>
            </div>
        </div>
    )
}
