import React, { Component } from "react";
import "./HomeLayout.css";
import "./Card.css";
// import logo from "../../assets/images/logo.svg";
import QrReader from 'react-qr-reader'
import {Game} from "../../models/Game";

class QrCodeLayout extends Component {
    //cards: ["1","2","3","4","5","6","7"],
    state = {
        cards: [],
        result: 'd-none'
      }
     
      constructor(props){
          super(props);
          this.clearCards = this.clearCards.bind(this);
          
          this.game = new Game(2, 0);
      }
      handleScan = data => {
        if(data) {
            
            let cards = this.state.cards;

            let currentCard = this.game.getDataCard(data)
            //Si la carte n'est pas déjà dans le tableau, on ajoute dans cards son ID
            !cards.includes(currentCard) ? cards.push(currentCard) : console.log("This item already exists");
            this.setState({
            result: data,
            cards : cards
          })
        }
      }

      handleError = err => {
        console.error(err);
      }

      clearCards(){
          if(typeof this.state.cards !== 'undefined'){
            let cards = this.state.cards;
            cards.length=0;
            cards=[];
            this.setState({
                result: 'd-none',
                cards : cards
              });
          }
        
      }
	render() {
        const cards = this.state.cards;
		return (
			<div className="App">
                <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"/>
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
                            <div className="col-md-3">
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{  }}
                                />
                                <button style={{ width: "100%" }}  type="button" className="btn btn-info">Lancer la main</button>
                                <button onClick={this.clearCards} style={{ width: "100%" }} type="button" className="btn btn-danger">Recommencer la main</button>
                            </div>
                            <div className="col-md-9">
                                <div className="row" id="cards-list">
                                    {cards.map((item, id) => {
                                            return (
                                            <div 
                                            key={`card-id-${id}`} className="col-md-3">
                                                <div className="c-card">
                                                    <div className="c-card-header">
                                                    <p className="c-card-order">{`n°${id+1}`}</p>
                                                    <p className="c-card-name">{`${item.name}`}</p>
                                                    
                                                    </div>
                                                    <div className="c-card-body">
                                                        <p>{`Description : ${item.desc} `}</p>
                                                    </div>
                                                    <div className="c-card-code">
                                                        <p>{`${item.action}()`}</p>
                                                    </div>
                                                    <div className="c-card-footer">
                                                        <p className="c-energy-cost">{item.cost}<span aria-label="energy-icon" role="img">⚡</span></p>
                                                        <div className="row">
                                                            
                                                        </div>
                                                        
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
