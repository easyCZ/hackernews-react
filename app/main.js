'use strict';

import React from 'react';
import Sidebar from './sidebar/Sidebar';
import css from './style.scss';
import materialize from '../bower_components/materialize/sass/materialize.scss';

React.render(
    <Sidebar />,
    document.getElementById('sidebar')
);
