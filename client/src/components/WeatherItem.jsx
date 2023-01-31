

function WeatherItem (props){
    const headerStyle={
        // style
    }
    const bodyStyle={
        //style
    }
   const headerView = ()=> {
    return (
        //find out why the test data is not being outputted though this component
        <div className='weather'>
            <div style={headerStyle}>
                <p className='city'>los angeles</p>
                <p className='temperature'>77°</p>
                <p className='weather-description'>cloudy</p>
                <p className='max-temp'>88°</p>
                <p className='min-temp'>78°</p>
            </div>
            
        </div>
    )}
    const bodyView=()=>{
        return(
            <div style={bodyStyle}>
                <p className='hourly-card'>1am</p>
                <p className='daily-card'>today</p>
                <p className='air-quality'>49-good</p>
                <p className='precipitation'>1mm in last 24hrs</p>
             </div>
    )
}
}

{/* code to output data but not working for now */}

            {/* <div className='head'>
                <p className='city'>{props.item.resolvedAddress}</p>
                <p className='temperature'>{props.item.temp}°</p>
                <p className='weather-description'>{props.item.condition}</p>
                <p className='max-temp'>{props.item.tempmax}°</p>
                <p className='min-temp'>{props.item.tempmin}°</p>
            </div>
            <div className='weather-details'>
                <p className='hourly-card'>{props.item.description}</p>
                <p className='daily-card'>{props.item.days}</p>
                <p className='air-quality'></p>
                <p className='precipitation'></p>
        </div> */}
export default WeatherItem;