import React from 'react';
import { arr } from './quotesArr';

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			random: null,
			text: '',
			author: ''
		};
		this.findRandom = this.findRandom.bind(this);
	}

	findRandom() {
		const randomNum = Math.floor(Math.random() * 14);
		console.log(randomNum);
		let arrSplit = arr[randomNum].split(':');
		let first = arrSplit[0];
		let second = arrSplit[1];
		console.log(arr[randomNum]);
		this.setState({
			random: randomNum,
			text: first,
			author: second
		});
	}

	componentDidMount() {
		this.findRandom();
	}

	render() {
		return (
			<div>
				<header>
					<h1>WES ANDERSON QUOTE MACHINE</h1>
				</header>
				<div id="quote-box">
					<p id="text">
						<img
							src={require('./images/quote-icon.png')}
							width="32"
							alt=""
						/>{' '}
						{this.state.text}
					</p>
					<p id="author">-{this.state.author}</p>
					<div id="btns">
						<a
							href={'https://twitter.com/intent/tweet?text=' + this.state.text + ' -' + this.state.author}
							target="blank"
							id="tweet-quote"
						>
							<img
								src={require('./images/quote-twitter.png')}
								width="42"
								className="btn"
								alt="Tweet this quote"
							/>
						</a>
						<img
							src={require('./images/quote-refresh.png')}
							onClick={this.findRandom}
							id="new-quote"
							width="42"
							className="btn"
							alt="Randomize new quote"
						/>
					</div>
				</div>
			</div>
		);
	}
}


export default Quote;
