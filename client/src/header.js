import './header.css'

export function Header() {
    return (
        <div className="header">
            <div class="col-sm-9">Weather App</div>
            <div className="row">
                <a class="col-sm-4">Home</a>
                <a class="col-sm-5">Weather List</a>
            </div>
        </div>
    )
}
