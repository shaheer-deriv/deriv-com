import React from 'react'
import * as styles from './blade-shape-banner.module.scss'
import { BannerType } from './types'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'

const BladeShapeBanner = ({ data }: { data: BannerType }) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed
            className={styles.banner_section}
            as={'section'}
            bgcolor={'black'}
            padding_block={'32x'}
            padding_inline={'8x'}
            md={{ padding_inline: '0x', padding_block: '0x' }}
        >
            <Flex.Box
                container={'fluid'}
                direction={'col'}
                justify={'between'}
                md={{ direction: 'row' }}
            >
                <Flex.Box direction={'col'} align={'center'} md={{ basis: '3-6' }}>
                    <FlexBox.Box
                        direction={'col'}
                        align={'center'}
                        md={{ direction: 'row', align: 'start' }}
                    >
                        <FlexBox.Item mt={'7x'} pb={'8x'}>
                            <Image
                                src={data.information.icon}
                                alt="_t_banner information_t_"
                                width={is_mobile ? 48 : 64}
                                height={is_mobile ? 48 : 64}
                            />
                        </FlexBox.Item>
                        <FlexBox.Box
                            className={styles.heading_box}
                            direction={'col'}
                            align={'start'}
                            md={{ ml: '8x' }}
                        >
                            <Typography.Heading
                                as={'h2'}
                                size={'xlarge'}
                                textcolor={'inverted'}
                                align={'center'}
                                md={{ align: 'left' }}
                            >
                                <Localize translate_text={data.information.heading} />
                            </Typography.Heading>
                            {data?.extra_info && (
                                <FlexBox.Box
                                    direction={'row'}
                                    align={'start'}
                                    mt={'8x'}
                                    md={{ align: 'center' }}
                                >
                                    <Image src={data.extra_info.icon} alt="_t_extra info icon_t_" />
                                    <Typography.Paragraph
                                        size={'xlarge'}
                                        textcolor={'inverted'}
                                        ml={'8x'}
                                    >
                                        <Localize
                                            translate_text={data.extra_info.where}
                                            components={[<strong key={0} />]}
                                        />
                                    </Typography.Paragraph>
                                </FlexBox.Box>
                            )}
                        </FlexBox.Box>
                    </FlexBox.Box>
                </Flex.Box>
                <Flex.Box direction={'col'} align={'center'} md={{ align: 'start' }}>
                    <FlexBox.Box
                        className={styles.qr_box}
                        align={'center'}
                        padding={'12x'}
                        mb={'12x'}
                        mt={'20x'}
                        md={{ mt: '0x' }}
                    >
                        <Image
                            src={data.scan_box.icon}
                            alt={'_t_qr code_t_'}
                            width={64}
                            height={64}
                        />
                        <FlexBox.Box direction={'col'}>
                            <Typography.Paragraph textcolor={'white'}>
                                <Localize translate_text={data.scan_box.heading_one} />
                            </Typography.Paragraph>
                            <Typography.Heading size={'xxs'} textcolor={'white'}>
                                <Localize translate_text={data.scan_box.heading_two} />
                            </Typography.Heading>
                        </FlexBox.Box>
                    </FlexBox.Box>
                    <Flex.Box wrap={'wrap'} justify={'start'} pl={'12x'}>
                        {data.os_apps.map((item) => (
                            <Flex.Box
                                key={item.id}
                                align={'center'}
                                padding_block={'8x'}
                                basis={'6-12'}
                            >
                                <Image
                                    src={item.data.icon}
                                    alt={item.data.text}
                                    width={is_mobile ? 24 : 32}
                                    height={is_mobile ? 24 : 32}
                                />
                                <Link pl={'3x'} url={item.data.url} no_hover>
                                    {item?.data.smallText && (
                                        <Typography.Paragraph textcolor={'white'} size={'xxs'}>
                                            <Localize translate_text={item.data.smallText} />
                                        </Typography.Paragraph>
                                    )}
                                    <Typography.Paragraph
                                        textcolor={'white'}
                                        size={'large'}
                                        weight={'bold'}
                                    >
                                        <Localize translate_text={item.data.text} />
                                    </Typography.Paragraph>
                                </Link>
                            </Flex.Box>
                        ))}
                    </Flex.Box>
                </Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default BladeShapeBanner
