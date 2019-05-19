import React, {Component} from 'react';
import '../../styles/tabs.css';

class Tabs extends Component {
  state = {
    selected: 1
  }

  handleClick = (id) => {
    this.setState({selected: id});
  }

  renderTabText = (item) => {
    return (
      <div>
        <div id='tab-title'>{item.title}</div>
        <div id='tab-value'>{item.value}</div>
      </div>
    )
  }

  render() {
    const {data} = this.props;
    return(
      <div className='row tab-container'>
        {
          data.map(item => {
            let classname = 'col-xs-4 tab';
            if(item.id === this.state.selected)
              classname += ' active';
            return (
              <div 
                className={classname}
                onClick={() => this.handleClick(item.id)}
              >
                {this.renderTabText(item)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tabs;