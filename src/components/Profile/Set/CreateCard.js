const CreateCard = (props) => {
    return (
        <div className="card-container">
            <div className="card-header-container">
                <span> Tạo học phần mới</span>
                <div>
                    <button className="btn btn-primary">Tạo</button>
                </div>
            </div>
            <div className="card-main-container">
                <div className="card-content1">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            @
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                            @example.com
                        </span>
                    </div>

                    <label className="form-label">Your vanity URL</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            https://example.com/users/
                        </span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                        <span className="input-group-text">.00</span>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">With textarea</span>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div className="card-content2">Thuật ngữ & định nghĩa</div>
            </div>
        </div>
    );
};

export default CreateCard;
