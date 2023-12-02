import React from "react";

import { Typography, AppBar } from "@mui/material";

import { makeStyles } from "@mui/styles";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        border: "2px solid black",
        // [theme.breakpoints.down("xs")]: {
        //     width: "90%",
        // },
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography variant="h2" align="center">
                    Something
                </Typography>
            </AppBar>

            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>
        </div>
    );
}
