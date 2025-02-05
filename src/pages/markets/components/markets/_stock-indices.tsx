import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import stock_content from '../../static/content/_stock'
import { stock_cfds } from '../../static/content/_cfds'
import { stock_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { localize, Localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import useRegion from 'components/hooks/use-region'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type StockIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_eu } = useRegion()
    const [is_mobile] = useBrowserResize()

    simple_step_content[1].text = is_eu ? (
        <Localize translate_text="Open a real account, make a deposit, and start trading stocks, stock indices, and other markets." />
    ) : (
        <Localize translate_text="Open a real account, make a deposit, and start trading stocks, indices and other markets." />
    )

    return (
        <div>
            <AvailableTrades
                CFDs={<CFDs market_tab_name={'stock-indices'} market_content={stock_cfds} />}
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('stocks & indices')}
                        options_list={stock_options}
                    />
                }
                display_title={
                    <Localize translate_text="Stocks & indices trades available on Deriv" />
                }
            />
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                pb="10x"
                md={{ pb: '40x', mb: '20x' }}
            >
                <Typography.Paragraph mb="10x" textcolor="black" align="center">
                    <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary
                    font_family="UBUNTU"
                    aria-label="check trading specs"
                    url={{
                        type: 'internal',
                        to: '/trading-specification',
                    }}
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </LinkButton.Primary>
            </Flex.Box>
            <FullWidthMultiColumn
                header={<Localize translate_text="Why trade stocks & indices on Deriv" />}
                subtext_width="180px"
                header_width={is_mobile ? '186px' : '996px'}
            >
                {stock_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={
                            <img width="48px" height="48px" src={content.src} alt={content.alt} />
                        }
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading stocks & indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}

export default StockIndices
