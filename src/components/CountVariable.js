import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

const Count = (props) => {

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Typography variant="h4" component="h4">Counter</Typography>
                <Typography variant="h1" component="h2">{props.store.var}</Typography>
                <CardContent>

                    <Button variant="contained" onClick={()=>props.store.increase()}>+</Button>
                    <Button variant="contained" onClick={()=>props.store.decrease()}>-</Button>
                </CardContent>
            </div>
        </div>
    );
};
export default  Count