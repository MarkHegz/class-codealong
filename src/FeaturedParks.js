const FeaturedParks = (props) => {

    // const deferrer = () => props.bulldozer(props.parkName);

    return (
        <div>
            <h2>This weeks park is .........{props.parkName}</h2>
            <button 
            onClick={ () => props.bulldozer(props.parkName)}>
                Not this one
            </button>
        </div>
    )
}


export default FeaturedParks;