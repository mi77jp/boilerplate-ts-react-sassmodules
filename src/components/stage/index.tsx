import * as React from "react";
const styles = require('./index.scss');

interface IProps {
  name: string;
}

export default class Page extends React.Component<IProps> {
  public render() {
    return (
      <div className={ styles.container }>
        <span className={ styles.text }>
          Hello {this.props.name}!
        </span>
      </div>
    );
  }
}
