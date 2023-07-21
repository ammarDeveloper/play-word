import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) => {
        word = word.toLowerCase()
        return word[0].toUpperCase() + word.slice(1);

    };

    // console.log(capitalize("kdsjf;ljDDD"));

    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            </div>

        </div>
    )
}
