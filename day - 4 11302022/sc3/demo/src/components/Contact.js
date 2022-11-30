export default function Contact(props){
    return(
        <div>
            <h3> { props.name } </h3>
            <p>
                { props.email }
            </p>
        </div>
    );
}