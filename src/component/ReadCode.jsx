import React, {useEffect} from 'react';
import {getOnCode, getOffCode} from '../Service/FirebaseModule';
import { DisplayLink } from './DisplayLink';

export const ReadCode = ({code, codeObj, setCodeObj}) => {
    useEffect(() => {
        getOnCode(code, setCodeObj)
        return () => {
            getOffCode();
        }
    }, [code, setCodeObj])

    var links = "<p>Nothing has been added yet.</p>"
    if (codeObj && codeObj.hasOwnProperty('links')) {
        links = codeObj.links.map((link, i) => {
            return (<DisplayLink name="name" link={link.link} type={link.type} id={i} />);
        });
            
    }
    return (
        <div>
            {links}
        </div>
    );
}
