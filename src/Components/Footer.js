import React from 'react';

let img = "../image/11logo.png"

function Footer(props) {
    return (
        <footer className='text-muted text-center mt-5 sticky-bottom'>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={img} class="icons" alt="icon" />
                <h5>© 2022 Copyright: PT Immobi Solusi Prima</h5>
            </div>
            <p className='ms-5'>(021)27094931</p>
        </footer>
    );
}

export default Footer;