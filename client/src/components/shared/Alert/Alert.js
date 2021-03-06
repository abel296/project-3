import { Toast } from "react-bootstrap"

import logo from './logo_small_icon_only_inverted.png'

const Alert = ({handleAlert, show, title = 'System message', text}) => {

    return (
        <Toast autohide show={show} onClose={() => handleAlert(false)} delay={3000} style={{zIndex: 9999, position: 'fixed', color: 'white', bottom: 38, right: 17, width: 400, backgroundColor:'#008650'}}>
            <Toast.Header>
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt="Logotipo"
                    style={{ width: 20, height: 20 }}
                />
                <strong className="mr-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}


export default Alert