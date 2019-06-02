import React from 'react';
import { I18nextProvider, translate } from 'react-i18next';
import {
  ExperimentsProvider,
  withExperiments,
} from '@wix/wix-experiments-react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';
import i18n from '../../config/i18n';
import { style, classes} from './App.st.css';

export default class AppRoot extends React.Component {
  render() {
    const { name, locale, experiments, mobile } = this.props;

    return (
      <I18nextProvider i18n={i18n(locale)}>
        <ExperimentsProvider options={{ experiments }}>
          <TPAComponentsProvider value={{ mobile }}>
            <App name={name} />
          </TPAComponentsProvider>
        </ExperimentsProvider>
      </I18nextProvider>
    );
  }
}

export const App = withExperiments(
  translate()(({ name, t, className }) => {
    return (
      <div className={style(classes.root, className)}>
        <div className={classes.header}>
          <h2>
            {t('app.hello')} {name}!
          </h2>
        </div>
        <button className={classes.mainButton}>click me</button>
      </div>
    );
  }),
);
