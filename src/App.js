import React, { Component } from 'react';
import shuffle from 'shuffle-array';

import permutations from './api/permutations';
import Quiz from './components/Quiz';
import Result from './components/Result';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      numberOfQuestions: 3,
      numberOfAnswers: 4,
      selectedAnswer: '',
      answers: []
    };

    this.permutationMap = this.mapNamesToPermutations();

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  mapNamesToPermutations() {
    return permutations.reduce(function (map, permutation) {
      map[permutation.name] = permutation;
      return map;
    }, {});
  }

  selectPermutation() {
    return shuffle.pick(permutations);
  }

  selectAnswerOptions(permutation) {
    const numberOfAnswers = this.state.numberOfAnswers;
    let answerOptions = shuffle.pick(permutations, { 'picks': numberOfAnswers });

    // Make sure options contains permutation
    if (!answerOptions.includes(permutation)) {
      answerOptions[0] = permutation;
      answerOptions = shuffle(answerOptions);
    }

    return answerOptions;
  }

  randomTopRotation() {
    const letter = 'U';
    
    switch (Math.floor(Math.random() * 4)) {
      case 1:
        return letter;
      case 2:
        return letter + 2;
      case 3:
        return letter + '\'';
      default:
        return '';
    }
  }

  componentWillMount() {
    const permutation = this.selectPermutation();
    const answerOptions = this.selectAnswerOptions(permutation);
    const preRotation = this.randomTopRotation();
    const postRotation = this.randomTopRotation();

    this.setState({
      permutation: permutation,
      answerOptions: answerOptions,
      preRotation,
      postRotation
    });
  }

  setUserAnswer(selectedAnswer) {
    const actualPermutation = this.state.permutation;
    const correctAnswer = selectedAnswer === actualPermutation.name;
    const selectedPermutation = this.permutationMap[selectedAnswer];
    const preRotation = this.state.preRotation;
    const postRotation = this.state.postRotation;

    const questionAnswered = {
      actualPermutation,
      selectedAnswer,
      selectedPermutation,
      correctAnswer,
      preRotation,
      postRotation
    };

    this.setState({
      selectedAnswer,
      answers: [...this.state.answers, questionAnswered]
    });
  }

  setNextQuestion() {
    const permutation = this.selectPermutation();
    const answerOptions = this.selectAnswerOptions(permutation);
    const preRotation = this.randomTopRotation();
    const postRotation = this.randomTopRotation();

    this.setState({
      counter: this.state.counter + 1,
      permutation,
      answerOptions,
      selectedAnswer: '',
      preRotation,
      postRotation
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    setTimeout(() => this.setNextQuestion(), 300);
  }

  renderQuiz() {
    return (
      <div className="App">
        <Quiz
          counter={this.state.counter + 1}
          total={this.state.numberOfQuestions}
          permutation={this.state.permutation}
          answerOptions={this.state.answerOptions}
          onAnswerSelected={this.handleAnswerSelected}
          selectedAnswer={this.state.selectedAnswer}
          preRotation={this.state.preRotation}
          postRotation={this.state.postRotation}
        />
      </div>
    );
  }

  renderResult() {
    return (
      <Result
        answers={this.state.answers}
      />
    );
  }

  render() {
    return this.state.counter < this.state.numberOfQuestions ? this.renderQuiz() : this.renderResult();
  }
}

export default App;