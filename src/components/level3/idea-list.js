import React, { Component } from 'react';

import IdeaListItem from './idea-list-item';
import styles from '../../styles/level3/idea-list.css';

export default class IdeaList extends Component {
  constructor() {
    super();

    this.renderIdeas = this.renderIdeas.bind(this);
  }

  renderIdeas(ideas) {
    if (ideas) {
      return ideas.map((i, index) => {
        return (
          <IdeaListItem
            key={index}
            id={i._id}
            description={i.description}
            image={i.images[0].url}
            locations={i.locations}
            title={i.name}
            retailPrice={i.retail_price}
            ourPrice={i.our_price} />
        );
      });
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div class={styles.ideaList}>
        {this.renderIdeas(this.props.ideas)}
      </div>
    );
  }
}
