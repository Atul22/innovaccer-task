import React, {Component} from 'react';
import '../../styles/summary.css';

class Summary extends Component {
	render() {
		const {title, subTitle, value} = this.props;
		let classname = 'fa fa-xs fa-wrench icons';
		if(title)
			classname = 'fa fa-xs fa-ellipsis-v icons'
		return (
			<div>
				<div className='container'>
					<div className='title'>
						{title}
					</div>
					<div className='actions'>
						<i class="fa fa-xs fa-upload icons"></i>
						<i class={classname}></i>
					</div>
				</div>

				<div className='subTitle'>
					{subTitle}
				</div>

				<div className='value'>
					{value}
				</div>
			</div>
		)
	}
}

export default Summary;