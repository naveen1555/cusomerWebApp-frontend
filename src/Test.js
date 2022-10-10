import { Component } from "react";

class Test extends Component {
  componentDidMount() {
    this.getRestaurantDetails();
  }
  getRestaurantDetails = async () => {
    const apiUrl = "http://localhost:5000/selectCustomers";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
  };
  render() {
    return <div>fdfdf</div>;
  }
}

export default Test;
