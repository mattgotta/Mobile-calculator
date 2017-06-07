/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

class Test extends Component {
  constructor (props) {
    super(props)
    let {width, height} = Dimensions.get('window')
    console.log(width, height)
  }
}

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    let {width, height} = Dimensions.get('window')
    console.log(width, height)
    this.state = {
      userInput: "0",
      firstInput: "",
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false,
      width,
      height
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleSqrt = this.handleSqrt.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDivision = this.handleDivision.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleInversion = this.handleInversion.bind(this);
    this.handleClearEntry = this.handleClearEntry.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNeg = this.handleNeg.bind(this);
    this.containerStyle = this.containerStyle.bind(this);
    this.buttonStyle = this.buttonStyle.bind(this);
    this.topButtonStyle = this.topButtonStyle.bind(this);
  }

  setAllFalse () {
    this.setState({
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false
    });
  }
  switchInputs () {
    this.setState({
      firstInput: this.state.userInput,
      userInput: "0"
  });
}
  clearAllInput () {
    this.setState({
      firstInput: "",
      userInput: "0"
    });
  }

  handleClick (e) {
    if (e.target.value != "." && this.state.userInput == "0"){
      this.setState({
        userInput: e.target.value
      })
    }
    else {
      this.setState({
        userInput: this.state.userInput + e.target.value
      });
    }
    console.log('yep');
    console.log(e.target.value);
  }

  handleAdd () {
    if (this.state.multiplication || this.state.division ||
       this.state.addition || this.state.subtraction) {
         if (parseFloat(this.state.userInput) == 0) {
           this.setAllFalse();
           this.setState({addition: true})
         }
         else {
           var a = this.handleEquals();
           this.setState({
             addition: true,
             userInput: "0",
             firstInput: a
           })
         }
    }
    else {
      this.setAllFalse();
      this.switchInputs();
      this.setState({
        addition: true,
      });
    }
  }

  handleSubtract () {
    if (this.state.multiplication || this.state.division ||
       this.state.addition || this.state.subtraction) {
         if (parseFloat(this.state.userInput) == 0) {
           this.setAllFalse();
           this.setState({subtraction: true})
         }
         else {
           var a = this.handleEquals();
           this.setState({
             subtraction: true,
             userInput: "0",
             firstInput: a
           })
         }
    }
    else {
      this.setAllFalse();
      this.setState({
        firstInput: this.state.userInput,
        userInput: "",
        subtraction: true
      });
    }
  }

  handleSqrt () {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.clearAllInput();
    this.setState({
      userInput: Math.sqrt(first)
    });
  }
  handlePower () {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      userInput: Math.pow(first,2)
    });
  }
  handleInversion() {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      userInput: 1/first
    });
  }

  handleClear () {
    this.setAllFalse();
    this.clearAllInput();
  }
  handleDivision () {
    if (this.state.multiplication || this.state.division ||
       this.state.addition || this.state.subtraction) {
         if (parseFloat(this.state.userInput) == 0) {
           this.setAllFalse();
           this.setState({division: true})
         }
         else {
           var a = this.handleEquals();
           this.setState({
             division: true,
             userInput: "0",
             firstInput: a
           })
         }
    }
    else {
      this.setAllFalse();
      this.switchInputs();
      this.setState({
        division: true
      });
    }
    }
  handleMultiplication () {
    if (this.state.multiplication || this.state.division ||
       this.state.addition || this.state.subtraction) {
         if (parseFloat(this.state.userInput) == 0) {
           this.setAllFalse();
           this.setState({multiplication: true})
         }
         else {
           var a = this.handleEquals();
           this.setState({
             multiplication: true,
             userInput: "0",
             firstInput: a
           })
         }
    }
    else {
      this.setAllFalse();
      this.switchInputs();
      this.setState({
        multiplication: true
      });
    }
    }
  handleClearEntry () {
    this.setState({
      userInput: "0"
    })
  }
  handleBack() {
    this.setState({
      userInput: this.state.userInput.slice(0, -1)
    });
    this.checkEmptyString();
  }
  checkEmptyString() {
    if (this.state.userInput.length == 1){ //String(Math.abs(parseFloat(this.state.userInput))).length==1 how it was
      this.setState({
        userInput: "0"
      });
    }
  }
  handleNeg() {
    var number = parseFloat(this.state.userInput)
    number = -number;
    this.setState({
      userInput: number.toString()
    })
  }
  handleEquals () {
    if (this.state.addition == true){
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      var secretOutput = first + second;
      this.setState({
        userInput: String(secretOutput)
      });
      return secretOutput;
    }
    else if (this.state.subtraction == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      var secretOutput = first - second;
      this.setState({
        userInput: String(secretOutput)
      });
      return secretOutput;
    }
    else if (this.state.division == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      var secretOutput = first / second;
      this.setState({
        userInput: String(secretOutput)
      });
      return secretOutput;
    }
    else if (this.state.multiplication == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      var secretOutput = first * second;
      this.setState({
        userInput: String(secretOutput)
      });
      return secretOutput;
    }
  }
  handlePress(e) {
    if (e != "." && this.state.userInput == "0"){
      this.setState({
        userInput: e
      })
    }
    else {
      this.setState({
        userInput: this.state.userInput + e
      });
    }
  }
  onLayout() {
    let {width, height} = Dimensions.get('window');
    this.setState({
      width,
      height
    });
  }
  containerStyle() {
    return {
        width: this.state.width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABABAB',
    }
  }
  buttonStyle() {
    let buttonWidth = this.state.width / 4;
    return {
      flex: 1,
      padding: 13,
      backgroundColor: '#E3E3E3',
      color: '#000000',
      fontFamily: 'Arial',
      width: buttonWidth,
      textAlign: 'center',
    }
  }
  topButtonStyle() {
    let buttonWidth = this.state.width / 3;
    return {
      flex: 1,
      padding: 13,
      backgroundColor: '#E3E3E3',
      color: '#000000',
      fontFamily: 'Arial',
      width: buttonWidth,
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {
    return (
      <View style={this.containerStyle()} onLayout={()=> this.onLayout()}>
        <Text style={styles.display}>
          {this.state.firstInput}
        </Text>
        <Text style={styles.displayMain}>
          {this.state.userInput}
        </Text>
        <View style={styles.buttonsView}>
          <Button id='sqrt' onPress={this.handleSqrt} style={this.topButtonStyle()}>sqrt</Button>
          <Button id='^2' onPress={this.handlePower} style={this.topButtonStyle()}>^2</Button>
          <Button id='1/x' onPress={this.handleInversion} style={this.topButtonStyle()}>1/x</Button>
        </View>
        <View style={styles.buttonsView}>
          <Button id='CE' onPress={this.handleClearEntry} style={this.buttonStyle()}>CE</Button>
          <Button id='clear' onPress={this.handleClear} style={this.buttonStyle()}>C</Button>
          <Button id='back' onPress={this.handleBack}  style={this.buttonStyle()}>Back</Button>
          <Button id='divide' onPress={this.handleDivision} style={this.buttonStyle()}>/</Button>
        </View>
        <View style={styles.buttonsView}>
          <Button id='7' onPress={this.handlePress.bind(this,'7')} style={this.buttonStyle()}>7</Button>
          <Button id='8' onPress={this.handlePress.bind(this,'8')} style={this.buttonStyle()}>8</Button>
          <Button id='9' onPress={this.handlePress.bind(this,'9')} style={this.buttonStyle()}>9</Button>
          <Button id='multiply' onPress={this.handleMultiplication} style={this.buttonStyle()}>*</Button>
        </View>
        <View style={styles.buttonsView}>
          <Button id='4' onPress={this.handlePress.bind(this,'4')} style={this.buttonStyle()}>4</Button>
          <Button id='5' onPress={this.handlePress.bind(this,'5')} style={this.buttonStyle()}>5</Button>
          <Button id='6' onPress={this.handlePress.bind(this,'6')} style={this.buttonStyle()}>6</Button>
          <Button id='minus' onPress={this.handleSubtract} style={this.buttonStyle()}>-</Button>
        </View>
        <View style={styles.buttonsView}>
          <Button id='1' onPress={this.handlePress.bind(this,'1')} style={this.buttonStyle()}>1</Button>
          <Button id='2' onPress={this.handlePress.bind(this,'2')} style={this.buttonStyle()}>2</Button>
          <Button id='3' onPress={this.handlePress.bind(this,'3')} style={this.buttonStyle()}>3</Button>
          <Button id='add' onPress={this.handleAdd} style={this.buttonStyle()}>+</Button>
        </View>
        <View style={styles.buttonsView}>
          <Button id='negate' onPress={this.handleNeg} style={this.buttonStyle()}>neg</Button>
          <Button id='0' onPress={this.handlePress.bind(this,'0')} style={this.buttonStyle()}>0</Button>
          <Button id='decimal' onPress={this.handlePress.bind(this,'.')} style={this.buttonStyle()}>.</Button>
          <Button id='equals' onPress={this.handleEquals} style={this.buttonStyle()}>=</Button>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  buttonsView : {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  display: {
    height: 20,
  },
  displayMain: {
    height: 50,
    fontSize: 25,
    textAlign: 'right',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
