const ShowList = (props) => {
  if (props.list.length == 0) {
    return (<h1>List is Empty</h1>);
  } else {    var listData = props.list.map(item => {
      return (<div><p>{item}</p><button>Edit</button><button>Delete</button></div>);
    });
    return (<div>{listData}</div>);
  };
};

const Errors = (props) => {
  if (props.error.length != 0) {
    return (<p>{props.error}</p>);
  } else {
    return <div></div>;
  };
};

class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.getInputValue = this.getInputValue.bind(this);
  }

  state = {
    list : [],
    word : "",
    error: ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
  }

  getInputValue() {
    let content = this.state.word;
    if (content.length > 0) {
      this.changeHandler({target: {value: ""}});
      this.state.list.push(content);
      this.setState({ list: this.state.list });
      this.setState({ error: "" });
    } else {
      this.setState({ error: "Need to Enter Something" });
    }
  }


  render() {
      return (
        <div className="list">
          <Errors error={this.state.error}/>
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.getInputValue}>add item</button>
          <ShowList list={this.state.list}/>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);