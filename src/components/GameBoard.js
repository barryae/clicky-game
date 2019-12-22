import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../assets/tileData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 100,
        height: 100
    },
}));

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBirds: [],
            score: 0,
            highScore: 0
        }
    }



    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp;
        }
    }

    handleClick(title, event) {
        event.preventDefault()
        if (this.state.chosenBirds.includes(title)) {
            if (this.state.score > this.state.highScore) {
                this.setState((state) => {
                    return {
                        highScore: state.score
                    }
                })
            }
            this.setState((state) => {
                return {
                    chosenBirds: [],
                    score: 0
                }
            })
            alert("Game Over")
            this.shuffle(tileData)
        } else {
            console.log("Correct!")
            this.setState((state) => {
                console.log(title)
                return {
                    chosenBirds: state.chosenBirds += title,
                    score: state.score += 1
                }
            })
            this.shuffle(tileData)
        }
    }

    render() {
        return (
            <>
                <div>
                    <h2>Instructions</h2>
                    <p>
                        Try to click on each image without clicking the
                        same one twice!
                </p>
                </div>
                <div>
                    <h3>High Score:{this.state.highScore}</h3>
                    <h3>Current Score:{this.state.score}</h3>
                </div>
                <div className={useStyles.root}>
                    <GridList cellHeight={250} className={useStyles.gridList} cols={3}>
                        {tileData.map(tile => (
                            <GridListTile onClick={(e) => this.handleClick(tile.title, e)} key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </>
        )
    }
}

export default GameBoard;