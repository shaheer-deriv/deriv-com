import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BinarySocketBase } from 'common/websocket/socket_base'
import AutoCarousel from 'components/elements/auto-carousel'

const TickWrapper = styled.div`
    width: 200px;
`
class Tick extends React.Component {
    state = {
        quote: '',
    }

    subscribe = symbol => {
        BinarySocketBase.send(
            {
                ticks: symbol,
                subscribe: 1,
            },
            { callback: this.updateStateWithResponse },
        )
    }
    updateStateWithResponse = response => {
        this.setState({
            quote: response.tick.quote,
        })
    }
    componentDidMount() {
        this.subscribe(this.props.symbol)
    }
    componentWillUnmount() {
        BinarySocketBase.send({
            forget_all: 'ticks',
        })
    }

    render() {
        return (
            <TickWrapper>
                <span>
                    {this.props.symbol}: {this.state.quote}
                </span>
            </TickWrapper>
        )
    }
}
Tick.propTypes = {
    symbol: PropTypes.string,
}
const Ticker = () => {
    return (
        <AutoCarousel
            carousel_width="100%"
            transition_duration={20000}
            transition_timing_function="linear"
        >
            <Tick symbol="R_10" />
            <Tick symbol="R_25" />
            <Tick symbol="R_50" />
            <Tick symbol="R_75" />
            <Tick symbol="R_100" />
            <Tick symbol="RDBEAR" />
            <Tick symbol="RDBULL" />
        </AutoCarousel>
    )
}

export default Ticker
