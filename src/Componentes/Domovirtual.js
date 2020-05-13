import React, { Component } from 'react';



class Domovirtual extends Component {
    render() {
       const width=this.props.width
       const height=this.props.height

        return (
            <section id="domos">
            <div >
            <iframe title="A 3D model" width={width} height={height} src="https://sketchfab.com/models/50d98c2b446f4470b9cbb3e0c9a19be4/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p style={{fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A"}}>
                
            </p>
        </div>
        </section>
        );
    }
}


export default Domovirtual;