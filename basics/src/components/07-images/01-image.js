import React from 'react';
import Korkuluk from "../../assets/img/image2.jpg";

const Image = (props) => {

    // TODO: ortak stiller
    const ortakStil = {
        margin: '0 1rem',
        height: '200px',
    };

    return (
        <div>
            
            
            {/* HARICI IMAGE */}
            <img
                src="https://picsum.photos/id/237/200/300"
                alt="dog"
                title='dog'
                style={ortakStil}
            />
            {/* IMPORT YONTEMI */}
            <img
                src={Korkuluk}
                alt="korkuluk"
                title='korkuluk'
                style={ortakStil}
            />
            {/* REQUIRE YONTEMI */}
            <img
                src={require("../../assets/img/image3.jpg")}
                alt="surf"
                title='surf'
                style={ortakStil}
            />
        </div>
    )
}

export default Image;