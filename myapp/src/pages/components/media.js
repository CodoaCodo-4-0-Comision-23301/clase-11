import React from "react";
import { videos } from "../api/data/data";
import Button from "./button";
import Input from "./input";

export const Media = () => {
    return (
        <div>
<ul>
    {videos.map(video => (
        <li key={video.id}>
            <h2>{video.title}</h2>
            <video width="420" height="270" src={video.src} controls />
            <br/>
            <Input placeholder="Escribe algo" />
            <Button></Button><Button></Button>
            <br/><br/><br/>
        </li>))}
</ul>
</div>

  );
};
