/**
 * The top-level routing of the App.
 */

// import CommunityLoader from 'containers/tc-communities/Loader';
// import ContentfulRoute from 'components/Contentful/Route';
// import Content from 'components/Content';
// import Footer from 'components/TopcoderFooter';
// import Header from 'containers/TopcoderHeader';
import React from 'react';

import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import { config } from 'topcoder-react-utils';
import MetaTags from 'components/MetaTags';

import PT from 'prop-types';

import { connect } from 'react-redux';

import socialImage from 'assets/images/social.png';

import Topcoder from './Topcoder';

import './Topcoder/styles.scss';

function Routes({ communityId }) {
  const metaTags = (
    <MetaTags
      description="Topcoder is a crowdsourcing marketplace that connects businesses with hard-to-find expertise. The Topcoder Community includes more than one million of the world’s top designers, developers, data scientists, and algorithmists. Global enterprises and startups alike use Topcoder to accelerate innovation, solve challenging problems, and tap into specialized skills on demand."
      image={socialImage}
      siteName="Topcoder"
      title="Topcoder"
    />
  );
  return (
    <div>
      {metaTags}
      <Switch>
        <Topcoder />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  communityId: PT.string.isRequired,
};

export default withRouter(connect(state => ({
  communityId: state.subdomainCommunity,
}))(Routes));
