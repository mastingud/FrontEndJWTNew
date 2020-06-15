import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import AuthService from "../services/auth.service";


export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      brand:"",
      published: false,
      userId : AuthService.getCurrentUser().id,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  saveProduct() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      brand: this.state.brand,
      userId : this.state.userId
    };

    ProductDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          brand: response.data.brand,
          published: response.data.published,
          userId: response.data.userId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      title: "",
      description: "",
      brand:"",
      published: false,
      userId : AuthService.getCurrentUser().id,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduct}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Jenis</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                required
                value={this.state.brand}
                onChange={this.onChangeBrand}
                name="brand"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Nama Produk</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            

            <button onClick={this.saveProduct} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }

}
