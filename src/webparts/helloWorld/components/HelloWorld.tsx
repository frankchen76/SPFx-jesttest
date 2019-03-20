import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, autobind } from 'office-ui-fabric-react';
import { IHelloWorldState } from './IHelloWorldState';

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      result: undefined
    };
  }
  public componentDidMount(): void {

  }
  public componentDidUpdate(prevProp: IHelloWorldProps, prevState: IHelloWorldState): void {

  }

  @autobind
  public _testHandler(): void {
    this.setState({
      result: "clicked"
    });

  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p id="pDescription" className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
              <PrimaryButton id="btnTest" text="test" onClick={this._testHandler} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
