import React from 'react';
import styles from './Footer.module.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.icon ?? (
                    <img
                        src={this.props.iconUrl ?? "/cdn/images/logo.svg"}
                        style={this.props.iconStyle}
                        alt=""
                    />
                )}
                <span>©{(new Date()).getFullYear()} Microart Inc. All Rights Reserved. </span>
                <span>'Microart', 'Microart Cloud', and 'Deliver' are not registered trademarks of Microart Inc but please dont use them :)</span>
            </div>
        );
    }
}