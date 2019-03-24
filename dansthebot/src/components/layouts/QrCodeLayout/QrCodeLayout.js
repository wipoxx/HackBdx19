import React, { Component } from "react";
import "./Card.css";
import QrReader from "react-qr-reader";
import { Game } from "../../models/Game";

class QrCodeLayout extends Component {
	state = {
		cards: [],
		lastCard: null,
		errors: [],
		result: "d-none",
	};

	constructor(props) {
		super(props);
		this.clearCards = this.clearCards.bind(this);
		this.startAlgorithm = this.startAlgorithm.bind(this);
		this.game = new Game(2, 0);
	}
	handleScan = data => {
		if (data) {
			let cards = this.state.cards;
			let lastCard = this.state.lastCard;
			let currentCard = this.game.getDataCard(data);
			if (lastCard !== null) {
				if (currentCard.type === "Fin structure de controle") {
					//Dans ce cas la, le joueur n'est pas censé jouer cette carte.
					var hasOneStructureDeControle = false;
					cards.forEach(function(element) {
						if (element.type === "Structure de controle") {
							hasOneStructureDeControle = true;
						}
					});
					if (hasOneStructureDeControle) {
						!cards.includes(currentCard)
							? cards.push(currentCard)
							: console.log("This item already exists");
					} else {
						console.log("Veuillez jouer une carte SDC avant une Fin de SDC");
						this.setState({
							errors: [
								"Veuillez jouer une carte Structure de contrôle avant d'essayer de la terminer.",
							],
						});
					}
				} else if (
					lastCard.type === "Structure de controle" &&
					currentCard.type !== "Condition"
				) {
					//Dans ce cas la, le joueur n'est pas censé jouer cette carte.
					console.log("Veuillez jouer une carte condition après une SDC");
					this.setState({
						errors: [
							"Veuillez jouer une carte condition après une Structure de contrôle",
						],
					});
				} else if (
					currentCard.type === "Condition" &&
					lastCard.type !== "Structure de controle"
				) {
					//Dans ce cas la, le joueur n'est pas censé jouer cette carte.
					console.log(
						"Veuillez jouer une carte Structure de contrôle avant une condition",
					);
					this.setState({
						errors: ["Veuillez jouer une carte SDC avant une condition"],
					});
				} else {
					//Si la carte n'est pas déjà dans le tableau, on ajoute dans cards son ID

					!cards.includes(currentCard)
						? cards.push(currentCard)
						: console.log("This item already exists");
					this.setState({
						result: data,
						lastCard: currentCard,
						errors: [],
						cards: cards,
					});
				}
			} else {
				console.log(currentCard.type);
				if (
					currentCard.type !== "Condition" &&
					currentCard.type !== "Fin structure de controle"
				) {
					!cards.includes(currentCard)
						? cards.push(currentCard)
						: console.log("This item already exists");
					this.setState({
						result: data,
						lastCard: currentCard,
						errors: [],
						cards: cards,
					});
				} else {
				}
			}
			console.log(lastCard);
		}
	};

	handleError = err => {
		console.error(err);
	};

	clearCards() {
		if (typeof this.state.cards !== "undefined") {
			let cards = this.state.cards;
			cards.length = 0;
			cards = [];
			this.setState({
				result: "d-none",
				cards: cards,
			});
		}
	}

	startAlgorithm() {
		let cards = this.state.cards;
		let nbStructureDeControle = 0;
		let nbFinStructureDeControle = 0;
		cards.forEach(function(element) {
			console.log(element);
			if (element.type === "Structure de controle") {
				nbStructureDeControle++;
			} else if (element.type === "Fin structure de controle") {
				nbFinStructureDeControle++;
			}
		});
		if (nbStructureDeControle !== nbFinStructureDeControle) {
			console.log("Vous avez des structures de contrôle non terminé.");
			this.setState({
				errors: ["Vous avez des structures de contrôle non terminé."],
			});
		} else {
			console.log(this.game.HandleAlgo(this.state.cards));
		}
	}
	render() {
		const cards = this.state.cards;

		const errors = this.state.errors;
		return (
			<div className="App">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"
				/>
				{/*                 
				<header className="App-header">
				</header> */}
				<div className="qr-viewer">
					{/* <div className="row">
                            <div className="col-md-2">
                                QR Code Scan
                            </div>
                            <div className="col-md-8">
                                Cartes sélectionnés
                            </div>
                        </div> */}
					<div className="row">
						{errors.map((item, id) => {
							return (
								<div
									key={`alert-id-${id}`}
									role="alert"
									className="alert alert-danger"
								>
									{`${item}`}
								</div>
							);
						})}
					</div>
					<div className="row">
						<div className="col-md-3">
							<QrReader
								delay={300}
								onError={this.handleError}
								onScan={this.handleScan}
								style={{}}
							/>
							<button
								onClick={this.startAlgorithm}
								style={{ width: "100%" }}
								type="button"
								className="btn btn-info"
							>
								Lancer la main
							</button>
							<button
								onClick={this.clearCards}
								style={{ width: "100%" }}
								type="button"
								className="btn btn-danger"
							>
								Recommencer la main
							</button>
						</div>
						<div className="col-md-9">
							<div className="row" id="cards-list">
								{cards.map((item, id) => {
									return (
										<div key={`card-id-${id}`} className="col-md-3">
											<div className="c-card">
												<div className="c-card-header">
													<p className="c-card-order">{`n°${id + 1}`}</p>
													<p className="c-card-name">{`${item.name}`}</p>
												</div>
												<div className="c-card-body">
													<p>{`Description : ${item.desc} `}</p>
												</div>
												<div className="c-card-code">
													<p>{`${item.action}()`}</p>
												</div>
												<div className="c-card-footer">
													<p className="c-energy-cost">
														{item.cost}
														<span aria-label="energy-icon" role="img">
															⚡
														</span>
													</p>
													<div className="row" />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QrCodeLayout;
