import React from 'react';

const DeviceItem = (props) => {
    const device = props.device;
    const onUserSelected = props.onUserSelected;
    const onDeviceStatusChange = props.onDeviceStatusChange;

    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-part text-center">
                <i className="fa fa-github fa-3x" aria-hidden="true"> </i>
                <div className="title">
                    <h4>{device.name}</h4>
                </div>
                <button className="btn btn-success" onClick={() => onDeviceStatusChange(device)} >Change Status</button>
                <div className="text">
                    <div>
                        <span><strong>Units: </strong>{device.unit}</span>
                    </div>
                    <div>
                        <span><strong>Value: </strong>{device.value}</span>
                    </div>
                    <div>
                        <span><strong>Timestamp: </strong>{new Date(device.timestamp).toString()}</span>
                    </div>
                    <div>
                        <span><strong>Status: </strong>{(device.active) ? 'True': 'False'}</span>

                    </div>
                </div>
                <a onClick={() => onUserSelected(device)} >Learn More</a>
            </div>
        </div>
    );
};

export default DeviceItem;
