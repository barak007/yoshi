import * as React from 'react';
import { I18nextProvider, translate } from 'react-i18next';
import {
  ExperimentsProvider,
  withExperiments,
} from '@wix/wix-experiments-react';
// import { Button } from 'wix-ui-tpa/Button';
import i18n from '../../config/i18n';
import { style, classes } from './App.st.css';

// import { IHostProps } from '@wix/native-components-infra/dist/src/types/types';
import { ExperimentsBag } from '@wix/wix-experiments';

interface IAppRootProps {
  name: string;
  locale: string;
  experiments: ExperimentsBag;
  host?: any;
}

export default class AppRoot extends React.Component<IAppRootProps, {}> {
  render() {
    const { name, locale, experiments } = this.props;

    return (
      <I18nextProvider i18n={i18n(locale)}>
        <ExperimentsProvider options={{ experiments }}>
          <App name={name} />
        </ExperimentsProvider>
      </I18nextProvider>
    );
  }
}

export const App = withExperiments<any>(
  translate()(({ name, t, className }) => {
    return (
      <div className={style(classes.root, className)}>
        <div className={classes.header}>
          <h2>
            {t('app.hello')} {name}!
          </h2>
        </div>
        <button className={classes.mainButton}></button>
        {/* <Button className={styles.mainButton}>click me</Button> */}
      </div>
    );
  }),
);
