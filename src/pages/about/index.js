import React, { Fragment, useState } from 'react'
import Hero from './_hero'
// import { JoinUs } from './_join-us'
import Leaders from './_leaders'
import { OurAwards } from './_our-awards'
// import OurHistory from './_our-history'
import OurNumbers from './_our-numbers'
import { OurOffices } from './_our-offices'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const About = () => {
    const [navigation, setNavigation] = useState('story')

    return (
        <Layout>
            <SEO title={localize('About us')} />
            <Hero navigation={navigation} setNavigation={setNavigation} />
            {navigation === 'story' && (
                <Fragment>
                    {/* <OurHistory /> */}
                    <OurNumbers />
                    <OurOffices />
                    {/* It has been blocked due to design review */}
                    {/* <JoinUs /> */}
                    <OurAwards />
                </Fragment>
            )}
            {navigation === 'leadership' && <Leaders />}
        </Layout>
    )
}

export default WithIntl()(About)
