import React, {Component} from 'react';

class Admin extends Component {
    render() {
        return <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-heading card-default">
                            <div className="pull-right mt-10">
                                <a href="javascript: void(0);" className="btn btn-primary btn-icon"><i className="fa fa-plus" /> Add New Product</a>
                            </div>
                            Products
                            <p className="text-muted">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="card-block">
                            <table id="datatable1" className="table table-striped dt-responsive nowrap table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">
                                        <strong>ID</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Name</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Description</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Price</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Status</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Added</strong>
                                    </th>
                                    <th className="text-center">
                                        <strong>Action</strong>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>Product 1</td>
                                    <td>Description for Product</td>
                                    <td>$ 12.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>Product 2</td>
                                    <td>Description for Product</td>
                                    <td>$ 13.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>Product 3</td>
                                    <td>Description for Product</td>
                                    <td>$ 14.20</td>
                                    <td className="text-center">
                                        <span className="label label-danger">Removed</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>Product 4</td>
                                    <td>Description for Product</td>
                                    <td>$ 15.20</td>
                                    <td className="text-center">
                                        <span className="label label-warning">Out of Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0005</td>
                                    <td>Product 5</td>
                                    <td>Description for Product</td>
                                    <td>$ 16.20</td>
                                    <td className="text-center">
                                        <span className="label label-danger">Removed</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0006</td>
                                    <td>Product 6</td>
                                    <td>Description for Product</td>
                                    <td>$ 17.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0007</td>
                                    <td>Product 7</td>
                                    <td>Description for Product</td>
                                    <td>$ 18.20</td>
                                    <td className="text-center">
                                        <span className="label label-danger">Removed</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0008</td>
                                    <td>Product 8</td>
                                    <td>Description for Product</td>
                                    <td>$ 19.20</td>
                                    <td className="text-center">
                                        <span className="label label-warning">Out of Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0009</td>
                                    <td>Product 9</td>
                                    <td>Description for Product</td>
                                    <td>$ 110.20</td>
                                    <td className="text-center">
                                        <span className="label label-danger">Removed</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00010</td>
                                    <td>Product 10</td>
                                    <td>Description for Product</td>
                                    <td>$ 111.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00011</td>
                                    <td>Product 11</td>
                                    <td>Description for Product</td>
                                    <td>$ 112.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00012</td>
                                    <td>Product 12</td>
                                    <td>Description for Product</td>
                                    <td>$ 113.20</td>
                                    <td className="text-center">
                                        <span className="label label-warning">Out of Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00013</td>
                                    <td>Product 13</td>
                                    <td>Description for Product</td>
                                    <td>$ 114.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00014</td>
                                    <td>Product 14</td>
                                    <td>Description for Product</td>
                                    <td>$ 115.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>00015</td>
                                    <td>Product 15</td>
                                    <td>Description for Product</td>
                                    <td>$ 116.20</td>
                                    <td className="text-center">
                                        <span className="label label-success">Stock</span>
                                    </td>
                                    <td>15/07/2017</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-default"><i className="fa fa-search" /></button>
                                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Admin;
