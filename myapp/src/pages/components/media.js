import React from "react";
import videos from "../api/data/data";
import Button from "./button";
import Input from "./input";

const Media = () => {
    return (
        <div>
<ul>
    {videos.map(data => (
        <li key={data.id}>
            <h2>{data.title}</h2>
            <video width="420" height="270" src={data.src} controls />
            <br/>
            <Input placeholder="Escribe algo" />
            <Button ></Button>
            <br/><br/>
        </li>))}
</ul>
</div>

  );
};
export default Media;