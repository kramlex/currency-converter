import React, {useState} from "react";
import {FrameConverter, FromFrame, IconsCountry, ToFrame} from "./styled";
import {Input, Select} from "antd";
import {compose} from "redux";
import {connect} from "react-redux";

const { Option } = Select


const CurrencyConverterContainer = (props) => {

    return(
        <CurrencyConverter currency={props.currency}/>
    )

}

const CurrencyConverter = ({currency}) => {
    const [curr, ] = useState(currency)

    const [fromCurrency, setFrom] = useState(curr[0].name)
    const [toCurrency, setTo] = useState(curr[1].name)

    const handleChangeFrom = (value) => {
        setFrom(value)
    }
    const handleChangeTo = (value) => {
        setTo(value)
    }

    console.log(fromCurrency, toCurrency)

    return (
        <FrameConverter>
            <FromFrame>
                <Select size={"middle"} style={{width: '120px'}}
                        defaultValue={curr[0].name}
                        onChange={handleChangeFrom}
                >


                    {curr.map(c => (
                        <Option key={c.name}
                                value={c.name}
                        >
                            <IconsCountry src={c.icon}/>
                            {c.name}
                        </Option>
                    ))}


                </Select>
                <Input size={"middle"}  allowClear={true} type={"number"}/>
            </FromFrame>


            <ToFrame>
                <Select size={"middle"} style={{width: '120px'}}
                        defaultValue={curr[1].name}
                        onChange={handleChangeTo}
                >
                    {curr.map(c => (
                        <Option key={c.name}
                                value={c.name}
                        >
                            <IconsCountry src={c.icon}/>
                            {c.name}
                        </Option>
                    ))}
                </Select>
                <Input size={"middle"} allowClear={true} type={"number"} />
            </ToFrame>
        </FrameConverter>
    )
}

let mapStateToProps = (state) => ({
    currency: state.converter.currency
})
let mapDispatchToProps = null

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CurrencyConverterContainer)
