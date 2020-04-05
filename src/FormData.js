import React, { Component } from 'react'

export default class FormData extends Component {

    static defaultProps=
    {
        Ad:"cem",
        Validate:this.ValidateData
    }

    ValidateData()
    {
        return "Uygun";
    }

    render() {
        return (
            <div>
                For data verisi

            
            </div>
        )
    }
}
