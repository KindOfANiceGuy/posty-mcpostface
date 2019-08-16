import React from 'react';

const CreateBoardPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{ margin: 3 }}>
                        <form>
                            <div className="form-group">
                                <div className="d-flex">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <label htmlFor="name" className="input-group-text">Name</label>
                                        </div>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">/</span>
                                        </div>
                                        <input type="text" className="form-control"></input>
                                        <div class="input-group-append">
                                            <button class="btn btn-success" type="button" id="button-addon2">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBoardPage;