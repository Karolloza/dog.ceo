import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Layout: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
};
const Layout = ({ children }) => <S.Layout>{children}</S.Layout>;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
