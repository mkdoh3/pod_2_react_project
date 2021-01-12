import React from "react";
import { withRouter, useHistory } from "react-router-dom";

function NavBar() {
    const history = useHistory();
    return (
        <>
            <h1>Doggo Browser</h1>
            <button onClick={() => history.goBack()}>back</button>
        </>
    );
}

export default withRouter(NavBar);
