//import css
//import useState

export default function Switch(){

    const [toggled, setToggled] = useState(false);

    return (
        <div 
        className={`switch ${toggled ? 'switchToggled' : ''}`} 
        onClick={() => setToggled(!toggled)} 
        // style={{backgroundColor : toggled ? '#A445ED' : '#757575'}} You can style it with this line or in the css if you remove the class above
        >
            <div className={`circle ${toggled ? 'toggled' : ''}`}></div>
        </div>
    )
}