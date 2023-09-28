import Badge from 'react-bootstrap/Badge';
// <!-- Social Share Kit CSS -->
export default function Footer() {
    return(
        <footer className="text-center text-light fixed-bottom bg-dark" style={{height: "200px"}}>
            <h1 className="pt-3">Created with ❤️ by Dylan Stoudt</h1>
            <ul className="d-flex justify-content-around pt-1">
            <Badge pill bg="primary">
            <a className="link-secondary" href="https://github.com/dylanstoudt">Github</a>
            </Badge>
            <a href="https://www.linkedin.com/in/dylan-stoudt/">LinkedIn</a>
            <a className="ssk ssk-twitter" href="mailto: dylanstoudt@aol.com">Email</a>
            </ul>
        </footer>
    )
}