import { Button, Grid } from "@material-ui/core";
import React from "react";
import ReactHlsPlayer from "react-hls-player";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Player() {
  return (
    <div>
      <div className="container text-left pd-5 md-5 ">
        <div className="container p-2 m-2">
          <Button variant="outlined" color="primary" href="/home">
            <ArrowBackIosIcon />
            Home
          </Button>
        </div>
        <Grid container>
          <Grid item xs={12} sm={8} md={8}>
            <ReactHlsPlayer
              src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
              autoPlay={true}
              controls={true}
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
