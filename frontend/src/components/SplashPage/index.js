import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SplashPage() {
    return (
        <h1>
            Welcome to Treebnb!
        </h1>
    )
}

export default SplashPage;
