import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
    if (props) {
        return (
            <div className="Phonetics">
               <span className="text">/{props.phonetic}/
                </span> 
            </div>
      );
} else {
  return null;
      }
  }
