import React from "react";

class Test extends React.Component {
  state = {
    angka: 0,
  };
  tambah = () => {
    this.setState({
      angka: angka + 1,
    });
  };
  kurang = () => {
    this.setState({
      angka: angka - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.state.angka}
        <button onClick={this.tambah}>TAMBAH</button>
        <button onClick={this.kurang}>KURANG</button>
      </div>
    );
  }
}
export default Test;
