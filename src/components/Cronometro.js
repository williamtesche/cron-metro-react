import React from 'react';


function Cronômetro(props) {
  return (
    <div>
       <span>{(props.time.h >= 0)? props.time.h : "0"+ props.time.h}</span>&nbsp;:&nbsp;
       <span>{(props.time.m >= 0)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
       <span>{(props.time.s >= 0)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
       <span>{(props.time.ms >= 0)? props.time.ms : "0"+ props.time.ms}</span>&nbsp;:&nbsp;
    </div>
  );
}

export default Cronômetro;
