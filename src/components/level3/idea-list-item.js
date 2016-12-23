import React, { Component } from 'react';
import HeartO from 'react-icons/lib/fa/heart-o';

import styles from '../../styles/level3/idea-list-item.css';
import btn from '../../styles/buttons.css';

export default class IdeaListItem extends Component {
  constructor() {
    super();
    this.state = { locationText: null };
  }

  render() {
    return (
      <div className={styles.ideaListItem}>
        <a href={`ideas/${this.props.id}`} className={styles.imageLink}>
          <img src={this.props.image} className={styles.image} />
        </a>

        <div className={styles.itemBody}>
          <div className={styles.ideaTitle}>{this.props.title}</div>
          <div className={styles.description}>{this.props.description}</div>
          <div className={styles.buttonRow}>
            <span className={styles.oldPrice}>${this.props.retailPrice}</span>
            <span className={styles.newPrice}>${this.props.ourPrice}</span>
            <a href={`ideas/${this.props.id}`} className={btn.btnRedLarge}>View More</a>
          </div>
          <div className={styles.wishlist}>
            <HeartO className={styles.heartPosition} />
            <span className={styles.save}>Save for later</span>
          </div>
          <span className={styles.location}>
            {this.state.locationText}
          </span>
        </div>
      </div>
    );
  }
}
